// 메뉴바
// var start = true;  //메뉴바 상단 스크롤 맨처음 방법 에서 쓰임
var menu = {
    // 메뉴바 슬라이드
    event:function(){
        var submenu_open = function(){
            $(this).parent().find('[class^="sub_"]').slideToggle().parent().siblings().find('[class^="sub_"]').css({
                'display':'none'
            });
        }
        var submenu_close = function(){
            $(this).children().find('[class^="sub_"]').slideToggle();
        }
        var depth3_open = function(){
            $(this).parent().find('.depth3').slideToggle().parent().siblings().find('.depth3').css({
                'display':'none'
            });
        }
        var depth3_close = function(){
            $(this).parent().find('.depth3').slideToggle();
        }

        $('[class^="menu_"]').on('mouseenter', submenu_open)
        $('[class^="menu_"]').on('mouseleave', submenu_close)
        $('[class^="sub_"] li a').on('mouseenter', depth3_open)
        $('[class^="sub_"] li a').on('mouseleave', depth3_close)
    },

    // 메뉴바 상단 스크롤
    scroll:function(){
        var top = $('.nav_cont').offset().top;

        $(window).scroll(function(){
        	var sct = $(this).scrollTop();
        	var nav = $('.nav_cont');

        	if( sct > nav.height()+42 && !nav.is('.fix')){ // 가상으로 fix라는 클래스를 만든것
        		nav.addClass('fix');
        		nav.css({
                    'top':"-70px"
                }).stop().animate({
                    'top':"0px"
                }).addClass('nav_fixed'); // 동시 실행

        	}else if(sct < nav.height()+42 && nav.is('.fix')){
        		nav.removeClass('fix');
        		nav.css({
                    'top':"0px"
                }).stop().animate({
                    'top':"-70px"
                },function(){
                    nav.removeClass('nav_fixed'); //애니메이트 끝나고 실행(콜백함수)
                })
        	}

// 메뉴바 상단 스크롤 맨처음 방법

//            if($(this).scrollTop() > top+100){
//
//                if( start==true){
//                    $('.nav_cont').css({
//                        'top':"-70px"
//                    }).stop().animate({
//                        'top':"0px"
//                    }).addClass('nav_fixed')
//                    start=false;
//                };
//            }else{
//                $('.nav_cont').css({
//                    'top':"0px"
//                }).stop().animate({
//                    'top':"-70px"
//                }).removeClass('nav_fixed');
//                start=true;
//            }

        })
    }
}

// 모바일 메뉴
var mobile_menu = {
    event:function(){
        var m_open = function(){
            $(this).parent().find('ul').slideToggle();
        }
        $('.mobile_menu').on('click', m_open)
    }
}

// 메인 배너 3개
var main_banner = {
    event:function(){
        var open = function(){
            $(this).parent().find('.banner_pop').css({
                'display': 'block',
                'top': '262px'
            }).stop().animate({
                'top': '0px'
            },300,function(){
                // 콜백함수: css 이후에 주기 위해서 사용함, 애니메이트 함수가 종료되었을때 호출된다.
                $(this).parent().find('.pop_bt').css('display', 'none')
            });
        }
        var close = function(){
            $(this).parent().parent().find('.pop_bt').css('display', 'block')
            // 일단 먼저 .pop_bt 나타나게 하고..

            $(this).parent('.banner_pop').css({
                'display': 'block',
                'top': '0px'
            }).stop().animate({
                'top': '262px'
            },300,function(){
                // 콜백함수: css 이후에 주기 위해서 사용함, 애니메이트 함수가 종료되었을때 호출된다.
                $('.close').parent('.banner_pop').css('display','none')
            });
        }
        $('.pop_bt').on('click', open)
        $('.close').on('click', close)
    }
}








$(function(){
    menu.event();
    menu.scroll();
    mobile_menu.event();
    main_banner.event();
})
