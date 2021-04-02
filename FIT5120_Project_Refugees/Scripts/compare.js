function ausSport(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    document.getElementById(cityName).style.display = "block";
   
}

function countrySport(countryName) {
    var countryContent = document.getElementsByClassName("countryContent");
    var countryImage = document.getElementsByClassName("countryImage");

    for (var i = 0; i < countryContent.length; i++) {
        countryContent[i].style.display = "none";
    }

    for (var i = 0; i < countryImage.length; i++) {
        countryImage[i].style.display = "none";
    }

    document.getElementById('country').innerHTML = countryName;
    document.getElementById(countryName + 'Image').style.display = "block";
    document.getElementById(countryName).style.display = "block";
}

countrySport("Iran");





// 触发 id="defaultOpen" click 事件
document.getElementById("defaultOpen").click();

var compare = document.getElementById('compare');
compare.style.backgroundColor = "#CBA783"
compare.style.color = "#ffffff";