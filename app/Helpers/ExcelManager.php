<?php

//dd(__DIR__.'\..\..\vendor\autoload.php');
//require base_path().'\vendor\autoload.php';
//require __DIR__.'\..\..\..\..\vendor\autoload.php';

namespace App\Helpers;

use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

class Row
{

    /*
    protected $properties = array();

    public function __set($name, $value)
    {
    $this->$name = $value;
    }

    public function setProperties($properties){
    $this->properties = $properties;
    }

    public function __get($name){
    if(isset($this->user_properties[$name]){
    return $this->user_properties[$name];
    }

    }
     */
    public function createProperty($propertyName, $propertyValue)
    {
        $this->{$propertyName} = $propertyValue;
    }
}

class ExcelManager
{

    private const INITIAL_COLUMN = 65;

    public const XLS = 'Xls';
    public const XLSX = 'Xlsx';
    public const PDF = 'Pdf';

    private $fileType = '';
    private $fileName = '';
    private $spreadSheet = null;
    private $rowListMarked = array();

    public function __construct($type = null)
    {
        $this->spreadSheet = new Spreadsheet;

        if (isset($type)) {
            $this->fileType = $type;
        }
    }

    private function getColumn($columnNumber)
    {
        return sprintf('%c', $columnNumber);
    }

    public function setFileName($fileName)
    {
        $this->fileName = $fileName . '.' . strtolower($this->fileType);
    }

    public function save()
    {
        $writer = IOFactory::createWriter($this->spreadSheet, $this->fileType);
        $writer->save('php://output');
    }

    private function setColumnNamesInSpreadsheet($list, $columNameList = null)
    {
        if (count($list) >= 1) {
            $row = $list[0];
            $i = 1;
            //$initialColumn = self::INITIAL_COLUMN;
            $initialColumn = self::INITIAL_COLUMN - 64; //segun la documentacion de PhpSpreadsheet la columna A es igual a 1, x eso se resta 64

            if (is_null($columNameList)) {
                foreach ($row as $key => $value) {
                    $column = $this->getColumn($initialColumn);
                    //$this->spreadSheet->setActiveSheetIndex(0)->setCellValue($column.$i, $key);
                    $this->spreadSheet->setActiveSheetIndex(0)->setCellValueByColumnAndRow($initialColumn, $i, $key);
                    $initialColumn = $initialColumn + 1;
                }
            } else { //se exporta sólo las columnas que se indican en $columNameList
                foreach ($row as $key => $value) {
                    if (array_key_exists($key, $columNameList)) {
                        $column = $this->getColumn($initialColumn);
                        $newColumName = $columNameList[$key];
                        //$this->spreadSheet->setActiveSheetIndex(0)->setCellValue($column.$i, $newColumName);
                        $this->spreadSheet->setActiveSheetIndex(0)->setCellValueByColumnAndRow($initialColumn, $i, $newColumName);
                        $initialColumn = $initialColumn + 1;
                    }
                }
            }
        }
    }

    private function setColumnNamesInSpreadsheet2($list, $columNameList = null,$i)
    {
        if (count($list) >= 1) {
            $row = $list[0];
            //$initialColumn = self::INITIAL_COLUMN;
            $initialColumn = self::INITIAL_COLUMN - 64; //segun la documentacion de PhpSpreadsheet la columna A es igual a 1, x eso se resta 64

            if (is_null($columNameList)) {
                foreach ($row as $key => $value) {
                    $column = $this->getColumn($initialColumn);
                    //$this->spreadSheet->setActiveSheetIndex(0)->setCellValue($column.$i, $key);
                    $this->spreadSheet->setActiveSheetIndex(0)->setCellValueByColumnAndRow($initialColumn, $i, $key);
                    $initialColumn = $initialColumn + 1;
                }
            } else { //se exporta sólo las columnas que se indican en $columNameList
                foreach ($row as $key => $value) {
                    if (array_key_exists($key, $columNameList)) {
                        $column = $this->getColumn($initialColumn);
                        $newColumName = $columNameList[$key];
                        //$this->spreadSheet->setActiveSheetIndex(0)->setCellValue($column.$i, $newColumName);
                        $this->spreadSheet->setActiveSheetIndex(0)->setCellValueByColumnAndRow($initialColumn, $i, $newColumName);
                        $initialColumn = $initialColumn + 1;
                    }
                }
            }
        }
    }

    public function fillExcelTwo($listOne, $listTwo, $title, $type = null, $creator = null, $columnNameListOne = null, $columnNameListTwo = null)
    {
        if (!is_null($type)) {
            $this->fileType = $type;
        }

        if (!is_null($creator)) {
            $this->spreadSheet->getProperties()->setCreator($creator);
        }

        $this->spreadSheet->setActiveSheetIndex(0);
        //</editor-fold>
        $this->spreadSheet->setActiveSheetIndex(0)->setTitle($title);

        //seteamos el nombre de las columnas del archivo excel
        if (count($listOne) >= 1) {
            $this->setColumnNamesInSpreadsheet($listOne, $columnNameListOne);

            //===
            $initialRow = 1;
            $row = [];
            $index = 0;
            for ($i = 0; $i < count($listOne); $i++) {
                $row = $listOne[$i];
                //$initialColumn = self::INITIAL_COLUMN;
                $initialColumn = self::INITIAL_COLUMN - 64; //segun la documentacion de PhpSpreadsheet la columna A es igual a 1, x eso se resta 64
                $initialRow = $initialRow + 1;

                if (is_null($columnNameListOne)) {
                    foreach ($row as $key => $value) {
                        //$this->spreadSheet->setActiveSheetIndex(0)->setCellValue($this->getColumn($initialColumn).$initialRow, $value);
                        $this->spreadSheet->setActiveSheetIndex(0)->setCellValueByColumnAndRow($initialColumn, $initialRow, $value);
                        $initialColumn = $initialColumn + 1;
                    }
                } else {
                    //foreach ($columnNameListOne as $key => $value) {
                    foreach ($row as $key => $value) {

                        if (array_key_exists($key, $columnNameListOne)) {
                            //$this->spreadSheet->setActiveSheetIndex(0)->setCellValue($this->getColumn($initialColumn).$initialRow, $value);
                            $this->spreadSheet->setActiveSheetIndex(0)->setCellValueByColumnAndRow($initialColumn, $initialRow, $value);
                            $initialColumn = $initialColumn + 1;
                            #dd( $this, $columnNameListOne);
                        }
                    }
                }
                $index++;
            }

            //===============================
            #Agregar listado 2
            $initialRow = $initialRow + 4;
            $this->setColumnNamesInSpreadsheet2($listTwo, $columnNameListTwo,$initialRow);
            for ($i = 0; $i < count($listTwo); $i++) {
                $row = $listTwo[$i];
                //$initialColumn = self::INITIAL_COLUMN;
                $initialColumn = self::INITIAL_COLUMN - 64; //segun la documentacion de PhpSpreadsheet la columna A es igual a 1, x eso se resta 64
                $initialRow = $initialRow + 1;

                if (is_null($columnNameListTwo)) {
                    foreach ($row as $key => $value) {
                        //$this->spreadSheet->setActiveSheetIndex(0)->setCellValue($this->getColumn($initialColumn).$initialRow, $value);
                        $this->spreadSheet->setActiveSheetIndex(0)->setCellValueByColumnAndRow($initialColumn, $initialRow, $value);
                        $initialColumn = $initialColumn + 1;
                    }
                } else {
                    //foreach ($columnNameListTwo as $key => $value) {
                    foreach ($row as $key => $value) {

                        if (array_key_exists($key, $columnNameListTwo)) {
                            //$this->spreadSheet->setActiveSheetIndex(0)->setCellValue($this->getColumn($initialColumn).$initialRow, $value);
                            $this->spreadSheet->setActiveSheetIndex(0)->setCellValueByColumnAndRow($initialColumn, $initialRow, $value);
                            $initialColumn = $initialColumn + 1;
                            #dd( $this, $columnNameListTwo);
                        }
                    }
                }
            }
        }
        //endregion
    }

    public function fillExcel($list, $title, $type = null, $creator = null, $columNameList = null)
    {
        if (!is_null($type)) {
            $this->fileType = $type;
        }

        if (!is_null($creator)) {
            $this->spreadSheet->getProperties()->setCreator($creator);
        }

        $this->spreadSheet->setActiveSheetIndex(0);
        //</editor-fold>
        $this->spreadSheet->setActiveSheetIndex(0)->setTitle($title);

        //seteamos el nombre de las columnas del archivo excel
        if (count($list) >= 1) {
            $this->setColumnNamesInSpreadsheet($list, $columNameList);

            //iniciamos desde una posicion 2 ya que la primera posicion es el nombre de las columnas
            $initialRow = 1;

            for ($i = 0; $i < count($list); $i++) {
                $row = $list[$i];
                //$initialColumn = self::INITIAL_COLUMN;
                $initialColumn = self::INITIAL_COLUMN - 64; //segun la documentacion de PhpSpreadsheet la columna A es igual a 1, x eso se resta 64
                $initialRow = $initialRow + 1;

                if (is_null($columNameList)) {
                    foreach ($row as $key => $value) {
                        //$this->spreadSheet->setActiveSheetIndex(0)->setCellValue($this->getColumn($initialColumn).$initialRow, $value);
                        $this->spreadSheet->setActiveSheetIndex(0)->setCellValueByColumnAndRow($initialColumn, $initialRow, $value);
                        $initialColumn = $initialColumn + 1;
                    }
                } else {
                    //foreach ($columNameList as $key => $value) {
                    foreach ($row as $key => $value) {

                        if (array_key_exists($key, $columNameList)) {
                            //$this->spreadSheet->setActiveSheetIndex(0)->setCellValue($this->getColumn($initialColumn).$initialRow, $value);
                            $this->spreadSheet->setActiveSheetIndex(0)->setCellValueByColumnAndRow($initialColumn, $initialRow, $value);
                            $initialColumn = $initialColumn + 1;
                            #dd( $this, $columNameList);
                        }
                    }
                }
            }
        }
        //endregion
    }

    public function setHeaders()
    {
        if (strtoupper($this->fileType) == 'XLS') {
            header('Content-Type: application/vnd.oasis.opendocument.spreadsheet');
            header('Content-Disposition: attachment;filename="' . $this->fileName . '"');
            header('Cache-Control: max-age=0');
        }

        if (strtoupper($this->fileType) == 'XLSX') {
            header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            header('Content-Disposition: attachment;filename="' . $this->fileName . '"');
            header('Cache-Control: max-age=0');
        }
    }

    private function getColumnNameList($sheet = null)
    {
        $columnList = array();
        $columnIndex = 1;
        $rowIndex = 1;
        while (true) {
            $cell = $sheet->getCellByColumnAndRow($columnIndex, $rowIndex);

            if (trim($cell->getValue()) == "") {
                break;
            }

            $columnList[] = $cell->getValue();

            $columnIndex = $columnIndex + 1;
        }

        return $columnList;
    }

    private function hasColumName()
    {
        $flag = false;

        $value = $this->spreadSheet->setActiveSheetIndex(0)->getCellByColumnAndRow(1, 1);
        if (trim($value) != "") {
            $flag = true;
        }

        return $flag;
    }

    public function insertRowAtPosition($object, $rowIndex)
    {
        if (!$this->hasColumName()) {
            $this->setColumnNamesInSpreadsheet($object);
        }

        $initialColumn = self::INITIAL_COLUMN - 64; //segun la documentacion de PhpSpreadsheet la columna A es igual a 1, x eso se resta 64
        foreach ($object as $key => $value) {
            $this->spreadSheet->setActiveSheetIndex(0)->setCellValueByColumnAndRow($initialColumn, $rowIndex, $value);
            $initialColumn = $initialColumn + 1;
        }
    }

    public function getRowListMarked()
    {
        return $this->rowListMarked;
    }

    public function isTheRightFileToLoad($fileName, $columnNameList)
    {
        $isOk = true;
        $reader = IOFactory::createReader($this->fileType);
        $spreadSheet = $reader->load($fileName);
        $fileColumnNameList = $this->getColumnNameList($spreadSheet->setActiveSheetIndex(0));

        foreach ($fileColumnNameList as $fileColumn) {
            $searchColumnName = collect($columnNameList)->contains($fileColumn);
            if (!$searchColumnName) {
                return $isOk = false;
            }
        }
        return $isOk;
    }

    public function loadFile($fileName, $callback)
    {
        if ((strtoupper($this->fileType) == 'XLSX') || (strtoupper($this->fileType) == 'XLS')) {
            $reader = IOFactory::createReader($this->fileType);
            $spreadSheet = $reader->load($fileName);

            $flag = "";

            $rowIndex = 2; //se empieza desde la fila 2 xq la fila 1 son los nombres de las columnas

            //$this->columnList = $this->getColumnNameList($spreadSheet->setActiveSheetIndex(0));
            $columnNameList = $this->getColumnNameList($spreadSheet->setActiveSheetIndex(0));

            #dd($columnNameList);
            while (true) {
                $object = new Row();
                $flag = "";

                //recorro las columnas de la hoja de excel en base a las columnas ya obtenidas
                for ($i = 1; $i <= count($columnNameList); $i++) {

                    $cell = $spreadSheet->setActiveSheetIndex(0)->getCellByColumnAndRow($i, $rowIndex);
                    #dd($cell );
                    $object->createProperty($columnNameList[$i - 1], $cell->getValue());

                    $flag = $flag . $cell->getValue();
                }
                //dd($object);

                //si todas las columnas que se estan evaluando al final estan en blanco, se detiene el bucle
                if (trim($flag) == "") {
                    #unset($object);
                    break;
                }

                if (is_callable($callback)) {
                    if (!$callback($object)) {
                        $this->rowListMarked[] = $object;
                    }
                }

                //unset($object);
                $rowIndex = $rowIndex + 1;
            }
        }
    }
}
