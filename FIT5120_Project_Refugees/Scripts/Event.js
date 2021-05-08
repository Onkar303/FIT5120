

var whoIsRefugee = document.getElementById('events');
whoIsRefugee.style.backgroundColor = "#CBA783";
whoIsRefugee.style.color = "#ffffff";


function displayResult() {
    var x = document.getElementById("streaming");
    var sport = x.options[x.selectedIndex].text;
    window.location.href = "/Home/Events/" + sport;
}
















