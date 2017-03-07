// 메인 이미지 슬라이드
var mainimg = {
    event:function(){

        // 양 옆 화살표 슬라이드
        var idx = 0;
        var next = function(){
            $('.main_slide ul li').eq(idx).find('.mainbanner').fadeOut()
            .parent().next().find('.mainbanner').fadeIn()
            $('.img_num a').eq(idx).removeClass().next().addClass('num_on')
            idx++
            if(idx == $('.main_slide ul li').length){
                idx = 0;
                $('.main_slide ul li').eq(idx).find('.mainbanner').fadeIn()
                $('.img_num a').eq(idx).addClass('num_on')
            }
        }
        var prev = function(){
            $('.main_slide ul li').eq(idx).find('.mainbanner').fadeOut()
            .parent().prev().find('.mainbanner').fadeIn()
            $('.img_num a').eq(idx).removeClass().prev().addClass('num_on')
            idx--
            if(idx < 0){
                idx = $('.main_slide ul li').length -1;
                $('.main_slide ul li').eq(idx).find('.mainbanner').fadeIn()
                $('.img_num a').eq(idx).addClass('num_on')
            }
        }

        // img_num 버튼 클릭
        var aclick = function(){
            idx = $(this).index();
            $('.img_num a').eq(idx).addClass('num_on').siblings().removeClass()
            .parent().parent().find('li').find('.mainbanner').fadeOut()
            .parent().eq(idx).find('.mainbanner').fadeIn()
        }

        $('.main_bt_next').on('click', next)
        $('.main_bt_prev').on('click', prev)
        $('.img_num a').on('click', aclick)


        //자동으로 슬라이드
        var inter = setInterval(function(){
            $('.main_bt_next').click();
        },5000)


    }
}

$(function(){
    mainimg.event();
})




// 예시
//
// $(function(){
//
//     var idx = 0;
//     $('.main_slide .main_bt_next').click(function(){
//         $('.main_slide li').eq(idx).animate({
//             left:'-100%'
//         })
//         idx++
//
//         $('.main_slide li').eq(idx).css({
//             display:'block',
//             left:'100%'
//         }).animate({
//             left:'0'
//         },function(){
//             //에니메이션 후처리
//         })
//     })
// })
