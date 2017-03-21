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
                    <span>NEWS</span>
                </div>
                <div class="breadcrumb">
                    <span>Home</span><span>Projects pagination</span>
                </div>
            </div>
        </div>
        <div class="subcont_container">
            <div class="subcont_news_1">
                <div class="wrap">
                    <ul>
                        <li>
                            <div class="news_box">
                                <div class="news_img">
                                    <a class="news_tab" href="#">Lifestyle</a>
                                    <img src="images/image-10.jpg" alt="">
                                </div>
                                <i class="flaticon-clock"><span>April 10, 2016</span></i>
                                <cite>How to build a succesfull business in the current market</cite>
                                <span>Lorem ipsum dolor sit amet, consectet ur adipisc ing elit.
                                    Donec nisl urna, porta eu vulputate eu, scelerisque vel turpis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                <a class="more" href="#">READ MORE</a>
                            </div>
                        <li>
                            <div class="news_box">
                                <div class="news_img">
                                    <a class="news_tab" href="#">Research</a>
                                    <img src="images/image-11.jpg" alt="">
                                </div>
                                <i class="flaticon-clock"><span>April 08, 2016</span></i>
                                <cite>Blog post with slider</cite>
                                <span>Etiam id odio vitae magna aliquam tempus. Phasellus
                                    quis nulla malesuada, tristique libero eget, blandit neque.
                                    Pellentesque quis mauris elementum, elementum sapien ac,
                                    dapibus turpis. Aliquam erat volutpat. Proin at accumsan urna,
                                    vitae vulputate leo. Praesent mi mi, pretium eu dictum at,
                                    tempus vitae quam. Vestibulum aliquam justo eu libero lobortis,
                                    in aliquam dolor convallis.</span>
                                <a class="more" href="#">READ MORE</a>
                            </div>
                        </li>
                        <li>
                            <div class="news_box">
                                <span class="folder"><object class='icon_email' data="images/file-folder.svg" type="image/svg+xml"></object>News</span>
                                <i class="flaticon-clock"><span>April 05, 2016</span></i>
                                <cite>Blog post with slider</cite>
                                <span>Etiam id odio vitae magna aliquam tempus. Phasellus
                                    quis nulla malesuada, tristique libero eget, blandit neque.
                                    Pellentesque quis mauris elementum, elementum sapien ac,
                                    dapibus turpis. Aliquam erat volutpat. Proin at accumsan urna,
                                    vitae vulputate leo. Praesent mi mi, pretium eu dictum at,
                                    tempus vitae quam. Vestibulum aliquam justo eu libero lobortis,
                                    in aliquam dolor convallis.</span>
                                <a class="more" href="#">READ MORE</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subcont_news_2">
                <ul>
                    <li>
                        <div class="submemu">
                            <ul>
                                <li><a href="#">Finance & Accounting</a></li>
                                <li><a href="#">Business Consultance</a></li>
                                <li><a href="#">Market Research</a></li>
                                <li><a href="#">SEO & Social Media</a></li>
                                <li><a href="#">Corporate Identity</a></li>
                                <li><a href="#">Uncategorized</a></li>
                            </ul>
                        </div>
                        <div class="search">
                            <form action="" name="search" method="get">
                                <fieldset>
                                    <input type="search" placeholder="Search">
                                    <input type="submit"  value="">
                                </fieldset>
                            </form>
                        </div>
                    </li>
                    <li>
                        <div class="news_latest">
                            <cite>Latest News</cite>
                            <ul>
                                <li>
                                    <img src="images/news-4.jpg" alt="">
                                    <div class="news_latest_cont">
                                        <a href="#"><i class="flaticon-clock"></i>April 10, 2016</a>
                                        <span>How to build a succesfull...</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/news-5.jpg" alt="">
                                    <div class="news_latest_cont">
                                        <a href="#"><i class="flaticon-clock"></i>April 09, 2016</a>
                                        <span>10 Rules for new entrepreneurs</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/news-3.jpg" alt="">
                                    <div class="news_latest_cont">
                                        <a href="#"><i class="flaticon-clock"></i>April 08, 2016</a>
                                        <span>John Doe’s strategy</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="news_cloud">
                            <cite>Tag Cloud</cite>
                            <a href="#">sydney</a>
                            <a href="#">template</a>
                            <a href="#">psd</a>
                            <a href="#">corporate</a>
                            <a href="#">milothemes</a>
                        </div>
                    </li>
                    <li>
                        <div class="news_gallery">
                            <cite>Gallery</cite>
                            <a href="#"><img src="images/gallery1.jpg" alt=""></a>
                            <a href="#"><img src="images/gallery2.jpg" alt=""></a>
                            <a href="#"><img src="images/gallery3.jpg" alt=""></a>
                            <a href="#"><img src="images/gallery4.jpg" alt=""></a>
                            <a href="#"><img src="images/gallery5.jpg" alt=""></a>
                            <a href="#"><img src="images/gallery6.jpg" alt=""></a>
                        </div>
                    </li>
                    <li>
                        <div class="news_widget">
                            <cite>Text Widget</cite>
                            <div class="news_widget_line">
                                <span><strong>Duis ac sem elit. Etiam ac varius nisl,
                                    sed convallis lorem. Fusce non lacus sapien.</strong></span>
                                <span>Phasellus gravida molestie lobortis.
                                    Etiam at mattis arcu, ut volutpat massa.
                                    In commodo felis condim entum ex feugiat tincidunt.</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="subcont_news_3">
                <div class="subcont_num_btn">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                </div>
            </div>
        </div>
    </section>

    <!-- footer -->
    <%@ include file="jsp/footer.jsp" %>

</body>
</html>
