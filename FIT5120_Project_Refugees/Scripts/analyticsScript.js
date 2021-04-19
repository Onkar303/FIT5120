am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    var title = chart.titles.create();
    title.text = "Top 5 Countries";
    title.fontSize = 30;
    title.fontWeight = "bold";
    title.color = "#D9C1A4";
    chart.geodata = am4geodata_worldLow;
    chart.paddingTop = 20;
    chart.paddingBottom = 20;
    chart.responsive.enabled = true;
    chart.chartContainer.wheelable = false;
    chart.seriesContainer.draggable = false;
    chart.seriesContainer.resizable = true;
    chart.maxZoomLevel = 1.0;
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.name = "Others";
    polygonSeries.exclude = ["AQ"];


    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    // polygonTemplate.fill = am4core.color("#74B266");
    // Add heat rule

    var hs = polygonTemplate.states.create("hover");

    var series1 = chart.series.push(new am4maps.MapPolygonSeries());

    series1.name = "Iraq";
    series1.useGeodata = true;
    series1.include = ["IQ"];
    series1.mapPolygons.template.tooltipText = "{name} : 5678";
    series1.mapPolygons.template.fill = am4core.color("#CD1725");
    series1.fill = am4core.color("#CD1725");

    var series2 = chart.series.push(new am4maps.MapPolygonSeries());
    series2.name = "Democratic Republic of Congo";
    series2.useGeodata = true;
    series2.include = ["CD"];
    series2.mapPolygons.template.tooltipText = "{name} : 1165";
    series2.mapPolygons.template.fill = am4core.color("#2C88FE");
    series2.fill = am4core.color("#2C88FE");


    var series3 = chart.series.push(new am4maps.MapPolygonSeries());
    series3.name = "Syria";
    series3.useGeodata = true;
    series3.include = ["SY"];
    series3.mapPolygons.template.tooltipText = "{name} : 947";
    series3.mapPolygons.template.fill = am4core.color("#010101");
    series3.fill = am4core.color("#010101");

    
    var series4 = chart.series.push(new am4maps.MapPolygonSeries());
    series4.name = "Myanmar";
    series4.useGeodata = true;
    series4.include = ["MM"];
    series4.mapPolygons.template.tooltipText = "{name} : 769";
    series4.mapPolygons.template.fill = am4core.color("#259159");
    series4.fill = am4core.color("#259159");


    var series5 = chart.series.push(new am4maps.MapPolygonSeries());
    series5.name = "Afganistan";
    series5.useGeodata = true;
    series5.include = ["AF"];
    series5.mapPolygons.template.tooltipText = "{name} :619";
    series5.mapPolygons.template.fill = am4core.color("#D99694");
    series5.fill = am4core.color("#D99694");

    polygonTemplate.propertyFields.fill = "fill";

    chart.legend = new am4maps.Legend();
    chart.legend.position = "right";
    chart.legend.align = "right";
    chart.legend.contentAlign = "bottom";

   



    //adding data
    //polygonSeries.data = [{
    //        "id": "IQ",
    //        "name": "Iraq",
    //        "value": 100,
    //        "fill": am4core.color("#F05C5C")
    //}, {
    //        "id": "CG",
    //        "name": "Democratic Reublic of Congo",
    //        "value": 50,
    //        "fill": am4core.color("#5C5CFF")
    //    },
    //    {
    //        "id": "IR",
    //        "name": "Iran",
    //        "value": 50,
    //        "fill": am4core.color("#5C5CFF")
    //    },
    //    {
    //        "id": "SY",
    //        "name": "Syria",
    //        "value": 50,
    //        "fill": am4core.color("#5C5CFF")
    //    },
    //    {
    //        "id": "MM",
    //        "name": "Myanmar",
    //        "value": 50,
    //        "fill": am4core.color("#5C5CFF")
    //    },
    //    {
    //        "id": "AF",
    //        "name": "Afganistan",
    //        "value": 50,
    //        "fill": am4core.color("#5C5CFF")
    //    },
    //    {
    //        "id": "ER",
    //        "name": "Eritrea",
    //        "value": 50,
    //        "fill": am4core.color("#5C5CFF")
    //    },
    //    {
    //        "id": "ET",
    //        "name": "Ethiopia",
    //        "value": 50,
    //        "fill": am4core.color("#5C5CFF")
    //    },
    //    {
    //        "id": "ER",
    //        "name": "Eritrea",
    //        "value": 50,
    //        "fill": am4core.color("#5C5CFF")
    //    },
    //    {
    //        "id": "CF",
    //        "name": "Central African Republic",
    //        "value": 50,
    //        "fill": am4core.color("#5C5CFF")
    //    }
        

    //];

    
    //window.addEventListener('resize', () => {
    //    if (window.innerWidth < 992) {
    //        chart.legend.position = "bottom";
    //        chart.legend.contentAlign = "bottom";
    //    } else {
    //        chart.legend.position = "right";
    //    }
    //}, true);


    //chart.legend = new am4maps.Legend();
    //chart.legend.position = "right";
    //chart.legend.align = "right";

    //var container = am4core.create("container", am4core.Container);
    //container.width = am4core.percent(100);
    //container.height = am4core.percent(100);

    // Series for United States map
    // var usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
    // usaSeries.geodata = am4geodata_usaLow;

    // var usPolygonTemplate = usaSeries.mapPolygons.template;
    // usPolygonTemplate.tooltipText = "{name}";
    // usPolygonTemplate.fill = chart.colors.getIndex(1);
    // usPolygonTemplate.nonScalingStroke = true;

    // // Hover state
    // var hs = usPolygonTemplate .states.create("hover");
    // hs.properties.fill = am4core.color("#367B25");

}); // end am4core.ready()










/*let ctx = document.getElementById('pieChart').getContext('2d');*/
let labels = ['Iraq ', 'Democratic Republic of Congo ', 'Syria ', 'Myanmar', 'Afghanistan', 'Eritrea', 'Ethiopia', 'Central African Republic', 'Iran', 'Stateless', 'Others'];
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B', '#0A2244', '#E6E6E6', '#F3F3F3', '#FF0000', '#553B0A', '#1D550B', '#2B1555'];

let no2015_16 = [4358, 657, 4261, 1951, 1714, 293, 337, 0, 337, 0, 1644]
let no2016_17 = [7478, 336, 6261, 1747, 1958, 323,323,0,139,0,1692]
let no2017_18 = [4630, 1355, 3227, 2043, 1130, 494,481,6,218,0,1241]
let no2018_19 = [7095, 2114, 1836, 1995, 1323, 555,635,72,267,0,1120]
let no2019_20 = [5785, 1165, 947, 796, 619, 434, 360, 333, 317, 204, 561]



var a2015_16 = document.getElementById('2015_16');
var a2016_17 = document.getElementById('2016_17');
var a2017_18 = document.getElementById('2017_18');
var a2018_19 = document.getElementById('2018_19');
var a2019_20 = document.getElementById('2019_20');


//a2015_16.addEventListener("click", function () {
//    updateData(no2015_16);
//})

//a2016_17.addEventListener("click", function () {
//    updateData(no2016_17);
//})

//a2017_18.addEventListener("click", function () {
//    updateData(no2017_18);
//})

//a2018_19.addEventListener("click", function () {
//    updateData(no2018_19);
//})

//a2019_20.addEventListener("click", function () {
//    updateData(no2019_20);
//})

//function updateData(selectedYear) {
//    pieChart.data.datasets[0].data = selectedYear;
//    pieChart.update();
//}

//let pieChart = new Chart(ctx, {
//        type: 'pie',
//        data: {
//            datasets: [{
//                data: no2019_20,
//                backgroundColor: colorHex
//            }],
//            labels: labels
//        },
//        options: {
//            responsive:true,
//            title: {
//                display: true,
//                text: 'Total Refugees'
//            },
//            legend: {
//                position: 'bottom'
//            },
//            plugins: {
//                datalabels: {
//                    color: '#fff',
//                    anchor: 'end',
//                    align: 'start',
//                    offset: -10,
//                    borderWidth: 2,
//                    borderColor: '#fff',
//                    borderRadius: 25,
//                    backgroundColor: (context) => {
//                        return context.dataset.backgroundColor;
//                    },
//                    font: {
//                        weight: 'bold',
//                        size: '10'
//                    },
//                    formatter: (value) => {
//                        return value + ' people';
//                    }
//                }
//            }
//        }
//  })




//var male2015_16 = [2098,322,2158,978,842,166,167,0,172,0,821]; 
//var female2015_16 = [2260, 335, 2103, 973, 872, 127, 170, 0, 165, 0, 823];

//var male2016_17 = [3629,157,3122,896,943,166,167,0,62,0,843];
//var female2016_17 = [3859, 179,3139,851,1015,157,156,0,77,0,858];

//var male2017_18 = [2301,648,1603,1025,474,236,239,5,103,0,623];
//var female2017_18 = [2329,671,1624,1018,656,258,242,5,115,0,618];

//var male2018_19 = [3514,1048,935,1011,572,264,305,36,187,0,575];
//var female2018_19 = [3581,1066,901,984,751,291,330,36,180,0,545];

//var male2019_20 = [2856,568,475,367,275,166,168,161,146,86,281];
//var female2019_20 = [2929,597,472,429,344,268,192,172,171,0.280];



//var mf2015_16 = document.getElementById('mf2015_16');
//var mf2016_17 = document.getElementById('mf2016_17');
//var mf2017_18 = document.getElementById('mf2017_18');
//var mf2018_19 = document.getElementById('mf2018_19');
//var mf2019_20 = document.getElementById('mf2019_20');


//mf2015_16.addEventListener("click", function () {
//    updateBarChart(male2015_16,female2015_16);
//})

//mf2016_17.addEventListener("click", function () {
//    updateBarChart(male2016_17, female2016_17);
//})

//mf2017_18.addEventListener("click", function () {
//    updateBarChart(male2017_18, female2017_18);
//})

//mf2018_19.addEventListener("click", function () {
//    updateBarChart(male2018_19, female2018_19);
//})

//mf2019_20.addEventListener("click", function () {
//    updateBarChart(male2019_20, female2019_20);
//});


//function updateBarChart(selectedYearMale,selectedYearFemale) {
//    barChart.data.datasets[0].data = selectedYearMale;
//    barChart.data.datasets[1].data = selectedYearFemale;
//    barChart.update();
//}


//let barctx = document.getElementById('barChart').getContext('2d');

//let barChart = new Chart(barctx, {
//    type: 'bar',
//    data: {
//        datasets: [{
//            label:'male',
//            data: male2019_20,
//            backgroundColor:'#253D5B',
            
//        }, {
//                label: 'female',
//                data: female2019_20,
//                backgroundColor: '#FB3640',
//          }],
//        labels: labels
//    },
//    options: {
//        responsive: true,
//        scaleShowValues: true,
//        scales: {
//            xAxes: [{
//                ticks: {
//                    autoSkip: false
//                }
//            }]
//        },
//        legend: {
//            position: 'bottom'
//        },
//        plugins: {
//            datalabels: {
//                color: '#fff',
//                anchor: 'end',
//                align: 'start',
//                offset: -10,
//                borderWidth: 2,
//                borderColor: '#fff',
//                borderRadius: 25,
//                backgroundColor: (context) => {
//                    return context.dataset.backgroundColor;
//                },
//                font: {
//                    weight: 'bold',
//                    size: '10'
//                },
//                formatter: (value) => {
//                    return value;
//                },
//            }
//        }
//    }
//})


var whoIsRefugee = document.getElementById('analytics');
whoIsRefugee.style.backgroundColor = "#CBA783";
whoIsRefugee.style.color = "#ffffff";

var segueSportsAnalytics = document.getElementById('segueSportsAnalytics');
segueSportsAnalytics.addEventListener('click', function () {
    window.location.href = "/Home/Contact";
})


var language = document.getElementById("language");
var analytics = document.getElementById("analytics");
var home = document.getElementById("home");
var compare = document.getElementById("compare");

var title = document.getElementById("title");
var titleContent = document.getElementById("titleContent");
var comeFrom = document.getElementById("comeFrom");
var comeFromContent = document.getElementById("comeFromContent")
var menAndWomen = document.getElementById("menAndWomen");
var menAndWomenContent = document.getElementById("menAndWomenContent");
var year = document.getElementById("year");
var year1 = document.getElementById("year1");
var weBelieve = document.getElementById("weBelieve");
var weBelieveContent = document.getElementById("weBelieveContent");
var findSport = document.getElementById("findSport");
var details = document.getElementById("details");


var chineseTranslate = document.getElementById("chineseTranslate");
var englishTranslate = document.getElementById("englishTranslate");

chineseTranslate.addEventListener("click", translateToChineseforAnalytics);
englishTranslate.addEventListener("click", translateToEnglishForAnalytics)

function translateToChineseforAnalytics() {
    title.innerHTML = "谁是难民？"
    titleContent.innerHTML = "难民是普通人，他们没有任何过错，被迫离开家园寻求安全."
    comeFrom.innerHTML = "他们来自哪里？";
    comeFromContent.innerHTML = "根据澳大利亚政府内政部2016 - 2019年的难民统计数据，难民最多的9个国家是伊拉克、叙利亚、缅甸、阿富汗、刚果民主共和国、埃塞俄比亚、厄立特里亚、伊朗和中非共和国。来自这些地区的难民占澳大利亚难民总人数的76 %"
    menAndWomen.innerHTML = "男女";
    menAndWomenContent.innerHTML = "根据澳大利亚政府内政部2016年至2019年的难民统计数据，来到澳大利亚的男女人口比例最高，来自伊拉克";
    year.innerHTML = "年";
    year1.innerHTML = "年";
    weBelieve.innerHTML = "我们相信";
    weBelieveContent.innerHTML = "通过体育运动，我们可以帮助难民克服语言障碍，帮助他们结交新朋友，并在澳大利亚这里找到归属感和自我价值感";
    findSport.innerHTML = "寻找运动";
    details.innerHTML = "点击查看更多详细信息";

    language.innerHTML = "语";
    home.innerHTML = "家";
    analytics.innerHTML = "谁是难民?";
    compare.innerHTML = "相比";

    isChinese = true;
}


function translateToEnglishForAnalytics() {
    title.innerHTML = "Who are Refugees?";
    titleContent.innerHTML = "Refugees are regular people who, through no fault of their own, have been forced to leave their homes in search of safety."
    comeFrom.innerHTML = "Where do they come from?";
    comeFromContent.innerHTML = "According to the Australian Government Department of Home Affairs refugees statistics from 2016 to 2019, the top 9 refugee-importing countries are Iraq, Syria, Myanmar, Afghanistan, Democratic Republic of Congo, Ethiopia, Eritrea, Iran, Central African Republic accounting for 76% of the total refugee population."
    menAndWomen.innerHTML = "Men and Women";
    menAndWomenContent.innerHTML = "ing to the Australian Government Department of Home Affairs refugees statistics from 2016 to 2019, the highest male to female population that has come to Australia is from Iraq.";
    year.innerHTML = "Year";
    year1.innerHTML = "Year";
    weBelieve.innerHTML = "We Believe";
    weBelieveContent.innerHTML = "Through sports, we can help refugees overcome language barrier and help them make new friends and find a sense of belonging and self worth here in Australia";
    findSport.innerHTML = "Find Sport";
    details.innerHTML = "Click to see more details";

    language.innerHTML = "Language";
    home.innerHTML = "Home";
    analytics.innerHTML = "Who are Refugees?";
    compare.innerHTML = "Compare";

    isChinese = false;
}

if (isChinese) {
    translateToChineseforAnalytics();
} else {
    translateToEnglishForAnalytics();
}


