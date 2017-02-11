$(document).ready(function(){
$('.content').css('opacity', 0);
$('.content').waypoint(function() {
    $('.content').addClass('animated fadeInUp');
}, { offset: '90%' });


$('.left').css('opacity', 0);
$('.left').waypoint(function() {
    $('.left').addClass('animated fadeInLeft');
}, { offset: '90%' });

$('.middle').css('opacity', 0);
$('.middle').waypoint(function() {
    $('.middle').addClass('animated fadeIn');
}, { offset: '90%' });


$('.right').css('opacity', 0);
$('.right').waypoint(function() {
    $('.right').addClass('animated fadeInRight');
}, { offset: '90%' });


$(".menu-mobile").on('touch click' , function() {
  $('.navigation').css('display','inline-block');
  $('.navigation > ul').addClass('mobile');
  $('.menu-mobile').css('display','none');
  $('.menu-mobile-close').css('display','inline-block');
});

$(".menu-mobile-close").on('touch click' , function() {
  $('.navigation').css('display','none');
  $('.navigation > ul').removeClass('mobile');
  $('.menu-mobile').css('display','inline-block');
  $('.menu-mobile-close').css('display','none');
});

});
