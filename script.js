'use strict';
jQuery(document).ready(function($) {
  //Box overlay
  $(document).on('mouseover', '#box1', function(e) {
    $('.blue-box1').removeClass('d-none');
    e.preventDefault();
  });

  $(document).on('mouseout', '#box1', function(e) {
    $('.blue-box1').addClass('d-none');
    e.preventDefault();
  });

  $(document).on('mouseover', '#box2', function(e) {
    $('.blue-box2').removeClass('d-none');
    e.preventDefault();
  });

  $(document).on('mouseout', '#box2', function(e) {
    $('.blue-box2').addClass('d-none');
    e.preventDefault();
  });

  $(document).on('mouseover', '#box3', function(e) {
    $('.blue-box3').removeClass('d-none');
    e.preventDefault();
  });

  $(document).on('mouseout', '#box3', function(e) {
    $('.blue-box3').addClass('d-none');
    e.preventDefault();
  });

  $(document).on('mouseover', '#box4', function(e) {
    $('.blue-box4').removeClass('d-none');
    e.preventDefault();
  });

  $(document).on('mouseout', '#box4', function(e) {
    $('.blue-box4').addClass('d-none');
    e.preventDefault();
  });

  // Popover

  $('[data-toggle="popover"]').popover({
    container: 'section.map'
  });
  $("#showPop").popover('show');

  $('body').on('click', function(e) {
    $('[data-toggle="popover"]').each(function() {
      //the 'is' for buttons that trigger popups
      //the 'has' for icons within a button that triggers a popup
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        $(this).popover('hide');
      }
    });
  });

});