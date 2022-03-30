import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import banner2 from "../../assets/images/banner/banner13.jpg";
import banner1 from "../../assets/images/banner/banner1.jpg";
import "./banner.css";
import axios from 'axios';
// y


export default function Banner() {

  const settings = {
    dots: false,
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="main-slider ">

        <Slider {...settings}>
          {/* <div className="banner-slider">
              <div className="banner-img">
                <img src="https://www.recipharm.com/sites/recipharm-corp/files/recipharm/drug-delivery-devices/injection-devices/injection-devices.jpg" className="img-fluid" alt="images" />
              </div>          
          </div> */}
          {/* <div className="banner-slider">
              <div className="banner-img">
                <img src="https://www.shl-medical.com/wp-content/uploads/2020/09/2020-PODD-NewsPage.jpg" className="img-fluid" alt="sap" />
              </div>
            </div> */}
            <div className="banner-slider">
            <div className="item">
            <img src={banner1} className="img-fluid" alt="sap" />
              <div className="cover">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="header-content">
                        <h2>Auto Injectors, Pen Injectors and Inhaler Systems</h2>
                        <h4>Vivid is a world-leading solution provider in design, development, and manufacturing of advanced drug delivery systems.</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="banner-slider">
            <div className="item">
              <img src={banner2} className="img-fluid" alt="sap" />
              <div className="cover">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="header-content">
                        <h2>Auto Injectors, Pen Injectors and Inhaler Systems</h2>
                        <h4>Vivid is a world-leading solution provider in design, development, and manufacturing of advanced drug delivery systems.</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
         
        </Slider>
      </section>

      {/* 
      <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div className='item'>
        <h4>1</h4>
    </div>
    <div className='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
    <div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
</OwlCarousel>; */}
    </>
  );
}
