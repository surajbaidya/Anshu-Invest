



/* DOUGHNUT CHART FOR ASSET ALLOCATION */
$(function() {
    // Create the chart
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'assetChartAllocation',
            type: 'pie',
            margin: [-25,0, 0, 0],
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
          },
        title: false,
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                size:'100%'
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
            }
        },
        colors: ['#A3BCFB', '#90ED7D', '#E4D354', '#E49054', '#5E8BFE'],
        series: [{
            data: [50,55, 57, 55, 200],
            size: '80%',
            innerSize: '50%',color:['red','red'],
            dataLabels: {
                enabled: false
            }
        }]
    });
});

/* DOUGHNUT CHART FOR SECTOR ALLOCATION */
$(function() {
    // Create the chart
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'sectorAllocationChart',
            type: 'pie',
            backgroundColor: "#F8FAFF",
            margin: [20,0, 20, 0]
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
          },
        title: false,
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                size:'100%'
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
            }
        },
        colors: ['#A3BCFB', '#90ED7D', '#E4D354', '#5E8BFE'],
        series: [{
            data: [45, 50, 100, 180],
            size: '80%',
            innerSize: '50%',color:['red','red'],
            dataLabels: {
                enabled: false
            }
        }]
    });
    chart = new Highcharts.Chart({
      chart: {
          renderTo: 'sectordevelopmentChart',
          type: 'pie',
          backgroundColor: null,
          margin: [20,0, 20, 0]
      },
      legend: {
          enabled: false
      },
      exporting: {
          enabled: false
        },
      title: false,
      yAxis: {
          title: {
              text: 'Total percent market share'
          }
      },
      plotOptions: {
          pie: {
              shadow: false,
              size:'100%'
          }
      },
      tooltip: {
          formatter: function() {
              return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
          }
      },
      colors: ['#A3BCFB', '#90ED7D', '#E4D354', '#5E8BFE'],
      series: [{
          data: [45, 50, 100, 180],
          size: '80%',
          innerSize: '50%',color:['red','red'],
          dataLabels: {
              enabled: false
          }
      }]
  });
  chart = new Highcharts.Chart({
    chart: {
        renderTo: 'sectorinsuranceChart',
        type: 'pie',
        backgroundColor: null,
        margin: [20,0, 20, 0]
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
      },
    title: false,
    yAxis: {
        title: {
            text: 'Total percent market share'
        }
    },
    plotOptions: {
        pie: {
            shadow: false,
            size:'100%'
        }
    },
    tooltip: {
        formatter: function() {
            return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
        }
    },
    colors: ['#A3BCFB', '#90ED7D', '#E4D354', '#5E8BFE'],
    series: [{
        data: [45, 50, 100, 180],
        size: '80%',
        innerSize: '50%',color:['red','red'],
        dataLabels: {
            enabled: false
        }
    }]
});
chart = new Highcharts.Chart({
  chart: {
      renderTo: 'sectorfixdipositChart',
      type: 'pie',
      backgroundColor: null,
      margin: [20,0, 20, 0]
  },
  legend: {
      enabled: false
  },
  exporting: {
      enabled: false
    },
  title: false,
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  },
  plotOptions: {
      pie: {
          shadow: false,
          size:'100%'
      }
  },
  tooltip: {
      formatter: function() {
          return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
      }
  },
  colors: ['#A3BCFB', '#90ED7D', '#E4D354', '#5E8BFE'],
  series: [{
      data: [45, 50, 100, 180],
      size: '80%',
      innerSize: '50%',color:['red','red'],
      dataLabels: {
          enabled: false
      }
  }]
});
chart = new Highcharts.Chart({
  chart: {
      renderTo: 'sectorcashaChart',
      type: 'pie',
      backgroundColor: null,
      margin: [20,0, 20, 0]
  },
  legend: {
      enabled: false
  },
  exporting: {
      enabled: false
    },
  title: false,
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  },
  plotOptions: {
      pie: {
          shadow: false,
          size:'100%'
      }
  },
  tooltip: {
      formatter: function() {
          return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
      }
  },
  colors: ['#A3BCFB', '#90ED7D', '#E4D354', '#5E8BFE'],
  series: [{
      data: [45, 50, 100, 180],
      size: '80%',
      innerSize: '50%',color:['red','red'],
      dataLabels: {
          enabled: false
      }
  }]
});
chart = new Highcharts.Chart({
  chart: {
      renderTo: 'sectorfixdipositbChart',
      type: 'pie',
      backgroundColor: null,
      margin: [20,0, 20, 0]
  },
  legend: {
      enabled: false
  },
  exporting: {
      enabled: false
    },
  title: false,
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  },
  plotOptions: {
      pie: {
          shadow: false,
          size:'100%'
      }
  },
  tooltip: {
      formatter: function() {
          return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
      }
  },
  colors: ['#A3BCFB', '#90ED7D', '#E4D354', '#5E8BFE'],
  series: [{
      data: [45, 50, 100, 180],
      size: '80%',
      innerSize: '50%',color:['red','red'],
      dataLabels: {
          enabled: false
      }
  }]
});
chart = new Highcharts.Chart({
  chart: {
      renderTo: 'sectorcashbChart',
      type: 'pie',
      backgroundColor: null,
      margin: [20,0, 20, 0]
  },
  legend: {
      enabled: false
  },
  exporting: {
      enabled: false
    },
  title: false,
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  },
  plotOptions: {
      pie: {
          shadow: false,
          size:'100%'
      }
  },
  tooltip: {
      formatter: function() {
          return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
      }
  },
  colors: ['#A3BCFB', '#90ED7D', '#E4D354', '#5E8BFE'],
  series: [{
      data: [45, 50, 100, 180],
      size: '80%',
      innerSize: '50%',color:['red','red'],
      dataLabels: {
          enabled: false
      }
  }]
});
chart = new Highcharts.Chart({
  chart: {
      renderTo: 'fixdepositcChart',
      type: 'pie',
      backgroundColor: null,
      margin: [20,0, 20, 0]
  },
  legend: {
      enabled: false
  },
  exporting: {
      enabled: false
    },
  title: false,
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  },
  plotOptions: {
      pie: {
          shadow: false,
          size:'100%'
      }
  },
  tooltip: {
      formatter: function() {
          return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
      }
  },
  colors: ['#A3BCFB', '#90ED7D', '#E4D354', '#5E8BFE'],
  series: [{
      data: [45, 50, 100, 180],
      size: '80%',
      innerSize: '50%',color:['red','red'],
      dataLabels: {
          enabled: false
      }
  }]
});
chart = new Highcharts.Chart({
  chart: {
      renderTo: 'cashcChart',
      type: 'pie',
      backgroundColor: null,
      margin: [20,0, 20, 0]
  },
  legend: {
      enabled: false
  },
  exporting: {
      enabled: false
    },
  title: false,
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  },
  plotOptions: {
      pie: {
          shadow: false,
          size:'100%'
      }
  },
  tooltip: {
      formatter: function() {
          return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
      }
  },
  colors: ['#A3BCFB', '#90ED7D', '#E4D354', '#5E8BFE'],
  series: [{
      data: [45, 50, 100, 180],
      size: '80%',
      innerSize: '50%',color:['red','red'],
      dataLabels: {
          enabled: false
      }
  }]
});
chart = new Highcharts.Chart({
  chart: {
      renderTo: 'fixdepositdChart',
      type: 'pie',
      backgroundColor: null,
      margin: [20,0, 20, 0]
  },
  legend: {
      enabled: false
  },
  exporting: {
      enabled: false
    },
  title: false,
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  },
  plotOptions: {
      pie: {
          shadow: false,
          size:'100%'
      }
  },
  tooltip: {
      formatter: function() {
          return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
      }
  },
  colors: ['#A3BCFB', '#90ED7D', '#E4D354', '#5E8BFE'],
  series: [{
      data: [45, 50, 100, 180],
      size: '80%',
      innerSize: '50%',color:['red','red'],
      dataLabels: {
          enabled: false
      }
  }]
});
});
Highcharts.chart('daysContainer', {
  chart: {
    type: 'spline',
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1
    }
  },
  legend: {
      enabled: false
  },
  exporting: {
      enabled: false
    },
  title: false,
  xAxis: {
    type: 'datetime',
    labels: {
      overflow: 'justify'
    }
  },
  yAxis: {
    // title:false,
    // min:400,
    //       max: 406,
    //       tickInterval: 2,
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: null,
    plotBands: [{ // Light air
      from: 0.3,
      to: 1.5,
      color: 'rgba(68, 170, 213, 0.1)',
      label: {
        style: {
          color: '#606060'
        }
      }
    }, { // Light breeze
      from: 1.5,
      to: 3.3,
      color: 'rgba(0, 0, 0, 0)',
      label: {
        style: {
          color: '#606060'
        }
      }
    }, { // Gentle breeze
      from: 3.3,
      to: 5.5,
      color: 'rgba(68, 170, 213, 0.1)',
      label: {
        style: {
          color: '#606060'
        }
      }
    }, { // Moderate breeze
      from: 5.5,
      to: 8,
      color: 'rgba(0, 0, 0, 0)',
      label: {
        style: {
          color: '#606060'
        }
      }
    }, { // Fresh breeze
      from: 8,
      to: 11,
      color: 'rgba(68, 170, 213, 0.1)',
      label: {
        style: {
          color: '#606060'
        }
      }
    }, { // Strong breeze
      from: 11,
      to: 14,
      color: 'rgba(0, 0, 0, 0)',
      label: {
        style: {
          color: '#606060'
        }
      }
    }, { // High wind
      from: 14,
      to: 15,
      color: 'rgba(68, 170, 213, 0.1)',
      label: {
        style: {
          color: '#606060'
        }
      }
    }]
  },
  tooltip: {
    valueSuffix: ' m/s'
  },
  plotOptions: {
    spline: {
      lineWidth: 4,
      states: {
        hover: {
          lineWidth: 5
        }
      },
      marker: {
        enabled: false
      },
      pointInterval: 3600000, // one hour
      pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
    }
  },
  series: [{
    name: 'Hestavollane',
    data: [
      3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
      6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
      9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
      10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
      10.1
    ]

  }, {
    name: 'Vik',
    data: [
      0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
      0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
      0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
      0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
      1.5
    ]
  }],
  navigation: {
    menuItemStyle: {
      fontSize: '10px'
    }
  }
});




/* time series js heighcharts*/

 var limit = 30000;    //increase number of dataPoints by increasing this

  var y = 0;
  var data = []; var dataSeries = { type: "line" };
  var dataPoints = [];
  for (var i = 0; i < limit; i += 1) {
      y += (Math.random() * 10 - 5);
       dataPoints.push({
        x: i - limit / 2,
        y: y
         });
      }
   dataSeries.dataPoints = dataPoints;
   data.push(dataSeries);



  /* days js highcharts */

  // Data retrieved from http://vikjavev.no/ver/index.php?spenn=2d&sluttid=16.06.2015.


  /* heigh chart for chart holding tab */

  Highcharts.chart('containerBar', {
    chart: {
      type: 'column'
    },
    title:false,
    exporting: {
      enabled: false
    },
    xAxis: {
      
      categories: [
        'SANIMA',
        'NICA',
        'MBL',
        'HBL',
        'MBL',
        'NBL',
        'MBL',
        'HBL',
        'SBI',
        'NICA',
        'CCBL',
        'PBL'
      ],
      
      crosshair: true
    },
    legend:{ enabled:false },
    yAxis: {
      min: 0,
      title:false,
      labels: {
        format: '{value} M'
    },
    accessibility: {
        description: 'Elevation',
        rangeDescription: 'Range: 0 to 800meters'
    }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0
      }
    },
    series: [{
      data: [620, 300, 180, 420, 760, 350, 580, 420, 620, 350, 180, 420]  
    }]
  });

/* kendo chart for financial page */
function createChart() {
  $("#annualBar").kendoChart({
    chartArea: {background:"transparent"},
    majorGridLines: {
      visible: false,
  },
      title: {
          text: false
      },
      legend: {
          position: "bottom",
          labels:{
            usePointStyle:true,
            font:"18"
          },
          item:{
            visual: function (e) {
              // get color of current marker and label
              var color = e.options.markers.background;     
              var labelColor = e.options.labels.color;
              var rect = new kendo.geometry.Rect([0, 0], [100, 50]);
              var layout = new kendo.drawing.Layout(rect, {
                spacing: 5,
                alignItems: "center"
              });
              // create a circle geometry centered at x=10, y=5, with a radius of 5
              var CircGeometry = new kendo.geometry.Circle([10, 5], 5);
              // draw the circle using the geometry and set the color (could have no stroke)
              var MarkerCircle = new kendo.drawing.Circle(CircGeometry, {
                stroke: { color: color, width: 1 },
                fill: { color: color }
              });
              //Create the text label
              var label = new kendo.drawing.Text(e.series.name, [0, 0], {
                fill: {
                  color: labelColor
                }
              });
            
              //Add circle and label to layout object
              layout.append(MarkerCircle, label);
              layout.reflow()
            
              return layout;
            }
          }
          
      },
      seriesDefaults: {
          type: "column",
      },
     
      series: [{
          name: "Loan",
          data: [50000, 45000, 100000, 35000, 45000 ],
          type: "column",
          color: "#79B1EC",
          majorGridLines: {
            visible: false,
        },
      }, 

      
      {
          name: "Total Assets",
          data: [90000, 0, 250000, 35000, 90000 ],
          type: "column",
          color: "#414248",
        
      }],
      valueAxis: [{
        labels: {
          format: "{0} Mill",
          font:"18",
          padding:{
            right:10
          }
      },
          line: {
              visible: false
          },
          axisCrossingValue: 0,
        
      }], 

      // panes: [
      //   { name: "top-pane", background: "transparent" }
      // ],
      majorGridLines: {
        visible: false,
    },
      categoryAxis: {
          categories: ['2076/77', '2075', '2075/74', '2074/73', '2073/72' ],
          line: {
              visible: false,
          },
          labels: {
              padding: {top: 10},
              font: "18"
          },
          majorGridLines: {
            visible: false,
        },
      },
      tooltip: {
          visible: true,
          format: "{0}",
          template: "#= series.name #: #= value #"
      }
      
  });
  
}
$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);
$(layout).append(MarkerCircle, label);



function holdingChart() {
  $("#holdingBar").kendoChart({
    chartArea: {background:"transparent"},
    majorGridLines: {
      visible: false,
  },
      title: {
          text: false
      },
      legend: {
          position: "bottom",
          labels:{
            usePointStyle:true,
            font:"18"
          },
          item:{
            visual: function (e) {
              // get color of current marker and label
              var color = e.options.markers.background;     
              var labelColor = e.options.labels.color;
              var rect = new kendo.geometry.Rect([0, 0], [100, 50]);
              var layout = new kendo.drawing.Layout(rect, {
                spacing: 5,
                alignItems: "center"
              });
              // create a circle geometry centered at x=10, y=5, with a radius of 5
              var CircGeometry = new kendo.geometry.Circle([10, 5], 5);
              // draw the circle using the geometry and set the color (could have no stroke)
              var MarkerCircle = new kendo.drawing.Circle(CircGeometry, {
                stroke: { color: color, width: 1 },
                fill: { color: color }
              });
              //Create the text label
              var label = new kendo.drawing.Text(e.series.name, [0, 0], {
                fill: {
                  color: labelColor
                }
              });
            
              //Add circle and label to layout object
              layout.append(MarkerCircle, label);
              layout.reflow()
            
              return layout;
            }
          }
          
      },
      seriesDefaults: {
          type: "column",
      },
     
      series: [{
          name: "Loan",
          data: [50000, 45000, 100000, 35000, 45000 ],
          type: "column",
          color: "#79B1EC",
          majorGridLines: {
            visible: false,
        },
      }, 

      
      {
          name: "Total Assets",
          data: [90000, 0, 250000, 35000, 90000 ],
          type: "column",
          color: "#414248",
        
      }],
      valueAxis: [{
          labels: {
              format: "{0}",
              font:"18"
          },
          line: {
              visible: false
          },
          axisCrossingValue: 0,
        
      }], 

      // panes: [
      //   { name: "top-pane", background: "transparent" }
      // ],
      majorGridLines: {
        visible: false,
    },
      categoryAxis: {
          categories: ['2076/77', '2075', '2075/74', '2074/73', '2073/72' ],
          line: {
              visible: false,
          },
          labels: {
              padding: {top: 10},
              font: "18"
          },
          majorGridLines: {
            visible: false,
        },
      },
      tooltip: {
          visible: true,
          format: "{0}",
          template: "#= series.name #: #= value #"
      }
      
  });
  
}
$(document).ready(holdingChart);
$(document).bind("kendo:skinChange", holdingChart);
$(layout).append(MarkerCircle, label);



