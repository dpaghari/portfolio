$(document).ready(function (){
  let $navIcon = $('.nav-icon');
  $navIcon.on('click', function () {
    $(this).toggleClass('open');
    $('.menu-container').toggleClass('active');
  });

  let $splash = document.querySelector('section.hero');
  let heroWaypoint = new Waypoint({
    element: $splash,
    handler: function(direction) {
      if(direction === 'down')
      $splash.classList.add('wp-fadeup');
    }
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
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
  });

  $(document).on('click', '.nerd-note-btn', function(e) {
    e.preventDefault();
    let $nerdNote = $(this).siblings('.nerd-notes')[0];
    console.log($nerdNote);
    // $($nerdNote).toggleClass('active');
    $($nerdNote).slideToggle('fast');

  });
});
