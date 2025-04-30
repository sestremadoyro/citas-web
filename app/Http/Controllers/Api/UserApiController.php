<?php

namespace App\Http\Controllers\Api;

use App\Helpers\SystemMessages;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserApiController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->middleware('auth');
    }

    //===============================================================================================

    public function updateUser(Request $request)
    {
        #dd($request->all());
        $message = "";
        $userObject = array(
            //"title" => strtoupper($title),
            "name" => ($request->has('name')) ? $request->input('name') : null,
            "last_names" => $request->input('last_names'),
            "email" => $request->input('email'),

            "new_password" => $request->input('new_password'),
            "confirm_password" => $request->input('confirm_password'),
            //"email"=> $request->input('email'),
        );

        try {
            $user = User::find(Auth::User()->id);
            $this->fillUser((object) $userObject, $user);
            $user->save();
            $success = true;

        } catch (\Exception $e) {
            $message = $e->getMessage();
        }

        if ($message == "") {
            $message = SystemMessages::GENERAL_UPDATED_SUCCESSFULLY;
        }

        return redirect()->route('profile.index')->with(['message' => $message]);
    }

    private function fillUser($userObject, &$user)
    {
        #dd($userObject->district);
        $user->updated_by = Auth::User()->id;
        $user->name = $userObject->name;
        $user->last_names = $userObject->last_names;
        //$user->email = $userObject->email;
        if ($userObject->new_password != null || $userObject->new_password != '') {
            if ($userObject->new_password == $userObject->confirm_password) {
                $user->password = bcrypt($userObject->new_password);
                Auth::logout();
            }
        }
    }

}
