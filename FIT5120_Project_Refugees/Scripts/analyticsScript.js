

let ctx = document.getElementById('pieChart').getContext('2d');
let labels = ['Iraq ', 'Democratic Republic of Congo ', 'Syria ', 'Myanmar', 'Afghanistan', 'Eritrea', 'Ethiopia', 'Central African Republic', 'Iran', 'Stateless', 'Others'];
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B', '#0A2244', '#E6E6E6', '#F3F3F3', '#FF0000', '#553B0A', '#1D550B', '#2B1555'];

let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [5785, 1165, 947, 796, 619, 434, 360, 333, 317, 204, 561],
            backgroundColor: colorHex
        }],
        labels: labels
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        },
        plugins: {
            datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -10,
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 25,
                backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                },
                font: {
                    weight: 'bold',
                    size: '10'
                },
                formatter: (value) => {
                    return value + ' people';
                }
            }
        }
    }
})




let barctx = document.getElementById('barChart').getContext('2d');

let barchart = new Chart(barctx, {
    type: 'bar',
    data: {
        datasets: [{
            data: [5785, 1165, 947, 796, 619, 434, 360, 333, 317, 204, 561],
            backgroundColor: colorHex
        }],
        labels: labels
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        },
        plugins: {
            datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -10,
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 25,
                backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                },
                font: {
                    weight: 'bold',
                    size: '10'
                },
                formatter: (value) => {
                    return value + ' people';
                }
            }
        }
    }
})