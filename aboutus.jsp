<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>:::: minseok portfolio ::::</title>
    <link rel="stylesheet" type="text/css" href="font/flaticon.css">
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <link rel="stylesheet" href="css/mobile.css" type="text/css">
    <link rel="stylesheet" href="css/sub.css" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/mainbanner.js"></script>
    <!-- bx슬라이드 배너 -->
    <link href="css/jquery.bxslider.css" rel="stylesheet" />
    <script src="js/jquery.bxslider.js"></script>
</head>
<body>

    <!-- header -->
    <%@ include file="jsp/header.jsp" %>

    <section>
        <div class="subcont_top">
            <div class="subcont_container">
                <div class="subcont_title">
                    <span>ABOUT US</span>
                </div>
                <div class="breadcrumb">
                    <span>Home</span><span>About</span><span>About us</span>
                </div>
            </div>
        </div>
        <div class="subcont_container">
            <div class="cont_title">
                <h2>WHAT ARE WE ABOUT</h2>
                <span>discover us</span>
            </div>
            <div class="subcont_aboutus_1">
                <ul>
                    <li>
                        <div class="wrap">
                            <cite>Company Identity</cite>
                            <span>Lorem ipsum dolor sit amet,
                                consectet ur adipiscing elit.
                                Donec nisl urna, porta eu vulputate eu,
                                duis unde vel turpis. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit.
                                Donec nisl urna, porta eu vulputate eu,
                                scelerisque vel turpis. Nullam et quam
                                justo. Suspen disse consequat velit
                                finibus, vehicula. Lorem ipsum dolor sit
                                amet, consectetur.</span>
                        </div>
                    </li>
                    <li>
                        <div class="wrap">
                            <cite>Short History</cite>
                            <span>Quisque a ipsum nunc. Morbi pellentesque,
                                purus vel tristique vulputate, riasus nisl
                                scelerisque arcu, id facilisis tellus ipsum
                                a purus. Fusce dictum enim sit amet leo
                                convallis, vel suscipit sem placerat.<br/><br/>
                                Aenean eget mi mollis, sagittis purus sit amet,
                                cursus nisi. Mergers and acquisitions.</span>
                        </div>
                    </li>
                    <li>
                        <div class="submemu">
                            <ul>
                                <li><a href="#">About Our Company</a></li>
                                <li><a href="#">Company History</a></li>
                                <li><a href="#">Careers - Find a job</a></li>
                                <li><a href="#">Our Parteners</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="subcont_aboutus_2">
                <div class="aboutus_2_title">
                    <h3>Get an life ensurance to protect your family.</h3>
                    <div class="bt">
                        <a href="#">Get insured</a>
                    </div>
                </div>
            </div>
            <div class="subcont_aboutus_3">
                <ul>
                    <li>
                        <div class="wrap bg_04142b">
                            <div class="align">
                                <cite>Let us help you</cite>
                                <span>Quisque a ipsum nunc. Morbi pellen tesque,
                                    purus vel duis sed ipsum amet, risus nisl
                                    scele risque arcu, id facilisis tellus ipsum
                                    a purus. Fusce dictum enim sit amet leo
                                    convallis.</span>
                                <div class="bt">
                                    <a href="#">Contact us</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="wrap">
                            <img src="images/image-5.jpg" alt="">
                            <span>Lorem ipsum dolor sit amet, consectet
                                ur adipiscing elit. Donec nisl urna,
                                porta eu vulputate eu, scelerisque vel
                                turpis. Lorem ipsum dolor sit.</span>
                            <div class="name">
                                <h3>Paul Smith</h3>
                                <h4>CEO &amp; Partner</h4>
                                <span>Hartmann Corporation</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="wrap bd_c8bba1">
                            <div class="align">
                                <cite>Our clients ratings <p>recommend us</p></cite>
                                <span>Quisque a ipsum nunc. Morbi pe llentesque,
                                    purus vel trist ique vul putate, risus
                                    nisl duis unde ipsum amet sed.</span>
                                <div class="star"></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <div class="subcont_aboutus_4">
        <div class="main_img_bg"></div>
        <div class="aboutus_4_banner">
            <span>We provide the best Consulting Services</span>
        </div>
    </div>
    <section>
        <div class="subcont_container">
            <div class="cont_title">
                <h2>WHAT ARE WE ABOUT</h2>
                <span>discover us</span>
            </div>
            <div class="subcont_aboutus_2">
                <div class="aboutus_2_title">
                    <h3>Get an life ensurance to protect your family.</h3>
                    <div class="bt">
                        <a href="#">Get insured</a>
                    </div>
                </div>
            </div>
    </section>

    <!-- footer -->
    <%@ include file="jsp/footer.jsp" %>

</body>
</html>
