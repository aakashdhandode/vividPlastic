import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function ProductSlider() {
    const settings = {
        dots: false,
        autoplay: true,
        arrows: true,
        infinite: false,
        speed: 2000,
        slidesToShow: 3,
        margin: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Container className='pro-slider-icons'>
                <Slider {...settings}>
                    <div className='cases-standard'>
                        <div className="case-item">
                            <div className="case-item-warp">
                                <div className="case-img">
                                     <img src="https://demo.zytheme.com/equita/assets/images/work/full/3.jpg" alt="work Item Image"/>
                                </div>
                                <div className="case-content">
                                    <div className="case-title">
                                        <h4>Drug Delivery Solutions</h4>
                                    </div>
                                    <div className="case-desc">
                                        <p>Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an schedule.</p>
                                    </div>
                                    <div className="case-more"><Link to="/home"><i className="fa fa-arrow-right"></i> explore case study</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cases-standard'>
                        <div className="case-item">
                            <div className="case-item-warp">
                                <div className="case-img"><img src="https://demo.zytheme.com/equita/assets/images/work/full/3.jpg" alt="work Item Image" /></div>
                                <div className="case-content">
                                    <div className="case-title">
                                    <h4>Drug Delivery Solutions</h4>
                                    </div>
                                    <div className="case-desc">
                                        <p>Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an schedule.</p>
                                    </div>
                                    <div className="case-more"><Link to="/home"><i className="fa fa-arrow-right"></i> explore case study</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cases-standard'>
                        <div className="case-item">
                            <div className="case-item-warp">
                                <div className="case-img"><img src="https://demo.zytheme.com/equita/assets/images/work/full/3.jpg" alt="work Item Image" /></div>
                                <div className="case-content">
                                    <div className="case-title">
                                    <h4>Drug Delivery Solutions</h4>
                                    </div>
                                    <div className="case-desc">
                                        <p>Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an schedule.</p>
                                    </div>
                                    <div className="case-more"><Link to="/home"><i className="fa fa-arrow-right"></i> explore case study</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cases-standard'>
                        <div className="case-item">
                            <div className="case-item-warp">
                                <div className="case-img"><img src="https://demo.zytheme.com/equita/assets/images/work/full/3.jpg" alt="work Item Image" /></div>
                                <div className="case-content">
                                    <div className="case-title">
                                    <h4>Drug Delivery Solutions</h4>
                                    </div>
                                    <div className="case-desc">
                                        <p>Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an schedule.</p>
                                    </div>
                                    <div className="case-more"><Link to="/home"><i className="fa fa-arrow-right"></i> explore case study</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cases-standard'>
                        <div className="case-item">
                            <div className="case-item-warp">
                                <div className="case-img"><img src="https://demo.zytheme.com/equita/assets/images/work/full/3.jpg" alt="work Item Image" /></div>
                                <div className="case-content">
                                    <div className="case-title">
                                        <h4>Insulin</h4>
                                    </div>
                                    <div className="case-desc">
                                        <p>Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an schedule.</p>
                                    </div>
                                    <div className="case-more"><Link to="/home"><i className="fa fa-arrow-right"></i> explore case study</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default ProductSlider