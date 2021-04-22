/*function ausSport(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    document.getElementById(cityName).style.display = "block";
   
}*/

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


    document.getElementById('country').innerHTML = countryName;
    document.getElementById(countryName + 'Image').style.display = "block";
    document.getElementById(countryName).style.display = "block";

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
    


    if (countryName == "Irap") {

        document.getElementById('au1').style.display = "block";
        document.getElementById('au3').style.display = "block";
        //document.getElementById("au0").style.display = "none";
        //document.getElementById("au2").style.display = "none";
        //document.getElementById("au4").style.display = "none";
        document.getElementById("commonSwimming").style.display = "block";
    }





    /*if (countryName = "Syria") {
        var auSport = document.getElementsByClassName("auSport");
        for (var i = 0; i < auSport.length; i++) {
            auSport[i].style.display = "block";
        }
        document.getElementById('au1').style.display = "none";
        document.getElementById('au3').style.display = "none";
    }*/
    
    

    
    /*if (countryName = "Myanmar") {
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
        }
    

    
    if (countryName = "Ethiopia") {
            document.getElementById('au0').style.display = "none";
            document.getElementById('au1').style.display = "none";
            document.getElementById('au3').style.display = "none";
        }
    

    
    if (countryName = "Eritrea") {
            document.getElementById('au0').style.display = "none";
            document.getElementById('au3').style.display = "none";
            document.getElementById('au4').style.display = "none";
        }
    

    
    if (countryName = "Iran") {
            document.getElementById('au0').style.display = "none";
            document.getElementById('au1').style.display = "none";
            document.getElementById('au3').style.display = "none";
        }
    

    
    if (countryName = "Central African Republic") {
            document.getElementById('au0').style.display = "none";
            document.getElementById('au1').style.display = "none";
            document.getElementById('au3').style.display = "none";
        }*/
    
    
    
}

countrySport("Iraq");



// 触发 id="defaultOpen" click 事件
//document.getElementById("defaultOpen").click();

//var compare = document.getElementById('compare');
//compare.style.backgroundColor = "#CBA783"
//compare.style.color = "#ffffff";

