(function (trackadmin, $, global) {
    let workshops = function (options) {
        let _settings = {

            pathVehiclesImageAws: null,
            list: []
        },
            _resources = {

                data: [],
                statusMant: 1,
                map: null,
                iconMap: 'https://cdn-icons-png.flaticon.com/512/2312/2312772.png',

            },
            _controls = {
                //$tableSearch: null
            },
            _private = {
                initializeControls: () => {

                    // _private.loadDataApi();
                    setTimeout(() => {
                        _private.initMap();
                    }, 500);

                },

                initMap: () => {
                    // Create the map.
                    let list = _settings.list[0];
                    //console.info(list,list.lat,list.lng,"data");
                    if (list.length != 0) {
                        //const pyrmont = { lat: list.lng, lng: list.lat };

                        let latLng = new google.maps.LatLng(list.lat, list.lng);

                        const map = new google.maps.Map(document.getElementById("map"), {
                            center: latLng,
                            zoom: 17,
                            mapId: "8d193001f940fde3",
                        });
                        // Create the places service.
                        const service = new google.maps.places.PlacesService(map);
                        let getNextPage;

                        // Perform a nearby search.
                        service.nearbySearch({
                            location: latLng,
                            radius: 500,
                            type: "store"
                        },
                            (results, status, pagination) => {
                                if (status !== "OK" || !results) return;
                                _private.addPlaces(results, map);
                            }
                        );
                    }
                    //_resources.map = map;
                },

                addPlaces: (places, map) => {
                    //console.info(places);
                    const placesList = document.getElementById("places");
                    const infoWindow = new google.maps.InfoWindow();
                    _settings.list.filter(function (i, key) {
                        //let infoWindow2 = new google.maps.InfoWindow();


                        const image = {
                            //Estilos para el icono
                            url: _resources.iconMap,
                            size: new google.maps.Size(80, 80),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(17, 34),
                            scaledSize: new google.maps.Size(25, 25),
                        };

                        let latLng = new google.maps.LatLng(i.lat, i.lng);
                        let marker = new google.maps.Marker({
                            //latLng,
                            position: latLng,
                            map,
                            title: i.name,
                            //icon: image,

                            //label: "<h2>a</h2>",
                            //optimized: false,
                        });

                        // Add a click listener for each marker, and set up the info window.
                        marker.addListener("click", () => {
                            infoWindow.close();
                            infoWindow.setContent(marker.getTitle());
                            infoWindow.open(marker.getMap(), marker);
                        });


                        if (key == 0) {
                            //==
                            infoWindow.close();
                            infoWindow.setContent(marker.getTitle());
                            infoWindow.open(marker.getMap(), marker);
                            //==    
                        }



                        const li = document.createElement("div");
                        li.classList.add("content-wrs", "mt-4");
                        //li.textContent = i.title;
                        let check = (id, text, departament, link, key) => `
                        <h4>${text}
                        
                        </h4>
                  <small>${departament}</small>
                          
                         `;

                        li.innerHTML = `${check(i.id, i.name, i.departament, i.link_cita, key)}`;
                        placesList.appendChild(li);
                        li.addEventListener("click", () => {
                            map.setCenter(latLng);

                            //============
                            infoWindow.close();
                            infoWindow.setContent(marker.getTitle());
                            infoWindow.open(marker.getMap(), marker);
                            //============
                        });

                        //console.info(i.lat,i.lng);	
                    });

                    /**/
                },

                bindEvents: function () {



                },
                init: async function () {
                    $.extend(_settings, options || {});
                    //global.utils.showLoader();
                    _private.initializeControls();
                    _private.bindEvents();
                }
            };
        _private.init();
    };
    trackadmin.public = trackadmin.public || {};
    trackadmin.public.workshops = workshops;
})((window.trackadmin = window.trackadmin || {}), $, (window.global = window.global || {}));