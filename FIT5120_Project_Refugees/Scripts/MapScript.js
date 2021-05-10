
var searchBox = document.getElementById("pac-input")
var soccerCourt = document.getElementById("Soccer");
var basketCourt = document.getElementById("Basketball");
var tennisCourt = document.getElementById("Tennis");
var cricketCourt = document.getElementById("Cricket");
var badmintonCourt = document.getElementById("Badminton");


var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
var searchText = '?query=';
var radius = '&radius=';
var userLocation = '&location=';
var key = '&key=AIzaSyA5oaXSCANn1f92aS6Ohd-qtX7pLXWsBKM';





//var url1 = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=football+courts+near+met&location=-37.840935,144.946457&radius=50&key=AIzaSyA5oaXSCANn1f92aS6Ohd-qtX7pLXWsBKM";


var whoIsRefugee = document.getElementById('locateSport');
whoIsRefugee.style.backgroundColor = "#CBA783";
whoIsRefugee.style.color = "#ffffff";


basketCourt.addEventListener("click", function () {
    searchBox.value = "Basketball Courts";
    initialize("Basketball Courts");
   

});

soccerCourt.addEventListener("click", function () {
    searchBox.value = "Soccer Courts";
    initialize("Soccer Courts");
});

tennisCourt.addEventListener("click", function () {
    searchBox.value = "Tennis Courts";
    initialize("Tennis Courts");
});
cricketCourt.addEventListener("click", function () {
    searchBox.value = "Cricket Courts";
    initialize("Cricket Courts");
});
badmintonCourt.addEventListener("click", function () {
    searchBox.value = "Badminton Court";
    initialize("Badminton Courts");
});




var coordinates = {
    latitude: -37.840935,
    longitude: 144.946457
}


var retrivedMap = null;
//mapboxgl.accessToken = 'pk.eyJ1Ijoib25rYXIxMyIsImEiOiJja24waGZva2QwbnVoMnBsbmZxczA1djViIn0.37nLTsHwcsM6Nwrq_XhrTA';

//getLocation();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            /*        div.innerHTML = "Latitude: " + position.coords.latitude + " Longitide: " + position.coords.longitude; */
            coordinates.latitude = position.coords.latitude;
            coordinates.longitude = position.coords.longitude;
            retrivedMap = loadMap(coordinates);
        }, function () {
            retrivedMap = loadMap(coordinates)
            alert("sharing location was denied. \n"
                + "Melbourne is the default location");
        });

    } else {
        div.innerHTML = "The Browser Does not Support Geolocation";
    }
}


//function getSearchCoordinates(sportSearch) {
//    const Http = new XMLHttpRequest();
//    const searchQuery = url + searchText + sportSearch + radius + "30" + userLocation + coordinates.latitude + "," + coordinates.longitude + key;

//    Http.setRequestHeader('Access-Control-Allow-Headers', '*');
//    Http.open("GET", searchQuery);
//    Http.send();

//    Http.onreadystatechange = (e) => {
//        console.log(Http.responseText)
//    }
//}


function getCoors(sportSearch) {

    $.ajax({
        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=Basket+ball+courts&radius=30&location=-37.8159,144.9669&key=AIzaSyA5oaXSCANn1f92aS6Ohd-qtX7pLXWsBKM', type: 'GET', dataType: 'jsonp', crossDomain: true, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET' }, success: function (result) {
            console.log(result);

            alert(result);
            //output = result.feed.entry[0].link[1].href
        }, error: function (error) {

        }
    })

    //$.ajax({
    //    url: url + searchText + sportSearch + radius + "30" + userLocation + coordinates.latitude + "," + coordinates.longitude + key, type: 'GET', crossDomain: true, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET' }, success: function (result) {
    //        console.log(result);
    //        //output = result.feed.entry[0].link[1].href
    //    }, error: function (error) {

    //    }
    //})
}



//function loadMap(coordinates) {
//    var map = new mapboxgl.Map({
//        container: 'map',
//        style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
//        center: [coordinates.latitude, coordinates.longitude],
//        zoom: 10
//    });

//    var marker = new mapboxgl.Marker() // initialize a new marker
//        .setLngLat([coordinates.latitude, coordinates.longitude]) // Marker [lng, lat] coordinates
//        .addTo(map);


//    return map;
//}





//function loadMap(coordinates) {
//    var map = new google.maps.Map(document.getElementById("map"), {
//        center: {
//            lat: coordinates.latitude,
//            lng: coordinates.longitude
//        },
//        zoom: 13,
//        mapTypeId: "roadmap"
//    });

//    return map;
//}

function initialize(searchText) {
    var pyrmont = new google.maps.LatLng(coordinates.latitude
        , coordinates.longitude);

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 13
    });

    var request = {
        location: pyrmont,
        radius: '100',
        query: searchText
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i]);
        }
    }

   
}


function createMarker(markers) {

    new google.maps.Marker({
        position: markers.geometry.location,
        map,
        title: markers.name,
    });


}

function initAutocomplete() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            coordinates.latitude = position.coords.latitude;
            coordinates.longitude = position.coords.longitude;

        }, function () {

        });
    }
   else {
        alert("geo location is not supported");
   }
            
     map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: coordinates.latitude, lng: coordinates.longitude},
        zoom: 13,
        mapTypeId: "roadmap",
    });
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });
    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }
        // Clear out the old markers.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }
            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            const svgMarker = {
                path:
                    "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
                fillColor: "#cf8c4a",
                fillOpacity: 1,
                strokeWeight: 0,
                rotation: 0,
                scale: 2,
                anchor: new google.maps.Point(15, 30),
            };

            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}





//function initAutocomplete() {
//    getLocation();
//    const map = new google.maps.Map(document.getElementById("map"), {
//        center: { lat: coordinates.latitude, lng: coordinates.longitude },
//        zoom: 13,
//        mapTypeId: "roadmap",
//    });
//    // Create the search box and link it to the UI element.
//    const input = document.getElementById("pac-input");
//    const searchBox = new google.maps.places.SearchBox(input);
//    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//    // Bias the SearchBox results towards current map's viewport.
//    map.addListener("bounds_changed", () => {
//        searchBox.setBounds(map.getBounds());
//    });
//    let markers = [];
//    // Listen for the event fired when the user selects a prediction and retrieve
//    // more details for that place.
//    searchBox.addListener("places_changed", () => {
//        const places = searchBox.getPlaces();

//        if (places.length == 0) {
//            return;
//        }
//        // Clear out the old markers.
//        markers.forEach((marker) => {
//            marker.setMap(null);
//        });
//        markers = [];
//        // For each place, get the icon, name and location.
//        const bounds = new google.maps.LatLngBounds();
//        places.forEach((place) => {
//            if (!place.geometry || !place.geometry.location) {
//                console.log("Returned place contains no geometry");
//                return;
//            }
//            const icon = {
//                url: place.icon,
//                size: new google.maps.Size(71, 71),
//                origin: new google.maps.Point(0, 0),
//                anchor: new google.maps.Point(17, 34),
//                scaledSize: new google.maps.Size(25, 25),
//            };

//            //const svgmarker = {
//            //    path:
//            //        "m10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zm12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
//            //    fillcolor: "#cf8c4a",
//            //    fillopacity: 1,
//            //    strokeweight: 0,
//            //    rotation: 0,
//            //    scale: 2,
//            //    anchor: new google.maps.point(15, 30),
//            //};

//            // Create a marker for each place.
//            markers.push(
//                new google.maps.Marker({
//                    map,
//                    icon,
//                    title: place.name,
//                    position: place.geometry.location,
//                })
//            );

//            if (place.geometry.viewport) {
//                // Only geocodes have viewport.
//                bounds.union(place.geometry.viewport);
//            } else {
//                bounds.extend(place.geometry.location);
//            }
//        });
//        map.fitBounds(bounds);
//    });
//}



$(document).ready(function () {

    $(".selLabel").click(function () {
        $('.dropdown').toggleClass('active');
    });

    $(".dropdown-list li").click(function () {
        $('.selLabel').text($(this).text());
        $('.dropdown').removeClass('active');
        $('.selected-item p span').text($('.selLabel').text());
    });

});

