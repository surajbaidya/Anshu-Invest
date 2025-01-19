var chart = new CanvasJS.Chart("barChart", {
  animationEnabled: true,
  theme: "light2", // "light1", "light2", "dark1", "dark2"
  title:{
    text: "Top Oil Reserves"
  },
  axisY: {
    title: "Reserves(MMbbl)"
  },
  data: [{        
    type: "column",  
    showInLegend: true, 
    legendMarkerColor: "grey",
    legendText: "MMbbl = one million barrels",
    dataPoints: [      
      { y: 300878, label: "Venezuela" },
      { y: 266455,  label: "Saudi" },
      { y: 169709,  label: "Canada" },
      { y: 158400,  label: "Iran" },
      { y: 142503,  label: "Iraq" },
      { y: 101500, label: "Kuwait" },
      { y: 97800,  label: "UAE" },
      { y: 80000,  label: "Russia" }
    ]
  }]
});
// chart.render();
// var chart = new CanvasJS.Chart("assetAllocationChart", {
//     animationEnabled: true,
//     backgroundColor: "transparent",
//     width:250,
//     data: [{
//       type: "doughnut",
//       startAngle: 60,
//       innerRadius:"50%",
//       toolTipContent: "<b>{label}:</b> {y} (#percent%)",
//       dataPoints: [
//         { y: 60, color: "#3765DA"},
//         { y: 15, color: "#A3BCFB" },
//         { y: 15, color: "#90ED7D" },
//         { y: 20, color: "#E4D354" },
//         { y: 15, color: "#E49054"},
//       ]
//     }]
//   });
//   chart.render();

//   var chart = new CanvasJS.Chart("sectorAllocationChart", {
//     animationEnabled: true,
//     backgroundColor: "transparent",
//      //height:300,
//     // width:700,
//     data: [{
//       type: "doughnut",
//       startAngle: 60,
//       innerRadius:"50%",
//       indexLabelFontSize: 17,
//       toolTipContent: "<b>{label}:</b> {y} (#percent%)",
//       dataPoints: [
//         { y: 60, color: "#3765DA"},
//         { y: 15, color: "#A3BCFB" },
//         { y: 20, color: "#E4D354" },
//         { y: 15, color: "#90ED7D"},
//       ]
//     }]
//   });
//   chart.render();



