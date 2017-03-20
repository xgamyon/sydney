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
                    <span>CONTACT</span>
                </div>
                <div class="breadcrumb">
                    <span>Home</span><span>Contact</span>
                </div>
            </div>
        </div>
        <div class="subcont_container">
            <div class="subcont_contact_1">
                <ul>
                    <li>
                        <div class="contact_1">
                            <cite>Main Office</cite>
                            <span>Duis ac sem elit. Etiam ac varius nisl,
                                sed convallis lorem. Fusce non lacus sapien.
                                Phasellus gravida mol estie lobortis.
                                Etiam at mattis arcu.</span>
                            <div class="address">
                                <span><i class="flaticon-location"></i>4124 Barnes Street, Sanford, FL 32771</span>
                                <span><i class="flaticon-technology"></i>407-322-2171</span>
                                <span><object class="icon_email"  data="images/email.svg" type="image/svg+xml"></object>contact@sydney.com</span>
                            </div>
                            <div class="icon_btn">
                                <a href="#"><i class="flaticon-pinterest-logo"></i></a>
                                <a href="#"><i class="flaticon-social"></i></a>
                                <a href="#"><i class="flaticon-instagram-logo"></i></a>
                                <a href="#"><i class="flaticon-facebook-logo"></i></a>
                                <a href="#"><i class="flaticon-twitter"></i></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="contact_2">
                            <div class="icon_contact"><i class="flaticon-location"></i></div>
                            <img src="images/contact_1.jpg" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="wrap bg_04142b">
                            <div class="icon_contact"><i class="flaticon-technology"></i></div>
                            <div class="align">
                                <cite>Let us help you</cite>
                                <span class="contact_text1">CALL NOW</span>
                                <span class="contact_text2">1 - 322 - <span class="c8bba1">SYDNEY</span> - 2171</span>
                                <span>Quisque a ipsum nunc. Morbi pellen tesque,
                                    purus vel duis sed ipsum amet, risus nisl
                                    scele risque arcu, id facilisis tellus ipsum
                                    a purus. Fusce dictum enim sit amet leo
                                    convallis.</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="subcont_contact_2">
                <ul>
                    <li>
                        <div class="send">
                            <cite>Send a quick message</cite>
                            <div class="send_name">
                                <form action="" name="name" method="get">
                                    <input type="text" placeholder="Name*">
                                </form>
                            </div>
                            <div class="send_email">
                                <form action="" name="email" method="get">
                                    <input type="email" placeholder="E-mail*">
                                </form>
                            </div>
                            <div class="send_subject">
                                <form action="" name="subject" method="get">
                                    <input type="text" placeholder="Subject*">
                                </form>
                            </div>
                            <textarea class="send_message" name="message" placeholder="Message*"></textarea>
                            <div class="bt">
                                <a href="#">Submit</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="advisier">
                            <cite>Get in Touch with an advisier</cite>
                            <ul>
                                <li>
                                    <img src="images/contact_2.jpg" alt="">
                                    <div class="advisier_cont">
                                        <span class="name">PAUL SMITH</span>
                                        <span>Advisier</span>
                                        <a href="#"><object class="icon_email" data="images/email.svg" type="image/svg+xml"></object>paulsmith@sydney.com</a>
                                        <a href="#"><i class="flaticon-technology"></i>+456 347 53433</a>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/contact_3.jpg" alt="">
                                    <div class="advisier_cont">
                                        <span class="name">JAMES WILLIAMS</span>
                                        <span>Advisier</span>
                                        <a href="#"><object class="icon_email" data="images/email.svg" type="image/svg+xml"></object>jameswilliams@sydney.com</a>
                                        <a href="#"><i class="flaticon-technology"></i>+456 125 53175</a>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/contact_4.jpg" alt="">
                                    <div class="advisier_cont">
                                        <span class="name">PAUL SMITH</span>
                                        <span>Advisier</span>
                                        <a href="#"><object class="icon_email" data="images/email.svg" type="image/svg+xml"></object>craigsmall@sydney.com</a>
                                        <a href="#"><i class="flaticon-technology"></i>+456 214 54185</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <div class="subcont_contact_banner">
        <div class="main_img_bg"></div>
        <div class="contact_banner">
            <div class="banner_wrap">
                <ul>
                    <li>
                        <span>NEW YORK</span>
                        <span><object class="icon_email" data="images/email.svg" type="image/svg+xml"></object>craigsmall@sydney.com</span>
                        <span><i class="flaticon-technology"></i>+456 214 54185</span>
                        <span><i class="flaticon-technology"></i>+456 214 54185</span>
                    </li>
                    <li>123</li>
                    <li>123</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- footer -->
    <%@ include file="jsp/footer.jsp" %>

</body>
</html>
