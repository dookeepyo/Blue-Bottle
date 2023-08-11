
$(document).ready(function(){
    console.log($(window).scrollTop());
    // 콘솔창으로 스크롤 상단px값을 확인하려고 썻음\

    var swiper1 = new Swiper(".mySwiper1", {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: true,
        },
        speed: 2000,
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        preventInteractionOnTransition: true, 
        simulateTouch: false, 
        allowTouchMove: false,
    });
    
      

    var swiper2 = new Swiper(".mySwiper2", {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: true,
        },
        speed: 2000,
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        preventInteractionOnTransition: true, 
        simulateTouch: false, 
        allowTouchMove: false,
        
    });

    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1080: {
            slidesPerView: 3,
          },
          780: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });



    $(document).ready(function() {
        $(".section_1_sliderr").hover(
            function() {
                $(this).addClass("active");
            },
            function() {
                $(this).removeClass("active");
            }
        );
    });

    $(document).ready(function() {
        $(".svg_heart").click(function() {
            $(this).toggleClass("active");
        });
    });

    $(document).ready(function() {
        $(".svg_basket").click(function() {
            // Check if user is logged in (replace with your own authentication logic)
            var isLoggedIn = false; // Example: Assume user is not logged in
            
            if (!isLoggedIn) {
                alert("로그인이 필요한 서비스입니다."); // Display an alert message
            } else {
                // Perform basket-related action
            }
        });
    });

    $(document).ready(function() {
        $(".header_menu").hover(
            function() {
                $(".header").addClass("active");
            },
            function() {
                $(".header").removeClass("active");
            }
        );
    });

    $(document).ready(function() {
        $(".header_menu_sns").hover(
            function() {
                // 마우스를 올렸을 때
                $(".header_menu_sns_item_hoverbox").slideDown();
            },
            function() {
                // 마우스를 뗐을 때
                $(".header_menu_sns_item_hoverbox").slideUp();
            }
        );
    });

    $(document).ready(function() {
        $('.hamburger_button').click(function() {
            $(this).toggleClass('active');
            $('.hamburger_button_menu').toggleClass('active');
            
            if($(this).hasClass('active')) {
                // .active 클래스가 추가되면 .header의 opacity를 0으로 바꾸기
                $('.header').css('opacity', 0);
    
                // 0.8초 후 .header의 opacity를 다시 1로 변경
                setTimeout(function() {
                    $('.header').css('opacity', 1);
                }, 800);
            }
        });
    });

    $(document).ready(function() {
        $('.hamburger_button_menu_items').click(function() {
            // 현재 클릭된 요소를 제외한 다른 .hamburger_button_menu_items 요소들의 'active' 클래스 제거
            $('.hamburger_button_menu_items').not(this).removeClass('active');
            $('.hamburger_button_menu_items').not(this).children('.hamburger_button_menu_item').slideUp();
    
            // 현재 클릭된 .hamburger_button_menu_items 요소에 대해 'active' 클래스 토글
            $(this).toggleClass('active');
            
            // 현재 클릭된 .hamburger_button_menu_items 요소에 'active' 클래스가 있는지 확인
            if ($(this).hasClass('active')) {
                $(this).children('.hamburger_button_menu_item').slideDown();
            } else {
                $(this).children('.hamburger_button_menu_item').slideUp();
            }
        });
    });
    

    

}); //끝

