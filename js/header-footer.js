$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".nav-menu").slideToggle();
    $(this).toggleClass("close");

    if ($(this).hasClass("close")) {
      $(this).html('<i class="fas fa-times"></i>');
    } else {
      $(this).html('<i class="fas fa-bars"></i>');
    }
  });
});
