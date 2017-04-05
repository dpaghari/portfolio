// const Waypoint = require('waypoints');


$(document).ready(function (){
  let $navIcon = $('.nav-icon');
  $navIcon.on('click', function () {
    $(this).toggleClass('open');
    $('.menu-container').toggleClass('active');
  });

  let $project = document.querySelector('section.projects');
  let projectWaypoint = new Waypoint({
    element: $project,
    handler: function(direction) {
      if(direction === 'down')
      $project.classList.add('wp-fadein');
    },
    offset: '35%'
  });
  $('a[href^="#"]').on('click',function (e) {
  	    e.preventDefault();

  	    var target = this.hash;
  	    var $target = $(target);
        console.log($target.offset().top);
  	    $('html, body').stop().animate({
  	        'scrollTop': $target.offset().top - 85
  	    }, 900, 'swing');
  	});
    // function triggered on window scroll
  // $(window).on('scroll', function() {
  //
  //     // store the current vertical position of the scroll bar
  //     var scroll_top = $(window).scrollTop();
  //
  //     // change inline css rule, based on factor of scroll_top
  //     $('h1.headline').css('background-position-y', scroll_top * -1.0);
  // });
});







// document.addEventListener('DOMContentLoaded', function() {
//
//   let navIcon = document.querySelector('.nav-icon');
//
//   navIcon.addEventListener('click', function (e) {
//     this.classList.toggle('open');
//     document.querySelector('.menu-container').classList.toggle('active');
//   });
//
//   let $project = document.querySelector('section.projects');
//   let projectWaypoint = new Waypoint({
//     element: $project,
//     handler: function(direction) {
//       if(direction === 'down')
//       $project.classList.add('wp-fadein');
//     },
//     offset: '35%'
//   });
//
//   // document.addEventListener('click', function (e) {
//   //   console.log(e.target);
//   //   if(e.target.classList.contains('arrow-down')) {
//   //     window.location = '#about';
//   //   }
//   // });
//
//   $('a[href^="#"]').on('click',function (e) {
//   	    e.preventDefault();
//
//   	    var target = this.hash;
//   	    var $target = $(target);
//
//   	    $('html, body').stop().animate({
//   	        'scrollTop': $target.offset().top
//   	    }, 900, 'swing');
//   	});
//
//
// });
