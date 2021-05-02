
$(function () {
    $("#datepickerStart").datepicker();
    $("#datepickerEnd").datepicker();
});


var startDate = document.getElementById('datepickerStart');
var endDate = document.getElementById('datepickerEnd');
var search = document.getElementById('searchText');
var radius = document.getElementById('radius');
var baseUrl = "https://api.meetup.com/find/upcoming_events?";
var topic_Category;
var latitude;
var longitude;
var radiusText;
var end_date_range;
var start_date_range;
var start_time_range;
var end_time_range;



var coordinates = {
    latitude: 0,
    longitude: 0,
}


function initParams() {
    topic_Category = "topic_category=" + 282 + "&";

    latitude = "lat=" + coordinates.latitude + "&";
    longitude = "long=" + coordinates.longitude + "&";

    radiusText = "radius=" + radius.value + "&";
    searchText = "search=" + search.value + "&";

    end_date_range = "end_date_range=" + endDate.value + "&";
    start_date_range = "start_date_range=" + startDate.value + "&";

    start_time_range = "start_time_range=" + +"&";
    end_time_range = "end_time_range=" + + "&";
}




getLocation();


function getLocation() {
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
}






function loadEvents() {
    initParams()
    var url = baseUrl + latitude + longitude + searchText + topic_Category;
    var xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState = 4) {
            generateList(xhttp)
        }
    };

    xhttp.open("GET",url , true);
    xhttp.send();
}


function loadList(xhttp) {

   
}











