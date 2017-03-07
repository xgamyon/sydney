$(function(){

    var spot = [];
    var h = 0;

    $('.wrap div').each(function(i,e){

        spot.push($(e).offset().top);
        $(e).css('top',spot[i]);
        h += $(e).height();
    });

    $('.wrap').css('height',h);

    $('.wrap div').css({
        'background-attachment':'fixed'
    });

    $(window).scroll(function(){

        var sct = $(this).scrollTop();

        $('.wrap div').each(function(i,e){
            var tt = -1 * sct + spot[i];
            if(spot[i] < sct) tt *= 0.2;

            $(e).css('top',tt)
        })
    })
})
