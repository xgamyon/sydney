// 메뉴바
// var start = true;  //메뉴바 상단 스크롤 맨처음 방법 에서 쓰임
var menu = {
    // 메뉴바 슬라이드
    event:function(){
        // 호버시
        var submenu_open = function(){
            $(this).parent().find('[class^="sub_"]').stop().slideDown(300)
            .parent().siblings().find('[class^="sub_"]').css({
                'display':'none'
            });
        }
        var submenu_close = function(){
            $(this).find('[class^="sub_"]').stop().slideUp(300);
        }
        var depth2 = function(){
            $(this).parent().find('.depth2').stop().slideDown(300)
            .parent().siblings().find('.depth2').css({
                'display':'none'
            });
        }
        var depth2_close = function(){
            $(this).children().find('ul').stop().slideUp(300);
        }

        // 클릭시
        var submenu_click = function(){
            $(this).parent().find('[class^="sub_"]').stop().slideToggle(300)
            .parent().siblings().find('[class^="sub_"]').css({
                'display':'none'
            });
        }
        var depth2_click = function(){
            $(this).parent().find('.depth2').stop().slideToggle(300)
            .parent().siblings().find('.depth2').css({
                'display':'none'
            });
        }

        // pc, 모바일 이동시 호버, 클릭상태 변경
        var size = 'none';
        size = $('.mobile_menu').css('display');

        if( size=="block"){   // 시초에 모바일이 먼저 불러왔을 경우 class 가 없기 때문에 추가
            $('.mobile_menu').addClass('one');
        }

 	    $(window).resize(function(){

 	    	size = $('.mobile_menu').css('display');
            // 리사이징 이벤트가 계속 발생하기 때문에 조건을 2가지로 줘서 한번만 실행하게
 	    	if(size == "none" && !$('.mobile_menu').is('.one')){ // 임의의 클래스가 없는 경우도 충족시켜야 한다.
                console.log('none')
                $('.mobile_menu').addClass('one'); //없으니까 생성

 	    		//대상.on("hover")
                $('[class^="menu_"]').on('mouseenter', submenu_open)
                $('.menu').on('mouseleave', submenu_close)
                $('[class^="sub_"] li a').on('mouseenter', depth2)
                $('[class^="sub_"]').on('mouseleave', depth2_close)

 	    		//대상.off("click")
                $('[class^="menu_"]').off('click')
                $('[class^="sub_"] li a').off('click')

 	    		//display  여부
                $('nav ul').css('display','block')
                .children().find('ul').css('display','none')
                $('.scroll_up').css('display','none') // 하단 스크롤

 	    	}else if(size == "block" && $('.mobile_menu').is('.one')){
                console.log('block')
                $('.mobile_menu').removeClass('one');

 	    		//대상.on("click")
                $('[class^="menu_"]').on('click', submenu_click)
                $('[class^="sub_"] li a').on('click', depth2_click)

 	    		//대상.off("hover")
                $('[class^="menu_"]').off('mouseenter')
                $('.menu').off('mouseleave')
                $('[class^="sub_"] li a').off('mouseenter')
                $('[class^="sub_"]').off('mouseleave')

 	    		//display  여부
                $('nav ul').css('display','none')
                $('.scroll_up').css('display','block') // 하단 스크롤
 	    	}
 	    })
        $(window).trigger('resize');
        // 처음에 resize가 발생 안하기 때문에 실행 한번 시키기
    },

    // 메뉴바 상단 스크롤
    scroll:function(){
        // var top = $('.nav_cont').offset().top;

        $(window).resize(function(){
            size = $('.mobile_menu').css('display');
            if(size == "none" && !$('.mobile_menu').is('.mob')){
                $('.mobile_menu').addClass('mob');

                $(window).scroll(function(){
                    var sct = $(this).scrollTop();
                    var nav = $('.nav_cont');

                    nav.addClass('nav_fixed'); // 맨 처음엔 없기 때문에 추가

                	if( sct > nav.height()+42 && !nav.is('.fix')){ // 가상으로 fix라는 클래스를 만든것
                		nav.addClass('fix');
                		nav.css({
                            'top':"-70px"
                        }).stop().animate({
                            'top':"0px"
                        },300).addClass('nav_fixed'); // 동시에 실행됨

                        $('.scroll_up').css('display','block') // 하단 스크롤

                	}else if(sct < nav.height()+42 && nav.is('.fix')){
                		nav.removeClass('fix');
                		nav.css({
                            'top':"0px"
                        }).stop().animate({
                            'top':"-70px"
                        },300,function(){
                            nav.removeClass('nav_fixed'); //애니메이트 끝나고 실행(콜백함수)
                        })

                        $('.scroll_up').css('display','none') // 하단 스크롤

                	}
                })

            }else if(size == "block" && $('.mobile_menu').is('.mob')){
                $('.mobile_menu').removeClass('mob');
                $(window).scroll(function(){
                    var nav = $('.nav_cont');
                	nav.removeClass('nav_fixed');
                })
            }
        });
        $(window).trigger('resize');
        // 처음에 resize가 발생 안하기 때문에 실행 한번 시키기


// 메뉴바 상단 스크롤 맨처음 방법
// $(window).scroll(function(){
//     var sct = $(this).scrollTop();
//     var nav = $('.nav_cont');
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
//      })

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

// bx슬라이드 배너
var slider = {
    event:function(){
        var mySlider = $('.slide_banner').bxSlider({
            mode: 'horizontal',// 가로 방향 수평 슬라이드
            speed: 500,        // 이동 속도를 설정
            pager: true,      // 현재 위치 페이징 표시 여부 설정
            moveSlides: 1,     // 슬라이드 이동시 개수
            slideWidth: 585,   // 슬라이드 너비
            minSlides: 1,      // 최소 노출 개수
            maxSlides: 2,      // 최대 노출 개수
            slideMargin: 0,    // 슬라이드간의 간격
            autoHover: true,   // 마우스 호버시 정지 여부
            auto: true,        // 자동 실행 여부
            controls: false   // 이전 다음 버튼 노출 여부
        });

       //이전 버튼을 클릭하면 이전 슬라이드로 전환
        $('.prevBtn').on( 'click', function () {
            mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동
        });

       //다음 버튼을 클릭하면 다음 슬라이드로 전환
        $('.nextBtn').on( 'click', function () {
            mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동
        });
    }
}


// bx슬라이드 배너
var slider_parteners = {
    event:function(){
        var mySlider = $('.slide_banner_parteners').bxSlider({
            mode: 'horizontal',// 가로 방향 수평 슬라이드
            speed: 500,        // 이동 속도를 설정
            pager: false,      // 현재 위치 페이징 표시 여부 설정
            moveSlides: 1,     // 슬라이드 이동시 개수
            slideWidth: 235,   // 슬라이드 너비
            minSlides: 2,      // 최소 노출 개수
            maxSlides: 5,      // 최대 노출 개수
            slideMargin: 0,    // 슬라이드간의 간격
            autoHover: true,   // 마우스 호버시 정지 여부
            auto: true,        // 자동 실행 여부
            controls: false   // 이전 다음 버튼 노출 여부
        });

       //이전 버튼을 클릭하면 이전 슬라이드로 전환
        $('.prevBtn_parteners').on( 'click', function () {
            mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동
        });

       //다음 버튼을 클릭하면 다음 슬라이드로 전환
        $('.nextBtn_parteners').on( 'click', function () {
            mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동
        });
    }
}

$(function(){
    menu.event();
    menu.scroll();
    mobile_menu.event();
    main_banner.event();
    slider.event();
    slider_parteners.event();
})





$(function(){

    // search
    $('input[type="search"]').focus(function(){
        $(this).parent().parent().parent().css('border', '2px #e1e1e1 solid')
    })
    $('input[type="search"]').blur(function(){
        $(this).parent().parent().parent().css('border', '2px #c8bba1 solid')
    })
    // 서브 NEWS 페이지 search
    $('.subcont_news_2 > ul > li > .search input[type="search"]').focus(function(){
        $(this).parent().parent().parent().css({
            'border': '2px #e1e1e1 solid',
            'border-left': '2px #2b3542 solid'
        })
    })
    $('.subcont_news_2 > ul > li > .search input[type="search"]').blur(function(){
        $(this).parent().parent().parent().css({
            'border': '2px #e4f0f3 solid',
            'border-left': '2px #2b3542 solid'
        })
    })
    // 서브 CONTACT 페이지 Send
    $('[class^="send_"] input').focus(function(){
        $(this).parent().parent().css('border', '2px #e1e1e1 solid')
    })
    $('[class^="send_"] input').blur(function(){
        $(this).parent().parent().css('border', '2px #e4f0f3 solid')
    })
    // 서브 CONTACT 페이지 textarea
    $('.send_message').focus(function(){
        $(this).css('border', '2px #e1e1e1 solid')
    })
    $('.send_message').blur(function(){
        $(this).css('border', '2px #e4f0f3 solid')
    })


    // news hover
    $('.news_box').hover(function(){
        $(this).children().find('.news_tab').css('background-color', '#04142b')
    },function(){
        $(this).children().find('.news_tab').css('background-color', '#c8bba1')
    })


    // mail_form
    $('.form_wrap input').focus(function(){
        $(this).css('border-bottom', '2px #c8bba1 solid')
    })
    $('.form_wrap input').blur(function(){
        $(this).css('border-bottom', '2px #04142b solid')
    })


    // footer SUBSCRIBE
    $('.footer_subscribe input').focus(function(){
        $(this).parent().css('border', '1px solid #fff')
    })
    $('.footer_subscribe input').blur(function(){
        $(this).parent().css('border', '1px solid #c8bba1')
    })


    // scroll_up 클릭시 상단으로
    $('.scroll_up').click(function(){
        var topidx = $('header').offset().top;
        $('html,body').stop().animate({
            'scrollTop' : topidx
        })

    })


})
