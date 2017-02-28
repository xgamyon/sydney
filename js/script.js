// 메뉴바
// var start = true;  //메뉴바 상단 스크롤 맨처음 방법 에서 쓰임
var menu = {
    // 메뉴바 슬라이드
    event:function(){
        // 호버시
        var submenu_open = function(){
            $(this).parent().find('[class^="sub_"]').slideDown()
            .parent().siblings().find('[class^="sub_"]').css({
                'display':'none'
            });
        }
        var submenu_close = function(){
            $(this).find('[class^="sub_"]').slideUp();
        }
        var depth2 = function(){
            $(this).parent().find('.depth2').slideDown()
            .parent().siblings().find('.depth2').css({
                'display':'none'
            });
        }
        $('[class^="menu_"]').on('mouseenter', submenu_open)
        $('.menu').on('mouseleave', submenu_close)
        $('[class^="sub_"] li a').on('mouseenter', depth2)


        // 클릭시
        var submenu_open_click = function(){
            $(this).parent().find('[class^="sub_"]').slideToggle()
            .parent().siblings().find('[class^="sub_"]').css({
                'display':'none'
            });
        }
        var depth2_click = function(){
            $(this).parent().find('.depth2').slideToggle()
            .parent().siblings().find('.depth2').css({
                'display':'none'
            });
        }


        // pc, 모바일 이동시 호버, 클릭상태 변경
        var size = 'none';
 	    $(window).resize(function(){

 	    	size = $('.mobile_menu').css('display');

 	    	if(size == "none"){
                console.log('none')

 	    		//대상.on("hover")
                $('[class^="menu_"]').on('mouseenter', submenu_open)
                $('.menu').on('mouseleave', submenu_close)
                $('[class^="sub_"] li a').on('mouseenter', depth2)

 	    		//대상.off("click")
                $('[class^="menu_"]').off('click', submenu_open_click)
                $('[class^="sub_"] li a').off('click', depth2_click)

 	    		//display  여부
                $('nav ul').css('display','block')
                .children().find('ul').css('display','none')

 	    	}else if(size == "block"){
                console.log('block')

 	    		//대상.on("click")
                $('[class^="menu_"]').on('click', submenu_open_click)
                $('[class^="sub_"] li a').on('click', depth2_click)

 	    		//대상.off("hover")
                $('[class^="menu_"]').off('mouseenter', submenu_open)
                $('.menu').off('mouseleave', submenu_close)
                $('[class^="sub_"] li a').off('mouseenter', depth2)

 	    		//display  여부
                $('nav ul').css('display','none')
 	    	}
 	    })


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
                },300).addClass('nav_fixed'); // 동시 실행

        	}else if(sct < nav.height()+42 && nav.is('.fix')){
        		nav.removeClass('fix');
        		nav.css({
                    'top':"0px"
                }).stop().animate({
                    'top':"-70px"
                },300,function(){
                    nav.removeClass('nav_fixed'); //애니메이트 끝나고 실행(콜백함수)
                })
        	}

// 메뉴바 상단 스크롤 맨처음 방법
//
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
            $(this).parent().find('ul').slideToggle()
            .children().find('[class^="sub_"]').css('display', 'none')
            .children().find('.depth2').css('display', 'none');
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
