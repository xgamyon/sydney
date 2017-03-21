<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">

<!-- header -->
<%@ include file="jsp/head.jsp" %>

<body>

    <!-- header -->
    <%@ include file="jsp/header.jsp" %>

    <section>
        <div class="subcont_top">
            <div class="subcont_container">
                <div class="subcont_title">
                    <span>PROJECTS</span>
                </div>
                <div class="breadcrumb">
                    <span>Home</span><span>Projects pagination</span>
                </div>
            </div>
        </div>

        <script type="text/javascript">

            $(window).load(function(){  //$(function(){ 와 같음
                function underimg(){

                    var $tg = $('.subcont_project');
                    var hh = 0;
                    var ww = 0;
                    var total = 0;
                    var item_w = 0;

                    $tg.find('li').each(function(i,e){
                        item_w = $(e).width();
                        $(e).css('left',item_w * i);
                    });

                    var iw = Number(item_w) * $tg.find('li').length;
                    var ea = Math.round($tg.width() / item_w);  //Math.round 반올림

                    for(i=0; i<$tg.find('li').length; i+=ea){
                        var h = $tg.find('li').height();
                        $tg.find('li').slice(i,i+3).css('top',h*hh);
                        hh++;
                        for(j=0;j<ea;j++){
                            $tg.find('li').eq(ww).css('left',item_w *j)
                            ww++
                        }
                    }
                }

                $(window).resize(function(){
                    underimg()   // 리사이즈 되면 작동
                });
                underimg()  // 문서가 불러오면 한번 작동(trigger와 같은 원리)
                $('.subcont_project').height(total);

            });

        </script>



        <div class="subcont_container">
            <div class="subcont_project">
                <ul>
                    <li>
                        <div class="view">
                            <a href="#">VIEW PROJECT<i class="flaticon-arrows"></i></a>
                        </div>
                        <img src="images/projects_image-1.jpg" alt="">
                    </li>
                    <li>
                        <div class="view">
                            <a href="#">VIEW PROJECT<i class="flaticon-arrows"></i></a>
                        </div>
                        <img src="images/projects_image-2.jpg" alt="">
                    </li>
                    <li>
                        <div class="view">
                            <a href="#">VIEW PROJECT<i class="flaticon-arrows"></i></a>
                        </div>
                        <img src="images/projects_image-3.jpg" alt="">
                    </li>
                    <li>
                        <div class="view">
                            <a href="#">VIEW PROJECT<i class="flaticon-arrows"></i></a>
                        </div>
                        <img src="images/projects_image-4.jpg" alt="">
                    </li>
                    <li>
                        <div class="view">
                            <a href="#">VIEW PROJECT<i class="flaticon-arrows"></i></a>
                        </div>
                        <img src="images/projects_image-5.jpg" alt="">
                    </li>
                    <li>
                        <div class="view">
                            <a href="#">VIEW PROJECT<i class="flaticon-arrows"></i></a>
                        </div>
                        <img src="images/projects_image-6.jpg" alt="">
                    </li>
                    <li>
                        <div class="view">
                            <a href="#">VIEW PROJECT<i class="flaticon-arrows"></i></a>
                        </div>
                        <img src="images/projects_image-7.jpg" alt="">
                    </li>
                    <li>
                        <div class="view">
                            <a href="#">VIEW PROJECT<i class="flaticon-arrows"></i></a>
                        </div>
                        <img src="images/projects_image-8.jpg" alt="">
                    </li>
                    <li>
                        <div class="view">
                            <a href="#">VIEW PROJECT<i class="flaticon-arrows"></i></a>
                        </div>
                        <img src="images/projects_image-9.jpg" alt="">
                    </li>
                </ul>
                <div class="subcont_project_btn">
                    <div class="subcont_num_btn">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- footer -->
    <%@ include file="jsp/footer.jsp" %>

</body>
</html>
