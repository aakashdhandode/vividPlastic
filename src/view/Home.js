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
import BlogSlider from '../components/BlogSlider';
// import Popup from '../components/Popup';

export default function Home() {
    return (
        <div>
            <Slider />
            {/* <Popup /> */}


            <section className="gray-bg small-padding half-bg_dec">
                <div className="hex-bg"><span className="hex hex1"></span><span className="hex hex2"></span><span className="hex hex3"></span></div>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className="section-title-what">
                                <h4>What We Do</h4>
                                <h2>We Offer Smarter &amp; More Affordable Access To <br /> Construction Services and Equipment. <br /> We Are TheRoof.</h2>
                            </div>
                        </Col>
                        <Col sm={1}></Col>
                        <Col sm={5} >
                            <p>Aiusmod tempor incididunt ut labore sed dolore magna aliquay dnim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea reprehen deritin voluptate.</p>
                            <p>Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Curabitur convallis fringilla diam sed aliquam.</p>
                        </Col>
                        <div className="cards-wrap fl-wrap">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="content-inner fl-wrap">
                                        <div className="content-front">
                                            <div className="cf-inner">
                                                <div className="inner">
                                                    <div className="dec-icon">
                                                        <i className="fal fa-truck-plow"></i>
                                                    </div>
                                                    <h2> Drug Delivery Solutions</h2>
                                                    <p>Advanced disposable and reusable self-injection devices  with
                                                        variable dosing
                                                        and the ability to accommodate high-volume formulations.</p>
                                                </div>
                                                <div className="serv-num">01.</div>
                                            </div>
                                        </div>
                                        <div className="content-back">
                                            <div className="card-back-one card-back-main"></div>
                                            <div className="overlay"></div>
                                            <div className="inner">
                                                <span className="cf-inner_title color-bg">Read more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="content-inner fl-wrap">
                                        <div className="content-front">
                                            <div className="cf-inner">
                                                <div className="inner">
                                                    <div className="dec-icon">
                                                        <i className="fal fa-pencil-ruler"></i>
                                                    </div>
                                                    <h2>Medtech & Industrial</h2>
                                                    <p>Contract manufacturing and engineering services for the production of complex medtech and industrial products.</p>
                                                </div>
                                                <div className="serv-num">02.</div>
                                            </div>
                                        </div>
                                        <div className="content-back">
                                            <div className="card-back-two card-back-main"></div>
                                            <div className="overlay"></div>
                                            <div className="inner">
                                                <span className="cf-inner_title color-bg">Read more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="content-inner fl-wrap">
                                        <div className="content-front">
                                            <div className="cf-inner">
                                                <div className="inner">
                                                    <div className="dec-icon">
                                                        <i className="fal fa-tools"></i>
                                                    </div>
                                                    <h2>Join vivid plastic</h2>
                                                    <p>vivid is a unique place to start an exciting career. An inclusive company, we value diversity in our workforce and the wealth of ideas it brings.</p>
                                                </div>
                                                <div className="serv-num">03.</div>
                                            </div>
                                        </div>
                                        <div className="content-back">
                                            <div className="card-back-tree card-back-main"></div>
                                            <div className="overlay"></div>
                                            <div className="inner">
                                                <span className="cf-inner_title color-bg">Read more</span>
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
                {/* <div className="sq-secdec"></div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="about-title fl-wrap">
                                <h4>Our Story</h4>
                                <h2 className="con-heading">Who we are</h2>
                            </div>
                            <div className="about-wrap">
                                <p>Aliquam luctus tempor orci sit amet finibus. Duis porttitor, ex ac molestie consectetur, metus tellus venenatis velit, et interdum enim lorem a purus. Fusce scelerisque, massa vitae rhoncus elementum, enim acinia pharetra? </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. </p>
                                <Link to="/" className="btn float-btn"><i className="fas fa-caret-right"></i><span>Read More About Us</span></Link>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <div className="about-img fl-wrap">
                                {/* <img src="file:///D:/xampp/htdocs/help/images/folio/6.jpg" className="respimg" alt="" /> */}
                                <Image src="https://img.healthcarepackaging.com/files/base/pmmi/all/image/2014/07/hp_26149_gerrisheimer1.png?auto=format%2Ccompress&q=70&w=700" className='about-imgg' />
                                <div className="about-img-title ait_2 color-bg">Vivid Plastic</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

           <section className="gray-bg  ">
                <div className="hex-bg"><span className="hex hex1"></span><span className="hex hex2"></span><span className="hex hex3"></span></div>
                <div className="hex-bg hex-bg2"><span className="hex hex1"></span><span className="hex hex2"></span><span className="hex hex3"></span></div>                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className="section-title-why align-text">
                                <h4>What said about us</h4>
                                <h2>Why Choose Us</h2>
                                <div className="st-text fl-wrap">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero.</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <Row>
                                <div className="col-md-6">
                                    <div className="card-item fl-wrap">
                                        <i className="fal fa-wind-turbine"></i>
                                        <span className="card-item_num">01.</span>
                                        <h4>Green Energy</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                                <Col sm={6}>
                                    <div className="card-item fl-wrap">
                                        <i className="fal fa-microchip"></i>
                                        <span className="card-item_num">02.</span>
                                        <h4>New Technology</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="card-item fl-wrap">
                                        <i className="fal fa-tools"></i>
                                        <span className="card-item_num">03.</span>
                                        <h4>High Grade Tools</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="card-item fl-wrap">
                                        <i className="fal fa-user-hard-hat"></i>
                                        <span className="card-item_num">04.</span>
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
