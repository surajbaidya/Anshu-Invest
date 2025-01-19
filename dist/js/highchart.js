// chart implementation
// nepse index

Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/new-intraday.json', function (data) {
// create the chart
Highcharts.stockChart('nepseIndex', {
    chart: {
        height: 320,
        type: 'line'
    },

    title: {
        text: 'AAPL stock price by minute'
    },

    subtitle: {
        text: 'Using explicit breaks for nights and weekends'
    },

    xAxis: {
        breaks: [{ // Nights
            from: Date.UTC(2011, 9, 6, 16),
            to: Date.UTC(2011, 9, 7, 8),
            repeat: 24 * 36e5
        }, { // Weekends
            from: Date.UTC(2011, 9, 7, 16),
            to: Date.UTC(2011, 9, 10, 8),
            repeat: 7 * 24 * 36e5
        }]
    },
    yAxis: {
        visible: true,
        offset:25
    },
    navigator : {
        enabled : false
    },
    scrollbar: {
        enabled: false
    },

    rangeSelector: {
        buttons: [{
            type: 'hour',
            count: 1,
            text: '1h'
        }, {
            type: 'day',
            count: 1,
            text: '1D'
        }, {
            type: 'all',
            count: 1,
            text: 'All'
        }],
        selected: 1,
        inputEnabled: false
    },

    series: [{
        name: 'AAPL',
        type: 'area',
        data: data,
        gapSize: 5,
        tooltip: {
            valueDecimals: 2
        },
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
        },
        threshold: null
    }]
});
});

Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/new-intraday.json', function (data) {

    // create the chart
    Highcharts.stockChart('overview-chart', {


        title: {
            text: 'AAPL stock price by minute'
        },

        subtitle: {
            text: 'Using explicit breaks for nights and weekends'
        },

        xAxis: {
            breaks: [{ // Nights
                from: Date.UTC(2011, 9, 6, 16),
                to: Date.UTC(2011, 9, 7, 8),
                repeat: 24 * 36e5
            }, { // Weekends
                from: Date.UTC(2011, 9, 7, 16),
                to: Date.UTC(2011, 9, 10, 8),
                repeat: 7 * 24 * 36e5
            }]
        },
        yAxis: {
            visible: true,
            offset:25
        },
        navigator : {
            enabled : false
        },
        scrollbar: {
            enabled: false
        },

        rangeSelector: {
            buttonPosition: {
                align: 'right'
            },
            buttons: [{
                type: 'hour',
                count: 1,
                text: '1h'
            }, {
                type: 'day',
                count: 1,
                text: '1D'
            }, {
                type: 'all',
                count: 1,
                text: 'All'
            }],
            selected: 1,
            inputEnabled: false
        },

        series: [{
            name: 'AAPL',
            type: 'area',
            data: data,
            gapSize: 5,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            },
            threshold: null
        }]
    });
});

Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/new-intraday.json', function (data) {

// create the chart
Highcharts.stockChart('subIndex', {
    
    
    title: {
        text: 'AAPL stock price by minute'
    },
    
    subtitle: {
        text: 'Using explicit breaks for nights and weekends'
    },
    
    xAxis: {
        breaks: [{ // Nights
            from: Date.UTC(2011, 9, 6, 16),
            to: Date.UTC(2011, 9, 7, 8),
            repeat: 24 * 36e5
        }, { // Weekends
            from: Date.UTC(2011, 9, 7, 16),
            to: Date.UTC(2011, 9, 10, 8),
            repeat: 7 * 24 * 36e5
        }]
    },
    
    rangeSelector: {
        buttons: [{
            type: 'hour',
            count: 1,
            text: '1h'
        }, {
            type: 'day',
            count: 1,
            text: '1D'
        }, {
            type: 'all',
            count: 1,
            text: 'All'
        }],
        selected: 1,
        inputEnabled: false
    },
    
    series: [{
        name: 'AAPL',
        type: 'area',
        data: data,
        gapSize: 5,
        tooltip: {
            valueDecimals: 2
        },
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
        },
        threshold: null
    }]
});
});

Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
function (data) {
    
    Highcharts.chart('singleLineChart', {
        chart: {
            height: (9 / 26 * 100) + '%' // 26:9 ratio
        },
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: { 
            enabled: false
        },
        yAxis: {
            visible: false
        },			
        xAxis: {
            visible: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        
        series: [{
            type: 'area',
            name: '',
            data: data
        }]
    });
    Highcharts.chart('singleLineChart1', {
        chart: {
            height: (9 / 26 * 100) + '%' // 26:9 ratio
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        }, 
        exporting: { 
            enabled: false
        },
        legend: {
            enabled: false
        },
        yAxis: {
            visible: false
        },			
        xAxis: {
            visible: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        
        series: [{
            type: 'area',
            name: '',
            data: data
        }]
    });
    
    Highcharts.chart('singleLineChart2', {
        chart: {
            height: (9 / 26 * 100) + '%' // 26:9 ratio
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        }, 
        exporting: { 
            enabled: false
        },
        legend: {
            enabled: false
        },
        yAxis: {
            visible: false
        },			
        xAxis: {
            visible: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        
        series: [{
            type: 'area',
            name: '',
            data: data
        }]
    });
    
    Highcharts.chart('singleLineChart3', {
        chart: {
            height: (9 / 26 * 100) + '%' // 26:9 ratio
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        }, 
        exporting: { 
            enabled: false
        },
        legend: {
            enabled: false
        },
        yAxis: {
            visible: false
        },			
        xAxis: {
            visible: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        
        series: [{
            type: 'area',
            name: '',
            data: data
        }]
    });
    Highcharts.chart('singleLineChart4', {
        chart: {
            height: (9 / 26 * 100) + '%' // 26:9 ratio
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        }, 
        exporting: { 
            enabled: false
        },
        legend: {
            enabled: false
        },
        yAxis: {
            visible: false
        },			
        xAxis: {
            visible: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        
        series: [{
            type: 'area',
            name: '',
            data: data
        }]
    });
}
);









