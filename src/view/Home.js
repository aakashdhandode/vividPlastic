import React from 'react';
import Slider from '../components/slider/Slider';
// import '../components/banner/Banner';
import '../assets/css/main.css'
import { Col, Container, Row, Image, Tabs, Tab, Button } from 'react-bootstrap';
import homeabout from "../assets/images/homeabout.jpg";
import '../assets/css/product.css'
import Productone from "../assets/images/productone.jpg";
import Producttwo from "../assets/images/producttwo.jpg";
import Producttree from "../assets/images/producttree.jpg";
import ProductCat from '../components/product/ProductsCat';
import ClientSlider from '../components/clientlogo/ClientSlider';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";
import ProductSlider from '../components/product/ProductSlider';
import AOS from 'aos';
import BlogSlider from '../components/BlogSlider';
AOS.init();
// import Popup from '../components/Popup';

export default function Home() {
    return (
        <div>
            <Slider />
            {/* <Popup /> */}


            <section class="gray-bg small-padding half-bg_dec">
                <div class="hex-bg"><span class="hex hex1"></span><span class="hex hex2"></span><span class="hex hex3"></span></div>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div class="section-title-what">
                                <h4>What We Do</h4>
                                <h2>We Offer Smarter &amp; More Affordable Access To <br /> Construction Services and Equipment. <br /> We Are TheRoof.</h2>
                            </div>
                        </Col>
                        <Col sm={1}></Col>
                        <Col sm={5} >
                            <p>Aiusmod tempor incididunt ut labore sed dolore magna aliquay dnim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea reprehen deritin voluptate.</p>
                            <p>Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Curabitur convallis fringilla diam sed aliquam.</p>
                        </Col>
                        <div class="cards-wrap fl-wrap">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="content-inner fl-wrap">
                                        <div class="content-front">
                                            <div class="cf-inner">
                                                <div class="inner">
                                                    <div class="dec-icon">
                                                        <i class="fal fa-truck-plow"></i>
                                                    </div>
                                                    <h2> Drug Delivery Solutions</h2>
                                                    <p>Advanced disposable and reusable self-injection devices  with
                                                        variable dosing
                                                        and the ability to accommodate high-volume formulations.</p>
                                                </div>
                                                <div class="serv-num">01.</div>
                                            </div>
                                        </div>
                                        <div class="content-back">
                                            <div class="card-back-one card-back-main"></div>
                                            <div class="overlay"></div>
                                            <div class="inner">
                                                <span class="cf-inner_title color-bg">Read more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="content-inner fl-wrap">
                                        <div class="content-front">
                                            <div class="cf-inner">
                                                <div class="inner">
                                                    <div class="dec-icon">
                                                        <i class="fal fa-pencil-ruler"></i>
                                                    </div>
                                                    <h2>Medtech & Industrial</h2>
                                                    <p>Contract manufacturing and engineering services for the production of complex medtech and industrial products.</p>
                                                </div>
                                                <div class="serv-num">02.</div>
                                            </div>
                                        </div>
                                        <div class="content-back">
                                            <div class="card-back-two card-back-main"></div>
                                            <div class="overlay"></div>
                                            <div class="inner">
                                                <span class="cf-inner_title color-bg">Read more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="content-inner fl-wrap">
                                        <div class="content-front">
                                            <div class="cf-inner">
                                                <div class="inner">
                                                    <div class="dec-icon">
                                                        <i class="fal fa-tools"></i>
                                                    </div>
                                                    <h2>Join vivid plastic</h2>
                                                    <p>vivid is a unique place to start an exciting career. An inclusive company, we value diversity in our workforce and the wealth of ideas it brings.</p>
                                                </div>
                                                <div class="serv-num">03.</div>
                                            </div>
                                        </div>
                                        <div class="content-back">
                                            <div class="card-back-tree card-back-main"></div>
                                            <div class="overlay"></div>
                                            <div class="inner">
                                                <span class="cf-inner_title color-bg">Read more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className='offers-section'>
                <Container>
                    <Row>
                        <Col sm={10}>
                            <div className='offers-vivid'>
                                <h2>The Vivid Platics is a one stop solution for a wide range of plastics items Manufacture Company.</h2>

                            </div>
                        </Col>
                        <Col sm={2} className="text-end-btn">
                            <Button className='btn btn-salogn'>Request A Quote</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='home-ab-section home-page'>
                {/* <div class="sq-secdec"></div> */}
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="about-title fl-wrap">
                                <h4>Our Story</h4>
                                <h2 class="con-heading">Who we are</h2>
                            </div>
                            <div class="about-wrap">
                                <p>Aliquam luctus tempor orci sit amet finibus. Duis porttitor, ex ac molestie consectetur, metus tellus venenatis velit, et interdum enim lorem a purus. Fusce scelerisque, massa vitae rhoncus elementum, enim acinia pharetra? </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. </p>
                                <a href="about.html" class="btn float-btn"><i class="fas fa-caret-right"></i><span>Read More About Us</span></a>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-6">
                            <div class="about-img fl-wrap">
                                {/* <img src="file:///D:/xampp/htdocs/help/images/folio/6.jpg" class="respimg" alt="" /> */}
                                <Image src="https://img.healthcarepackaging.com/files/base/pmmi/all/image/2014/07/hp_26149_gerrisheimer1.png?auto=format%2Ccompress&q=70&w=700" className='about-imgg' />
                                <div class="about-img-title ait_2 color-bg">Vivid Plastic</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

           <section class="gray-bg  ">
                <div class="hex-bg"><span class="hex hex1"></span><span class="hex hex2"></span><span class="hex hex3"></span></div>
                <div class="hex-bg hex-bg2"><span class="hex hex1"></span><span class="hex hex2"></span><span class="hex hex3"></span></div>                <Container>
                    <Row>
                        <Col sm={4}>
                            <div class="section-title-why align-text">
                                <h4>What said about us</h4>
                                <h2>Why Choose Us</h2>
                                <div class="st-text fl-wrap">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero.</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <Row>
                                <div class="col-md-6">
                                    <div class="card-item fl-wrap">
                                        <i class="fal fa-wind-turbine"></i>
                                        <span class="card-item_num">01.</span>
                                        <h4>Green Energy</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                                <Col sm={6}>
                                    <div class="card-item fl-wrap">
                                        <i class="fal fa-microchip"></i>
                                        <span class="card-item_num">02.</span>
                                        <h4>New Technology</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div class="card-item fl-wrap">
                                        <i class="fal fa-tools"></i>
                                        <span class="card-item_num">03.</span>
                                        <h4>High Grade Tools</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div class="card-item fl-wrap">
                                        <i class="fal fa-user-hard-hat"></i>
                                        <span class="card-item_num">04.</span>
                                        <h4>Professional workers</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='product-sliders-padding'>
                <Container className="container-padding">
                    <Row>
                        <Col sm={3} className="service-title">
                            <h4>Our Products</h4>
                        </Col>
                        <Col sm={7}>
                            <p className='our-pro-text'> With Esteemed Quality certifications from Water Quality and focus on Safety
                                and Environment MAnagement Systems, vivid is committed to maintain the highest
                                standards for Environment.</p>
                        </Col>
                        <Col sm={2}>
                            <div className='se-more-m'><Link to="/clients" className='more-client-btn'>
                                See More</Link></div>
                        </Col>
                    </Row>
                    <div>
                        <ProductSlider />
                    </div>
                </Container>
            </section>

            {/* end our product tabs section */}
            <ClientSlider />

            <section className='blogs-section pt-4 pb-4'>
                <Container>
                    <div className='section-title text-center'>
                        <h1>Read Latest Updates</h1>
                        <p> With Esteemed Quality certifications from Water Quality and focus on Safety
                            and Environment MAnagement Systems, vivid plastic is committed to maintain the highest
                            standards for Health, Saftey and Environment.</p>
                    </div>
                    <BlogSlider />
                </Container>
            </section>


            {/* <ContactForm /> */}
        </div>
    );
}
