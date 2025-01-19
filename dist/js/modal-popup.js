/* JS for custom dropdwon on mutual fund page */
const selectwrap = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

selectwrap.forEach(a => {
	a.addEventListener('click', b => {
		const next = b.target.nextElementSibling;
		next.classList.toggle('toggle');
		next.style.zIndex = index++;
	})
})
option.forEach(a => {
	a.addEventListener('click', b => {
		b.target.parentElement.classList.remove('toggle');
		
		const parent = b.target.closest('.selectdropdownwrap').children[0];
		parent.setAttribute('data-type', b.target.getAttribute('data-type'));
		parent.innerText = b.target.innerText;
	})
})

// modal form
$('.click__here').click(function() {
    $(this).parent('.form-card').find('.form__modal').addClass('active');
});

$('.form__modal-header-close').click(function() {
    $('.form__modal').removeClass('active');
});

// creating div element for alert dropdown menu
$('.menu-item.has-alert-menu .menu-link').on('click', function(){
    event.preventDefault();
    $('body').addClass('overflow');
    $('.megamenu').addClass('show');
    $('.main__content').addClass('overlay');
    
});

$('.dropdown__close-icon').on('click', function(){
    $('body').removeClass('overflow');
    $('.megamenu').removeClass('show');
    $('.main__content').removeClass('overlay');
})

// comapny category list
$('.category-title').click(function() {
    $(this).addClass('active');
    $(this).parent('.company__category').find('.category-menu').addClass('active');
    $('body').css('overflow', 'hidden');
    $(this).parent('.company__category').append(overlay);
});

// closing company list
$('.btn__close').click(function() {
    $('.category-menu').removeClass('active');
    $('body').css('overflow', 'auto');
    overlay.remove(overlay);
    $('.category-title').removeClass('active');
});

/* JS for video popup on service page list: Suraj */
$(document).ready(function() {
	$('.video__section-wrapper-grid .grid-card').on('click', function() {
  // get required DOM Elements
  var iframe_src = $('.video__section-wrapper-grid .grid-card .video').children('iframe').attr('src'),
        iframe = $('.video-popup'),
        iframe_video = $('.video-popup iframe'),
        close_btn = $('.close-video');
        iframe_src = iframe_src + '?autoplay=1&rel=0'; // for autoplaying the popup video
        
  // change the video source with the clicked one
  $(iframe_video).attr('src', iframe_src);
  $(iframe).fadeIn().addClass('show-video');
		
  // remove the video overlay when clicking outside the video
  $('.close-video').on('click', function(e) {
    $(iframe).removeClass('show-video');
    $(iframe_video).attr('src', '');
		});
		
	});
  
});
/* JS for matchheight title on market summary page */
$(function() {
	$('.table__title').matchHeight();
  $('.grid-card').matchHeight();
  $('.news__development-text h2').matchHeight();
  $('.package-card-item').matchHeight();
});


/* js for back to top button */
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


/* kendo chart */
function chartStatement() {
  $("#Statement").kendoChart({
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
$(document).ready(chartStatement);
$(document).bind("kendo:skinChange", chartStatement);
$(layout).append(MarkerCircle, label);



// companylist  pagination
let tbody=document.querySelector('table');
let tr=document.getElementsByTagName('tr');
let select=document.querySelector('select');
let ul=document.querySelector('.pagination');
let rowShowed=document.querySelector('.row-showed');
// let rowStartElement=document.querySelector('.row-start-number');

let totalRows=document.querySelector('.total-rows');

// let rowStartNumber;

let arrayTr=[];
for (let i=0;i<tr.length;i++){
    arrayTr.push(tr[i]);
    
}
totalRows.innerHTML=tr.length-1;


select.onchange=rowCount;
function rowCount(e){
    let limit=parseInt(e.target.value);
    rowShowed.innerHTML=limit;
    // rowStartNumber=
    // rowStartElement.innerHTML=
    
    displayPage(limit);
    
}
function displayPage(limit){
    tbody.innerHTML="";
    for(let i=0;i<limit+1;i++){
        tbody.appendChild(arrayTr[i]);
    }
}
displayPage(49);



