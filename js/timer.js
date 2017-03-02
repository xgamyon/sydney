function numberCounter(target_frame, target_number, interval) {
    this.count = 0;
    this.diff = 0;
    this.target_count = parseInt(target_number);//목표치
    this.target_frame = document.getElementById(target_frame);//목표치를 출력할 태그 아이디
    this.timer = null;
    this.interval = interval;
    this.counter();
};

numberCounter.prototype.counter = function() {
    var self = this;
    this.diff = this.target_count - this.count; //2000

    if(this.diff > 0) { //목표치 도달할때까지 count 변수에 5/1000 증가
        // self.count ++ // 0 부터 진행
        self.count += Math.ceil(this.diff / 100);
    }
    this.target_frame.innerHTML = this.count.toString();

    if(this.count < this.target_count) {
        this.timer = setTimeout(function() { self.counter(); }, self.interval);
    } else {
        clearTimeout(this.timer);//타이머 제거
    }
};

var show = true;  // 처음 한번만 실행하기 위해 만든 변수
$(function(){

    $(window).scroll(function(){
        var top = $('.science').offset().top;
        var scrtop = $(window).scrollTop()+380;

        if(top < scrtop){
            if(show == true){
                new numberCounter("timer1", 325, 8);
                new numberCounter("timer2", 18, 100);
                new numberCounter("timer3", 1139, 5);
                new numberCounter("timer4", 59, 30);
                show = false;
            }
        }
    })
})
