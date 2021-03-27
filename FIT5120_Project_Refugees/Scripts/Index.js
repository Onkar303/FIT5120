

var dataset = [20, 50, 70, 45, 23];

var width = 500;
var height = 300;
var barPadding = 5;
var barWidth = width / dataset.length;


var svg = d3.select('barchart')
    .attr("width", width)
    .attr("height", height);


    


var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function (d) {
        return height - d
    })
    .attr("height", function (d) {
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {

        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";

    }); 


