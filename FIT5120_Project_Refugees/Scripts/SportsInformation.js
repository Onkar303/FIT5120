var sportsCatalogButton = document.getElementById('sportsCatalogButton'); 
var sportsCatalog = document.getElementById('sportsCatalog');

var sportsInformation = document.getElementById('sportsInformation');
sportsInformation.style.backgroundColor = "#CBA783"
sportsInformation.style.color = "#ffffff";


sportsCatalogButton.addEventListener("click", function () {
    sportsCatalog.style.width = "100vw";
    sportsCatalog.style.zIndex = "1";
})


