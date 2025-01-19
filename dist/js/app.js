

// js for sticky tab
var div_top = $('.company__top-header').offset().top;

$(window).scroll(function() {
    var window_top = $(window).scrollTop() - 0;
    if (window_top > div_top) {
        if (!$('.company__top-header').is('.sticky')) {
            $('.company__top-header').addClass('sticky');
            $('.company__overview-wrapper').addClass('sticky_top');
            $('.company__overview-wrapper').addClass('sticky_top');
            $('#vertical-inner-Tab').addClass('sticky_tab');
            $('#vertical-inner-Tab').css({ top: jQuery('.company__top-header').height() });
        }
    } else {
        $('.company__top-header').removeClass('sticky');
        $('.company__overview-wrapper').removeClass('sticky_top');
        $('#vertical-inner-Tab').removeClass('sticky_tab');
    }
});
$("#myTab li a").on("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });;
 });

//slider pointer pause
var rangels= document.querySelectorAll('.range-slider__range');
for (i=0;i<rangels.length;i++){
    rangels[i].disabled=true;
}

// owl video slider
$('.owl-video-slider').owlCarousel({
    loop:false,
    autoplay: false,
    autoplayHoverPuase: true,
    responsiveClass:true,
    nav: true,
    navText: ['<i class="ph-arrow-left"></i>','<i class="ph-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// owl-index-slider
$('.owl-index-slider').owlCarousel({
    loop:true,
    autoplay: false,
    autoplayHoverPuase: true,
    responsiveClass:true,
    nav: true,
    margin:30,
    navText: ['<i class="ph-arrow-left"></i>','<i class="ph-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1300:{
            items:4
        },
        1600:{
            items:5
        }
    }
});
/* sticky icon js */
$(".circle-two").click(function(){
    $(".media__sticky").toggleClass("show");
  });


// search menu
const btnSearch = document.querySelector('.search__icon');
const btnLogin = document.querySelector('.btn__login');
const searchInput = document.querySelector('.search-input');
const closeSearch = document.querySelector('.close__search');

btnSearch.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    btnSearch.classList.add('active');
    btnLogin.style.display = 'none';
});

searchInput.addEventListener('focusout', () => {
    searchInput.classList.remove('active');
    btnSearch.classList.remove('active');
    btnLogin.style.display = 'flex';
})

closeSearch.addEventListener('click', () => {
    searchInput.classList.remove('active');
});

// Header Clock JS
// Create Countdown
var Countdown = {
  
    // Backbone-like structure
    $el: $('.countdown'),
    
    // Params
    countdown_interval: null,
    total_seconds     : 0,
    
    // Initialize the countdown  
    init: function() {
      
      // DOM
          this.$ = {
          hours  : this.$el.find('.bloc-time.hours .figure'),
          minutes: this.$el.find('.bloc-time.min .figure'),
          seconds: this.$el.find('.bloc-time.sec .figure')
         };
  
      // Init countdown values
      this.values = {
            hours  : this.$.hours.parent().attr('data-init-value'),
          minutes: this.$.minutes.parent().attr('data-init-value'),
          seconds: this.$.seconds.parent().attr('data-init-value'),
      };
      
      // Initialize total seconds
      this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;
  
      // Animate countdown to the end 
      this.count();    
    },
    
    count: function() {
      
      var that    = this,
          $hour_1 = this.$.hours.eq(0),
          $hour_2 = this.$.hours.eq(1),
          $min_1  = this.$.minutes.eq(0),
          $min_2  = this.$.minutes.eq(1),
          $sec_1  = this.$.seconds.eq(0),
          $sec_2  = this.$.seconds.eq(1);
      
          this.countdown_interval = setInterval(function() {
  
          if(that.total_seconds > 0) {
  
              --that.values.seconds;              
  
              if(that.values.minutes >= 0 && that.values.seconds < 0) {
  
                  that.values.seconds = 59;
                  --that.values.minutes;
              }
  
              if(that.values.hours >= 0 && that.values.minutes < 0) {
  
                  that.values.minutes = 59;
                  --that.values.hours;
              }
  
              // Update DOM values
              // Hours
              that.checkHour(that.values.hours, $hour_1, $hour_2);
  
              // Minutes
              that.checkHour(that.values.minutes, $min_1, $min_2);
  
              // Seconds
              that.checkHour(that.values.seconds, $sec_1, $sec_2);
  
              --that.total_seconds;
          }
          else {
              clearInterval(that.countdown_interval);
          }
      }, 1000);    
    },
    
    animateFigure: function($el, value) {
      
       var that         = this,
               $top         = $el.find('.top'),
           $bottom      = $el.find('.bottom'),
           $back_top    = $el.find('.top-back'),
           $back_bottom = $el.find('.bottom-back');
  
      // Before we begin, change the back value
      $back_top.find('span').html(value);
  
      // Also change the back bottom value
      $back_bottom.find('span').html(value);
  
      // Then animate
      TweenMax.to($top, 0.8, {
          rotationX           : '-180deg',
          transformPerspective: 400,
            ease                : Quart.easeOut,
          onComplete          : function() {
  
              $top.html(value);
  
              $bottom.html(value);
  
              TweenMax.set($top, { rotationX: 0 });
          }
      });
  
      TweenMax.to($back_top, 0.8, { 
          rotationX           : 0,
          transformPerspective: 400,
            ease                : Quart.easeOut, 
          clearProps          : 'all' 
      });    
    },
    
    checkHour: function(value, $el_1, $el_2) {
      
      var val_1       = value.toString().charAt(0),
          val_2       = value.toString().charAt(1),
          fig_1_value = $el_1.find('.top').html(),
          fig_2_value = $el_2.find('.top').html();
  
      if(value >= 10) {
  
          // Animate only if the figure has changed
          if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
          if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
      }
      else {
  
          // If we are under 10, replace first figure with 0
          if(fig_1_value !== '0') this.animateFigure($el_1, 0);
          if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
      }    
    }
  };
  
  // Let's go !
  Countdown.init();



// accordion  icon change for package page 
var acc = document.getElementsByClassName("accordion");
var pi;
for (pi = 0; pi < acc.length; pi++) {
    acc[pi].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

// menu
const hamBtn = document.querySelector('.hamburger__btn');
const navMenu = document.querySelector('#mainNavMenu');

hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});


// investor sentiments poll
const pollLists = document.querySelectorAll('.poll-list');
const pollCheckboxs = document.querySelectorAll('.checkbox');
const pollSection = document.querySelectorAll('.poll__section');

pollLists.forEach(pollList => {
    pollList.addEventListener('click', () => {
        $('.poll-list.active').removeClass('active');
        pollList.classList.toggle('active');
        
        setTimeout(function() {
            $('.poll__section').addClass('hidePoll');
            $('.poll__results').addClass('showPoll');
        }, 1000);
    });
});







