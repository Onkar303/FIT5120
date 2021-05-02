////mapboxgl.accessToken = 'pk.eyJ1Ijoib25rYXIxMyIsImEiOiJja24waGZva2QwbnVoMnBsbmZxczA1djViIn0.37nLTsHwcsM6Nwrq_XhrTA';

////var map = new mapboxgl.Map({
////    container: 'map',
////    style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
////    center: [-122.25948, 37.87221],
////    zoom: 10
////});

////var marker = new mapboxgl.Marker() // initialize a new marker
////    .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
////    .addTo(map);



var searchBox = document.getElementById("pac-input")
var soccerCourt = document.getElementById("Soccer");
var basketCourt = document.getElementById("Basketball");
var tennisCourt = document.getElementById("Tennis");
var cricketCourt = document.getElementById("Cricket");
var badmintonCourt = document.getElementById("Badminton");



basketCourt.addEventListener("click", function () {
    searchBox.value = "Basketball Courts";
});

soccerCourt.addEventListener("click", function () {
    searchBox.value = "Soccer Court";
});

tennisCourt.addEventListener("click", function () {
    searchBox.value = "Tennis Court";
});
cricketCourt.addEventListener("click", function () {
    searchBox.value = "Cricket Court";
});
badmintonCourt.addEventListener("click", function () {
    searchBox.value = "Badminton Court";
});

getLocation();



function getLocation() {
    var coordinates = {
        latitude: 0,
        longitude: 0
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            /*        div.innerHTML = "Latitude: " + position.coords.latitude + " Longitide: " + position.coords.longitude; */

            coordinates.latitude = position.coords.latitude;
            coordinates.longitude = position.coords.longitude;

        }, function () {

            console.log("Position Rejected");
        });

    } else {
        div.innerHTML = "The Browser Does not Support Geolocation";
    }

    return coordinates;
}





function initAutocomplete() {

    var coordinates = getLocation();
    const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:-37.840935, lng:144.946457},
    zoom: 13,
    mapTypeId: "roadmap",
  });
  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);
   /* map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);*/


  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
    searchBox.addListener("places_changed", () => {


        searchBox.value = "footballCourt"

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
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
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

