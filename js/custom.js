// nav hover
$('.nav_menuhover').mouseenter(function(){
  $('.nav_back').fadeIn();
  $('.nav_submenu').fadeIn();
});
  $('nav').mouseleave(function(){
  $('.nav_back').fadeOut();
  $('.nav_submenu').fadeOut();
  });
// hamburger text hover
$('.hamburgerleft_text span:first-child').mouseenter(function(){
  $(this).nextAll().css('display','block');
});
$('.hamburgerleft_text').mouseleave(function(){
$(this).children().eq(1).css('display','none');
$(this).children().eq(2).css('display','none');
});
