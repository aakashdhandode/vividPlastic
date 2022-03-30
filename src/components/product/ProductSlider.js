import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Col, Container, Row, Image } from 'react-bootstrap';



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
                        <div class="case-item">
                            <div class="case-item-warp">
                                <div class="case-img">
                                     <img src="https://demo.zytheme.com/equita/assets/images/work/full/3.jpg" alt="work Item Image"/>
                                </div>
                                <div class="case-content">
                                    <div class="case-title">
                                        <h4>Drug Delivery Solutions</h4>
                                    </div>
                                    <div class="case-desc">
                                        <p>Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an schedule.</p>
                                    </div>
                                    <div class="case-more"><a href="case-study-single.html"><i class="fa fa-arrow-right"></i> explore case study</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cases-standard'>
                        <div class="case-item">
                            <div class="case-item-warp">
                                <div class="case-img"><img src="https://demo.zytheme.com/equita/assets/images/work/full/3.jpg" alt="work Item Image" /></div>
                                <div class="case-content">
                                    <div class="case-title">
                                    <h4>Drug Delivery Solutions</h4>
                                    </div>
                                    <div class="case-desc">
                                        <p>Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an schedule.</p>
                                    </div>
                                    <div class="case-more"><a href="case-study-single.html"><i class="fa fa-arrow-right"></i> explore case study</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cases-standard'>
                        <div class="case-item">
                            <div class="case-item-warp">
                                <div class="case-img"><img src="https://demo.zytheme.com/equita/assets/images/work/full/3.jpg" alt="work Item Image" /></div>
                                <div class="case-content">
                                    <div class="case-title">
                                    <h4>Drug Delivery Solutions</h4>
                                    </div>
                                    <div class="case-desc">
                                        <p>Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an schedule.</p>
                                    </div>
                                    <div class="case-more"><a href="case-study-single.html"><i class="fa fa-arrow-right"></i> explore case study</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cases-standard'>
                        <div class="case-item">
                            <div class="case-item-warp">
                                <div class="case-img"><img src="https://demo.zytheme.com/equita/assets/images/work/full/3.jpg" alt="work Item Image" /></div>
                                <div class="case-content">
                                    <div class="case-title">
                                    <h4>Drug Delivery Solutions</h4>
                                    </div>
                                    <div class="case-desc">
                                        <p>Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an schedule.</p>
                                    </div>
                                    <div class="case-more"><a href="case-study-single.html"><i class="fa fa-arrow-right"></i> explore case study</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cases-standard'>
                        <div class="case-item">
                            <div class="case-item-warp">
                                <div class="case-img"><img src="https://demo.zytheme.com/equita/assets/images/work/full/3.jpg" alt="work Item Image" /></div>
                                <div class="case-content">
                                    <div class="case-title">
                                        <h4>Insulin</h4>
                                    </div>
                                    <div class="case-desc">
                                        <p>Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an schedule.</p>
                                    </div>
                                    <div class="case-more"><a href="case-study-single.html"><i class="fa fa-arrow-right"></i> explore case study</a></div>
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