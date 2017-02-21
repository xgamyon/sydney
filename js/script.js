// 메뉴바
var start = true;  //메뉴바 상단 스크롤 에서 쓰임
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

        $('[class^="menu_"]').on('mouseenter',submenu_open)
        $('[class^="menu_"]').on('mouseleave',submenu_close)
        $('[class^="sub_"] li a').on('mouseenter',depth3_open)
        $('[class^="sub_"] li a').on('mouseleave',depth3_close)
    },

    // 메뉴바 상단 스크롤
    scroll:function(){
        var top = $('.nav_cont').offset().top;
        $(window).scroll(function(){
            if($(document).scrollTop() > top+100){
                if( start==true){
                    $('.nav_cont').css({
                        'top':"-70px"
                    }).stop().animate({
                        'top':"0px"
                    }).addClass('nav_fixed')
                    start=false;
                };
            }else{
                $('.nav_cont').css({
                    'top':"0px"
                }).stop().animate({
                    'top':"-70px"
                }).removeClass('nav_fixed');
                start=true;
            }
        })
    }
}











$(function(){
    menu.event();
    menu.scroll();
})
