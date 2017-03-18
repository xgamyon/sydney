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

            $(function(){
                var $tg = $('.subcont_project');

                $(window).resize(function(){
                var item_w = 0;

                    $tg.find('li').each(function(i,e){
                        item_w = $(e).width();
                        $(e).css('left',item_w * i);
                    });

                    var iw = Number(item_w) * $tg.find('li').length;

                    var ea = Math.round($tg.width() / item_w);  //Math.round 반올림

                    for(i=0, j=0; i<$tg.find('li').length; i+=ea,j++){
                        // console.log(j)
                        $tg.find('li:gt('+i+')').css({
                            'top': $tg.find('li').height()*j,
                            'left': $tg.find('li:lt('+j+')').width()
                        })
                    }
                });
                $(window).trigger('resize');
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
            </div>
        </div>
    </section>

    <!-- footer -->
    <%@ include file="jsp/footer.jsp" %>

</body>
</html>
