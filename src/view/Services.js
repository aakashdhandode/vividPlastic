import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import serviceone from "../assets/images/avimg.jpg";
import serviceimgtwo from "../assets/images/avimg2.jpg";
import { Link } from "react-router-dom";
import ClientSlider from '../components/clientlogo/ClientSlider';

export default function Services() {
    return (
        <>


            <section className='product-page-sub'>
                <Container>
                    <div className='pro-discription'>
                        <h3>Services</h3>
                        <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
                    </div>
                </Container>
            </section>


            <section>
                <div class="rs-services main-home services-style1 gray-bg3">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mb-65">
                                <div class="services-item">
                                    <div class="services-icon">
                                    <Image src={require('../assets/images/oo.png')} alt="web" className='img-fluid' />
                                    </div>
                                    <div class="services-text">
                                        <h2 class="title">Functional Plastic</h2>
                                        <p class="services-txt"> Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac
                                         nibh luctus consulting.</p>
                                        <div class="serial-number">
                                            01
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-65">
                                <div class="services-item">
                                    <div class="services-icon">
                                    <Image src={require('../assets/images/1.png')} alt="web" className='img-fluid' />
                                    </div>
                                    <div class="services-text">
                                        <h2 class="title">Resources & Advanced Materials</h2>
                                        <p class="services-txt"> Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus consulting.</p>
                                        <div class="serial-number">
                                            02
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-65">
                                <div class="services-item">
                                    <div class="services-icon">
                                    <Image src={require('../assets/images/3.png')} alt="web" className='img-fluid' />
                                    </div>
                                    <div class="services-text">
                                        <h2 class="title">Metals</h2>
                                        <p class="services-txt"> Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus consulting.</p>
                                        <div class="serial-number">
                                            03
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 md-mb-65">
                                <div class="services-item">
                                    <div class="services-icon">
                                    <Image src={require('../assets/images/4.png')} alt="web" className='img-fluid' />
                                    </div>
                                    <div class="services-text">
                                        <h2 class="title">Electronic Materials</h2>
                                        <p class="services-txt"> Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus consulting.</p>
                                        <div class="serial-number">
                                            04
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 sm-mb-65">
                                <div class="services-item">
                                    <div class="services-icon">
                                    <Image src={require('../assets/images/5.png')} alt="web" className='img-fluid' />
                                    </div>
                                    <div class="services-text">
                                        <h2 class="title">New Business Development</h2>
                                        <p class="services-txt"> Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus consulting.</p>
                                        <div class="serial-number">
                                            05
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="services-item">
                                    <div class="services-icon">
                                    <Image src={require('../assets/images/6.png')} alt="web" className='img-fluid' />
                                    </div>
                                    <div class="services-text">
                                        <h2 class="title">Product Design</h2>
                                        <p class="services-txt"> Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus consulting.</p>
                                        <div class="serial-number">
                                            06
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <section className='main-service-box'>
                <Container>
                    <Row>
                        <Col sm={6} className='service-containt'>
                            <h2>Operation and Maintenance of STP-ETP</h2>
                            <p>Green Aqua undertakes operation &amp; maintenance, annual maintenance contracts for all WATER AND WASTE
                                WATER TREATMENT PLANTS Which includes STp, ETp, RO plants, Desalination plants, water softeners etc.
                                We have vast experience in providing AMC, Operation &amp; Maintenance Services for Effluent and Sewage
                                treatments (E.T.P./S.T.P), Water treatment plats( ETP) to many industries, govt.sectors, residential
                                colonies etc.
                                Our maintenace staff are well versed with operating and maintenance procedures of the plants.
                                Our services are available round the clock for operation, break down service .</p>
                            <ul>
                                <li>We charge optimum</li>
                                <li>We serve 365/24/7</li>
                                <li>Maintenace of records for accurate results</li>
                                <li>Expert professionals to take care of each problem</li>
                            </ul>
                        </Col>
                        <Col sm={6} className="p-0">
                            <img src={serviceone} className="img-fluid service-containt-img" alt="greenaqua" />
                        </Col>
                        <Col sm={6} className="p-0">
                            <img src={serviceimgtwo} className="img-fluid service-containt-img" alt="greenaqua" />
                        </Col>
                        <Col sm={6} className='service-containt'>
                            <h2>Operation and Maintenance of STP-ETP</h2>
                            <p>Green Aqua undertakes operation &amp; maintenance, annual maintenance contracts for all WATER AND WASTE
                                WATER TREATMENT PLANTS Which includes STp, ETp, RO plants, Desalination plants, water softeners etc.
                                We have vast experience in providing AMC, Operation &amp; Maintenance Services for Effluent and Sewage
                                treatments (E.T.P./S.T.P), Water treatment plats( ETP) to many industries, govt.sectors, residential
                                colonies etc.
                                Our maintenace staff are well versed with operating and maintenance procedures of the plants.
                                Our services are available round the clock for operation, break down service .</p>
                            <ul>
                                <li>We charge optimum</li>
                                <li>We serve 365/24/7</li>
                                <li>Maintenace of records for accurate results</li>
                                <li>Expert professionals to take care of each problem</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="footer-contact">
                <Container>
                    <Row>
                        <Col sm={7} className="border-rightw">
                            <Row>
                                <Col lg={2} xs={3} className="text-center">
                                    <Image src={require('../assets/images/f2.png')} className='img-fluid margni-ft-img' />
                                </Col>
                                <Col lg={9} xs={9} className="footer-section-containt">
                                    <h1>We Help Industry To Utilize The Heavy Equipment Work Better</h1>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={5}>
                            <Row>
                                <Col lg={7} xs={7} className='mobile-side-padding'>
                                    <Row>
                                        <Col lg={2} xs={2} className="phone-icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </Col>
                                        <Col lg={10} xs={10} className="footer-number">
                                            <p>contact us now</p>
                                            <h1>040-23323333</h1>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={5} xs={5} className="get-btn">
                                    <Link to="" className="get-started-btn">GET STARTED</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section> */}



        </>
    );
}
