$(document).ready(function(){
$('.content').css('opacity', 0);
$('.content').waypoint(function() {
    $('.content').addClass('animated fadeInUp');
}, { offset: '70%' });


$('.left').css('opacity', 0);
$('.left').waypoint(function() {
    $('.left').addClass('animated fadeInLeft');
}, { offset: '70%' });

$('.middle').css('opacity', 0);
$('.middle').waypoint(function() {
    $('.middle').addClass('animated fadeIn');
}, { offset: '70%' });


$('.right').css('opacity', 0);
$('.right').waypoint(function() {
    $('.right').addClass('animated fadeInRight');
}, { offset: '70%' });


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
