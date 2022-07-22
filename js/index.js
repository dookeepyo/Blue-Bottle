$(document).ready(function(){
  console.log($(window).scrollTop()); //콘솔창으로 스크롤 상단px값을 확인하려고 썻음
  AOS.init();

  $('.menu').click(function(){
    $('.sub-menu').slideToggle("slow");
    $('.sub-menu').css({
      // 고정부분
      'position':'fixed','z-index':'9999'});
    $('.logo').toggleClass('active');
    $('.menu-item p').toggleClass('active');
    $('.menu').toggleClass('active');
    $('.menu-line li').toggleClass('active');

  });
  $(window).scroll(function(){
    const sct = $(window).scrollTop();

    if(sct >= 950){
      $('.rsec2-img1').addClass('active');
    }
    if(sct >=1383.199){
      $('.rsec2-img2').addClass('active');
    }
    if(sct >=2399){
      $('.rsec3-img').addClass('active');
    }
    if(sct >=3357){
      $('.rsec4-img').addClass('active');
    }
    if(sct >=4007){
      $('.sec5').addClass('active');
    }
  }); // 스크롤이벤트부분
  
});// END