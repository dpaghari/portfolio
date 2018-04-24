$(document).ready(function (){
  let $navIcon = $('.nav-icon');
  $navIcon.on('click', function () {
    $(this).toggleClass('open');
    $('.menu-container').toggleClass('active');
  });

  let $splash = document.querySelector('.c-hero');
  let heroWaypoint = new Waypoint({
    element: $splash,
    handler: function(direction) {
      if(direction === 'down')
      $splash.classList.add('wp-fadeup');
    }
  });


  let $projects = Array.from(document.querySelectorAll('.c-projects__project'));

  $projects.map(($el) => {
    let projectWaypoint = new Waypoint({
      element: $el,
      handler: function(direction) {
        if(direction === 'down')
        $el.classList.add('wp-fadein');
      },
      offset: '35%'
    });
  });

  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
  });

  // $(document).on('click', '.nerd-note-btn', function(e) {
  //   e.preventDefault();
  //   let $nerdNote = $(this).siblings('.nerd-notes')[0];
  //   console.log($nerdNote);
  //   // $($nerdNote).toggleClass('active');
  //   $($nerdNote).slideToggle('fast');
  //
  // });
});
