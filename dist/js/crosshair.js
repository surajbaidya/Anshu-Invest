window.onload = function () {
    var industrychart = new CanvasJS.Chart("industryContainer", {
      
        animationEnabled: true,
        axisX:{
            valueFormatString: "MMM" ,
            interval: 1,
            intervalType: "month",
            tickColor: "#ccc",
             tickLength: 15,
        },
        axisY: {
            gridColor: "#F2F2F2",
              labelFormatter: function(e){
                if(e.chart.axisY[0].minimum != e.value )
                    return e.value;
                return "";
              }
        },
        data: [{
           color: "rgba(94, 139, 254, 1)", 
            type:"line",
            axisType: "secondary",
            showInLegend: false,
            markerSize: 0,
            dataPoints: [		
                { x: new Date(2014, 00, 01), y: 850 },
                { x: new Date(2014, 01, 01), y: 889 },
                { x: new Date(2014, 02, 01), y: 890 },
                { x: new Date(2014, 03, 01), y: 899 },
                { x: new Date(2014, 04, 01), y: 903 },
                { x: new Date(2014, 05, 01), y: 925 },
                { x: new Date(2014, 06, 01), y: 899 },
                { x: new Date(2014, 07, 01), y: 875 },
                { x: new Date(2014, 08, 01), y: 927 },
                { x: new Date(2014, 09, 01), y: 949 },
                { x: new Date(2014, 10, 01), y: 946 },
                { x: new Date(2014, 11, 01), y: 927 },
                { x: new Date(2015, 00, 01), y: 950 },
                { x: new Date(2015, 01, 01), y: 998 },
                { x: new Date(2015, 02, 01), y: 998 },
                { x: new Date(2015, 03, 01), y: 1050 },
                { x: new Date(2015, 04, 01), y: 1050 },
                { x: new Date(2015, 05, 01), y: 999 },
                { x: new Date(2015, 06, 01), y: 998 },
                { x: new Date(2015, 07, 01), y: 998 },
                { x: new Date(2015, 08, 01), y: 1050 },
                { x: new Date(2015, 09, 01), y: 1070 },
                { x: new Date(2015, 10, 01), y: 1050 },
                { x: new Date(2015, 11, 01), y: 1050 },
                { x: new Date(2016, 00, 01), y: 995 },
                { x: new Date(2016, 01, 01), y: 1090 },
                { x: new Date(2016, 02, 01), y: 1100 },
                { x: new Date(2016, 03, 01), y: 1150 },
                { x: new Date(2016, 04, 01), y: 1150 },
                { x: new Date(2016, 05, 01), y: 1150 },
                { x: new Date(2016, 06, 01), y: 1100 },
                { x: new Date(2016, 07, 01), y: 1100 },
                { x: new Date(2016, 08, 01), y: 1150 },
                { x: new Date(2016, 09, 01), y: 1170 },
                { x: new Date(2016, 10, 01), y: 1150 },
                { x: new Date(2016, 11, 01), y: 1150 },
                { x: new Date(2017, 00, 01), y: 1150 },
                { x: new Date(2017, 01, 01), y: 1200 },
                { x: new Date(2017, 02, 01), y: 1200 },
                { x: new Date(2017, 03, 01), y: 1200 },
                { x: new Date(2017, 04, 01), y: 1190 },
                { x: new Date(2017, 05, 01), y: 1170 }
            ]
        },
        {
            type: "line",
            color: "rgba(0, 153, 0, 1)" , 
            axisType: "secondary",
            showInLegend: false,
            markerSize: 0,
            dataPoints: [
                { x: new Date(2014, 00, 01), y: 1200 },
                { x: new Date(2014, 01, 01), y: 1200 },
                { x: new Date(2014, 02, 01), y: 1190 },
                { x: new Date(2014, 03, 01), y: 1180 },
                { x: new Date(2014, 04, 01), y: 1250 },
                { x: new Date(2014, 05, 01), y: 1270 },
                { x: new Date(2014, 06, 01), y: 1300 },
                { x: new Date(2014, 07, 01), y: 1300 },
                { x: new Date(2014, 08, 01), y: 1358 },
                { x: new Date(2014, 09, 01), y: 1410 },
                { x: new Date(2014, 10, 01), y: 1480 },
                { x: new Date(2014, 11, 01), y: 1500 },
                { x: new Date(2015, 00, 01), y: 1500 },
                { x: new Date(2015, 01, 01), y: 1550 },
                { x: new Date(2015, 02, 01), y: 1550 },
                { x: new Date(2015, 03, 01), y: 1590 },
                { x: new Date(2015, 04, 01), y: 1600 },
                { x: new Date(2015, 05, 01), y: 1590 },
                { x: new Date(2015, 06, 01), y: 1590 },
                { x: new Date(2015, 07, 01), y: 1620 },
                { x: new Date(2015, 08, 01), y: 1670 },
                { x: new Date(2015, 09, 01), y: 1720 },
                { x: new Date(2015, 10, 01), y: 1750 },
                { x: new Date(2015, 11, 01), y: 1820 },
                { x: new Date(2016, 00, 01), y: 2000 },
                { x: new Date(2016, 01, 01), y: 1920 },
                { x: new Date(2016, 02, 01), y: 1750 },
                { x: new Date(2016, 03, 01), y: 1850 },
                { x: new Date(2016, 04, 01), y: 1750 },
                { x: new Date(2016, 05, 01), y: 1730 },
                { x: new Date(2016, 06, 01), y: 1700 },
                { x: new Date(2016, 07, 01), y: 1730 },
                { x: new Date(2016, 08, 01), y: 1720 },
                { x: new Date(2016, 09, 01), y: 1740 },
                { x: new Date(2016, 10, 01), y: 1750 },
                { x: new Date(2016, 11, 01), y: 1750 },
                { x: new Date(2017, 00, 01), y: 1750 },
                { x: new Date(2017, 01, 01), y: 1770 },
                { x: new Date(2017, 02, 01), y: 1750 },
                { x: new Date(2017, 03, 01), y: 1750 },
                { x: new Date(2017, 04, 01), y: 1730 },
                { x: new Date(2017, 05, 01), y: 1730 }
            ]
        }]
    });
    industrychart.render();

 
    var crosschart = new CanvasJS.Chart("crossContent", {
        animationEnabled: true,
        axisX: {
            valueFormatString: "MMM" ,
            interval: 1,
            intervalType: "month",
            tickColor: "#ccc",
             tickLength: 15,
             minimum:0
            
        },
       
        axisY: {
            gridColor: "#F2F2F2",
            minimum: 398,
            maximum: 406,
              interval: 2,
              labelFormatter: function(e){
                if(e.chart.axisY[0].minimum != e.value )
                    return e.value;
                return "";
              }
              
        },
        data: [{
            markerType: "none",
            color: "rgba(195, 220, 247, 1)", 
            borderColor: "rgba(94, 139, 254, 1)",
            name: "views",
            type: "area",
            dataPoints: [
                { x: 0, y: 401.1,label: "Jan, 2021"},
                { x: 1, y: 401.1,label: "Feb, 2021"},
                { x: 2, y: 400.1,label: "Mar, 2021" },
                { x: 3, y: 401.02 ,label: "Apr, 2021" },
                { x: 4, y: 402.6 ,label: "May, 2021" },
                { x: 5, y: 405 ,label: "Jun, 2021" },
                { x: 6, y: 400 ,label: "Jul, 2021" },
                { x: 7, y: 400.4,label: "Aug, 2021" },
                { x:8, y: 404.0,label: "Sep, 2021" },
                { x: 9, y: 406.8,label: "Oct, 2021" },
                { x:10, y: 402.6,label: "Nov, 2021" },
                { x:11, y: 404.75,label: "Dec, 2021" },
            ]
           
        }]
        
    });
    crosschart.render();
   
};
    


/* kendo chart for financial page */
function holdingNav() {
    $("#navHolding").kendoChart({
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
  $(document).ready(holdingNav);
  $(document).bind("kendo:skinChange", holdingNav);
  $(layout).append(MarkerCircle, label);




