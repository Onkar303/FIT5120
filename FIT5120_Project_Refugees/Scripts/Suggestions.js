

// generating four random values


items = Array("Basketball","football","Cricket","Tennis","Badminton","Soccer");

var sportsTitle1 = document.getElementById("sportsTitle1");
var sportsTitle2= document.getElementById("sportsTitle2");
var sportsTitle3 = document.getElementById("sportsTitle3");
var sportsTitle4 = document.getElementById("sportsTitle4");

var titles = [sportsTitle1, sportsTitle2, sportsTitle3, sportsTitle4];



function retreveRandomVaribales() {
    const n = 4;
    const sample = items
        .map(x => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map(a => a.x)
        .slice(0, n);


    

    for (var i = 0 ; i < 4 ; i++) {

        titles[i].innerHTML = sample[i];
        
    }


    console.log(sample);
}







