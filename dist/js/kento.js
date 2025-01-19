



  /* kento chart */
function holdingChart() {
    $("#barHolding").kendoChart({
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
  $(document).ready(holdingChart);
  $(document).bind("kendo:skinChange", holdingChart);
  $(layout).append(MarkerCircle, label);



  