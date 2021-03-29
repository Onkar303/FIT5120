
var youtubeVideo = document.getElementById("youtubeVideo");
youtubeVideo.setAttribute("height", screen.height/ 1.8);


var dataset = [20, 50, 70, 45, 23];

var width = screen.width/2;
var height = screen.height/2;
var barPadding = 5;
var barWidth = width / dataset.length - 20;


    var svg = d3.select('svg')
        .attr("width", width)
        .attr("height", height);


    var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, height]);

    var xScale = d3.scaleLinear()
        .domain([0, 5])
        .range([0, width]);

    var x_axis = d3.axisBottom().scale(xScale);
    var y_axis = d3.axisLeft().scale(yScale);

    svg.append("g")
        .attr("transform", "translate(50,10)")
        .call(y_axis)

    var xAxisTranslate = height - 20;

    svg.append("g")
        .attr("transform", "translate(50," + xAxisTranslate + ")")
        .call(x_axis);

    var barChart = svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("y", function (d) {
            return height - yScale(d)
        })
        .attr("height", function (d) {
            return yScale(d) - 20;
        })
        .attr("width", barWidth - barPadding)
        .attr("transform", function (d, i) {

            var translate = [barWidth * i + 51, 0];
            return "translate(" + translate + ")";
        }); 




//var text = svg.selectAll("text")
//    .data(dataset)
//    .enter()
//    .append("text")
//    .text(function (d) {
//        return d;
//    })
//    .attr("y", function (d, i) {
//        return height - d - 2;
//    })
//    .attr("x", function (d, i) {
//        return barWidth * i;
//    })


