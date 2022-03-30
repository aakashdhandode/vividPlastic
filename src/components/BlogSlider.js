import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BlogSlider() {
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
        <div>     <Container className='pro-slider-icons'>
            <Slider {...settings}>
                <div className='blog-sliders'>
                    <Link to="/">
                        <div className="home-tab-product-card">
                            <Image src='https://rstheme.com/products/joomla/reobiz/images/blog5-1.jpg#joomlaImage://local-images/blog5-1.jpg?width=1200&height=670' className="img-fluid" />
                            <div className="blog-text">
                                <h3>Lights winged seasons fish abundantly evening.</h3>
                                <p>Below are the original Latin passages We denounce with righteous indignation and dislike men who...
                                    Below are the original Latin passages We denounce with righteous indignation and dislike men who...</p>
                                <Link>Read More...</Link>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='blog-sliders'>
                    <Link to="/">
                        <div className="home-tab-product-card">
                            <Image src='https://rstheme.com/products/joomla/reobiz/images/blog5-1.jpg#joomlaImage://local-images/blog5-1.jpg?width=1200&height=670' className="img-fluid" />
                            <div className="blog-text">
                                <h3>Lights winged seasons fish abundantly evening.</h3>
                                <p>Below are the original Latin passages We denounce with righteous indignation and dislike men who...
                                    Below are the original Latin passages We denounce with righteous indignation and dislike men who...</p>
                                <Link>Read More...</Link>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='blog-sliders'>
                    <Link to="/">
                        <div className="home-tab-product-card">
                            <Image src='https://rstheme.com/products/joomla/reobiz/images/blog5-1.jpg#joomlaImage://local-images/blog5-1.jpg?width=1200&height=670' className="img-fluid" />
                            <div className="blog-text">
                                <h3>Lights winged seasons fish abundantly evening.</h3>
                                <p>Below are the original Latin passages We denounce with righteous indignation and dislike men who...
                                    Below are the original Latin passages We denounce with righteous indignation and dislike men who...</p>
                                <Link>Read More...</Link>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='blog-sliders'>
                    <Link to="/">
                        <div className="home-tab-product-card">
                            <Image src='https://rstheme.com/products/joomla/reobiz/images/blog5-1.jpg#joomlaImage://local-images/blog5-1.jpg?width=1200&height=670' className="img-fluid" />
                            <div className="blog-text">
                                <h3>Lights winged seasons fish abundantly evening.</h3>
                                <p>Below are the original Latin passages We denounce with righteous indignation and dislike men who...
                                    Below are the original Latin passages We denounce with righteous indignation and dislike men who...</p>
                                <Link>Read More...</Link>
                            </div>
                        </div>
                    </Link>
                </div>
                
            </Slider>
        </Container></div>
    )
}

export default BlogSlider