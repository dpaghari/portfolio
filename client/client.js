document.addEventListener('DOMContentLoaded', function() {

  let navIcon = document.querySelector('.nav-icon');

  navIcon.addEventListener('click', function (e) {
    this.classList.toggle('open');
    document.querySelector('.menu-container').classList.toggle('active');
  });


});
