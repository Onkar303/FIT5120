var sportsCatalogButton = document.getElementById('sportsCatalogButton'); 
var sportsCatalog = document.getElementById('sportsCatalog');

var sportsInformation = document.getElementById('sportsInformation');
sportsInformation.style.backgroundColor = "#CBA783"
sportsInformation.style.color = "#ffffff";


sportsCatalogButton.addEventListener("click", function () {
    sportsCatalog.style.width = "100vw";
    sportsCatalog.style.zIndex = "1";
})


var informationLocate = document.getElementById("informationLocate");
informationLocate.addEventListener("click", function () {

    window.location.href = "/Home/Map";
})

var informationEvent = document.getElementById("informationEvent");
informationEvent.addEventListener("click", function () {

    window.location.href = "/Home/Events";
})



