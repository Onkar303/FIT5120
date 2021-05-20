/*function ausSport(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    document.getElementById(cityName).style.display = "block";
   
}*/

var whoIsRefugee = document.getElementById('compare');
whoIsRefugee.style.backgroundColor = "#CBA783";
whoIsRefugee.style.color = "#ffffff";

function changeToCollapsableNavBar() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnavbar") {
        x.className += " responsive";
    } else {
        x.className = "topnavbar";
    }
}

function countrySport(countryName) {
    

    // Get all elements with class="countryContent" and hide them
    var countryContent = document.getElementsByClassName("countryContent");
    for (var i = 0; i < countryContent.length; i++) {
        countryContent[i].style.display = "none";
    }

    //Get all elements with class="countryImage" and hide them
    var countryImage = document.getElementsByClassName("countryImage");
    for (var i = 0; i < countryImage.length; i++) {
        countryImage[i].style.display = "none";
    }

    //Get all elements with class="auSport" and hide them
    var auSport = document.getElementsByClassName("auSport");
    for (var i = 0; i < auSport.length; i++) {
        auSport[i].style.display = "none";

    }

    //Get all elements with class="common" and hide them
    var common = document.getElementsByClassName("common");
    for (var i = 0; i < common.length; i++) {
        common[i].style.display = "none";
    }

    //Replace the content by the countryName you click on
    document.getElementById('country').innerHTML = countryName;

    //Display the icon of the country you click on
    document.getElementById(countryName + 'Image').style.display = "block";

    //Display the content of sports played in the country
    document.getElementById(countryName).style.display = "block";

    document.getElementById("au1").style.display = "block";
    document.getElementById("au3").style.display = "block";
    document.getElementById("commonSwimming").style.display = "block";
    document.getElementById("commonSoccer").style.display = "block";
    document.getElementById("commonBasketball").style.display = "block";

    
    /*var countryContent = document.getElementsByClassName("countryContent");
    for (var i = 0; i < countryContent.length; i++) {
        if (countryContent[i].id == countryName) {
            document.getElementById("au1").style.display = "block";
            document.getElementById("au3").style.display = "block";
            document.getElementById("commonSwimming").style.display = "block";
            document.getElementById("commonSoccer").style.display = "block";
            document.getElementById("commonBasketball").style.display = "block";
        }
    }*/
    

    

    switch (countryName) {
        case "IRAQ":
            //Get all elements with class="auSport" and hide them
            var auSport = document.getElementsByClassName("auSport");
            for (var i = 0; i < auSport.length; i++) {
                auSport[i].style.display = "none";

            }

            //Get all elements with class="common" and hide them
            var common = document.getElementsByClassName("common");
            for (var i = 0; i < common.length; i++) {
                common[i].style.display = "none";
            }

            document.getElementById("au1").style.display = "block";
            document.getElementById("au3").style.display = "block";
            document.getElementById("commonSwimming").style.display = "block";
            document.getElementById("commonSoccer").style.display = "block";
            document.getElementById("commonBasketball").style.display = "block";
            break;

        case "SYRIA":
            var auSport = document.getElementsByClassName("auSport");
            for (var i = 0; i < auSport.length; i++) {

                auSport[i].style.display = "none";
            }

            //Get all elements with class="common" and hide them
            var common = document.getElementsByClassName("common");
            for (var i = 0; i < common.length; i++) {
                common[i].style.display = "none";
            }

            document.getElementById("au1").style.display = "block";
            document.getElementById("au3").style.display = "block";
            document.getElementById("commonSwimming").style.display = "block";
            document.getElementById("commonSoccer").style.display = "block";
            document.getElementById("commonBasketball").style.display = "block";

            break;

        case "MYANMAR":
            //Get all elements with class="auSport" and hide them
            var auSport = document.getElementsByClassName("auSport");
            for (var i = 0; i < auSport.length; i++) {
                auSport[i].style.display = "none";

            }

            //Get all elements with class="common" and hide them
            var common = document.getElementsByClassName("common");
            for (var i = 0; i < common.length; i++) {
                common[i].style.display = "none";
            }

            document.getElementById("au0").style.display = "block";
            document.getElementById("au1").style.display = "block";
            document.getElementById("au3").style.display = "block";
            document.getElementById("au4").style.display = "block";
            document.getElementById("commonSoccer").style.display = "block";
            break;

        case "AFGH":
            //Get all elements with class="auSport" and hide them
            var auSport = document.getElementsByClassName("auSport");
            for (var i = 0; i < auSport.length; i++) {
                auSport[i].style.display = "none";

            }

            //Get all elements with class="common" and hide them
            var common = document.getElementsByClassName("common");
            for (var i = 0; i < common.length; i++) {
                common[i].style.display = "none";
            }

            document.getElementById("au0").style.display = "block";
            document.getElementById("au1").style.display = "block";
            document.getElementById("au3").style.display = "block";
            document.getElementById("commonSoccer").style.display = "block";
            document.getElementById("commonBasketball").style.display = "block";
            break;

        case "DRC":
            //Get all elements with class="auSport" and hide them
            var auSport = document.getElementsByClassName("auSport");
            for (var i = 0; i < auSport.length; i++) {
                auSport[i].style.display = "none";

            }

            //Get all elements with class="common" and hide them
            var common = document.getElementsByClassName("common");
            for (var i = 0; i < common.length; i++) {
                common[i].style.display = "none";
            }

            document.getElementById("au0").style.display = "block";
            document.getElementById("au1").style.display = "block";
            document.getElementById("au3").style.display = "block";
            document.getElementById("commonSoccer").style.display = "block";
            document.getElementById("commonBasketball").style.display = "block";
            break;
        

            //countrySport("Iraq");
           

    }
}

countrySport("IRAQ");

var findLocation = document.getElementById("forLocation");
findLocation.addEventListener("click", function () {

    window.location.href = "/Home/Map";
})

var findEvents = document.getElementById("forEvents");
findEvents.addEventListener("click", function () {

    window.location.href = "/Home/Events";
})

    

    //document.getElementsByClassName("Irap").display = "block";

    /*if (  ) {

        //document.getElementsByClassName('auSport')[0].style.display = "block";
        document.getElementById("au1").style.display = "block";
        document.getElementById("au3").style.display = "block";
        //document.getElementById('au0').style.display = "none";
        //document.getElementById('au2').style.display = "none";
        //document.getElementById('au4').style.display = "none";
        document.getElementById("commonSwimming").style.display = "block";
        document.getElementById("commonSoccer").style.display = "block";
        document.getElementById("commonBasketball").style.display = "block";
    }





    if (countryName = "Syria") {
        document.getElementById('au1').style.display = "none";
        document.getElementById('au3').style.display = "none";
    }
    
    

    
    if (countryName = "Myanmar") {
            document.getElementById('au0').style.display = "none";
            document.getElementById('au1').style.display = "none";
            document.getElementById('au3').style.display = "none";
            document.getElementById('au4').style.display = "none";
        }
    

    
    if (countryName = "Afghanistan") {
            document.getElementById('au0').style.display = "none";
            document.getElementById('au1').style.display = "none";
            document.getElementById('au3').style.display = "none";
        }
    

    
    if (countryName = "Democratic Republic of Congo") {
            document.getElementById('au0').style.display = "none";
            document.getElementById('au1').style.display = "none";
            document.getElementById('au3').style.display = "none";
        }*/
    
    




var findLocation = document.getElementById("forLocation");
findLocation.addEventListener("click", function () {

    window.location.href = "/Home/Map";
})

var findEvents = document.getElementById("forEvents");
findEvents.addEventListener("click", function () {

    window.location.href = "/Home/Events";
})



