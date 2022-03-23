import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import banner1 from "../../assets/images/banner/slider1.jpg";
import banner2 from "../../assets/images/banner/slider11.jpg";
import banner3 from "../../assets/images/banner/slider3.jpg";
import "./banner.css";
import axios from 'axios';

export default function Banner() {
  // const [banner, setBanner] = useState([]);
  // useEffect(() => {
  // fetchBanner();
  // }, []);
  // const fetchBanner = () => {
  // axios
  //     .get('/api/ga/banners')
  //     .then((res) => {
  //     setBanner(res.data.data);
  //     })
  //     .catch((err) => {
  //     console.log(err);
  //     });
  // };
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
        {/* <Slider {...settings}>
                    {banner.map((image) => (
                        <div className="banner-slider" key={image.id}>
                            <div className="banner-img">
                               <img src={'http://127.0.0.1:8000/'+image.thumb} alt='greenAqua' />
                             </div>
                        </div>
                        ))}
          </Slider> */}
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
              <div className="banner-img">
                <img src={banner2} className="img-fluid" alt="sap" />
              </div>
            </div>
        </Slider>
      </section>
    </>
  );
}
