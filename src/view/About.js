import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineAim } from "react-icons/ai";


export default function About() {
  return (
    <>
      <section className='product-page-sub'>
        <Container>
          <div className='pro-discription'>
            <h3>About Us</h3>
            <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
          </div>
        </Container>
      </section>

      {/* main About us */}
      {/* <section className='about-section-page'>
      <Container>
          <Row>
            <Col sm={6}>
            <Image  src={require('../assets/images/watee.jpg')} className='about-imgg'/>
            </Col>
            <Col sm={6}>
            <div className='offers-containt'>
                <h3>Welcome to Green Aqua Enviro Projects Private Limited, Hyderabad, India.</h3>
                <p>Green Aqua is a young and dynamic Company in the business of providing complete water treatment solutions. Our brand-Green Aqua is one of the leading companies in india offering a comprehensive set of Water & Waste Water Treatment Solutions. At green Aqua, we uniquely positioned to offer our clients one stop & integrated solutions for household, institutional, commercial, industrial and public water water supplies by leveraging our experties across various technologies.
                  Green Aqua consists a team of Technical Engineers who have experience in pure drinking water to waste Water
                  treatmantsolutions and related services. We started to serve the needs of safe drinking water to
                  industrial porcess water and also to recycle the waste water. The main aim of the Company is to give 
                  an ultimate solution to the customers by quality products and service.
                </p>
            </div>
            </Col>
          </Row>
      </Container>
    </section> */}

      {/* <section className='about-sections'>
        <div class="rs-about style2 pt-100 pb-100 md-pt-70 md-pb-70">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 pr-33 md-pr-15 md-mb-50">
                <div class="images-part">
                  <Image  src={require('../assets/images/about-3.png')} className='about-imgg'/>
                </div>
              </div>
              <div class="col-lg-6 ">
                <div class="sec-title">
                  <h2 class="title pb-22">
                    We help to implement your ideas into automation
                  </h2>
                  <span class="sub-text big">We donec pulvinar magna id leoersi pellentesque impered dignissim rhoncus euismod euismod eros vitae best consulting &amp; financial services theme .</span>

                  <p class="margin-0 pt-15">Business ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum is not estibulum dignity sim posuere cubilia durae. Leo sit met entum cubilia crae. At vero eos accusamus et iusto odio dignissimos provident.
                  
                  </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus nulla, similique perferendis exercitationem hic, qui esse error magnam architecto eligendi, saepe veritatis consequatur quaerat numquam sit quod earum molestias!</p>
               
                </div>
              </div>
            </div>
          </div>
          <div class="rs-animation">
            <div class="animate-style">
              <Image  src={require('../assets/images/tri-circle-1.png')} className='scale'/>
            </div>
          </div>
        </div>
      </section> */}



      <section class="about about-2 about-5" id="about-5">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-5">
              <div class="heading heading-9">
                <p class="heading-subtitle">Providing Full Range Of Transportation Worldwide.</p>
                <h2 class="heading-title">Reliable Logistic Solutions Saves Your Time!</h2>
              </div>
              <div class="about-block">
                <div class="block-left">
                  <p>Equita Group is a representative logistics operator providing full range of service in the sphere of customs clearance transportation worldwide for any cargo</p>
                  <p>We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and combined with experience through integrated supply chain solutions!</p>
                </div>
              </div>
              <div class="signature-block">
                <div class="signature-body">
                  <h6>john peter</h6>
                  <p>founder</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6 offset-lg-1">
              <div class="about-img abput-img-text">
                <div class="about-img-warp bg-section">

                </div>
                <div class="about-card">
                  <h6>Flexibile, Improved &amp; Accelerated Solutions!</h6>
                  <p>Providing full range of service in the sphere transportation worldwide.</p><Link to='/contact'><i class="fa fa-arrow-right"></i> Contact</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section class="counters bg-section">

        <div class="container">
          <div class="heading heading-light heading-10">
            <div class="row">
              <div class="col-12 col-lg-5">
                <h2 class="heading-title">
                  Individually Assess <br />Each Plan And Offer <br />Optimal Solutions!</h2><a class="btn btn--transparent btn--inverse" href="javascript:void(0)">our services</a>
              </div>
              <div class="col-12 col-lg-6 offset-lg-1">
                <p class="heading-desc">Skilled personnel, utilising communications, tracking processing software, combined with decades of experience! Through an integrated supply chain solutions, Equita drives sustainable competitive advantages to some of Australia's largest companies.</p>
                <div class="counters-container">
                  <div class="counter counter-2">
                    <div class="counter-icon"> <i class="fa fa-thumbs-up"></i></div>
                    <div class="counter-num"> <span class="counting">100 +</span>

                    </div>
                    <div class="counter-name">
                      <h6>Projects</h6>
                    </div>
                  </div>
                  <div class="counter counter-2">
                    <div class="counter-icon"> <i class="fa fa-user"></i></div>
                    <div class="counter-num"> <span class="counting">50 +</span>

                    </div>
                    <div class="counter-name">
                      <h6>Happy Client</h6>
                    </div>
                  </div>
                  <div class="counter counter-2">
                    <div class="counter-icon"> <i class="fa fa-edit"></i></div>
                    <div class="counter-num"> <span class="counting">100+</span>

                    </div>
                    <div class="counter-name">
                      <h6>Desing</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Container>
        <div class="counter-img"></div>
      </Container> */}



      <section class="ttm-row welcome-section clearfix">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 text-center">
              <div class="res-991-pt-0 res-991-mt-45 div-padding">
                <div class="v-section-title">
                  {/* <img class="img-fluid mivi-img" src="images/focus.png" alt="single_01" /> */}
                  <AiOutlineAim />
                  <div class="title-heade">
                    <h2 class="titlemis">Our Vision</h2>
                  </div>
                </div>
                <div class="pb-15 res-991-pb-0">
                  <p class="mb-0">We envision raising your brand with professionalism, excellence, commitment and by providing a
                    one stop solution platform that provide all the services in Exhibition &amp; Event Management Industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 text-center">
              <div class="res-991-pt-0 res-991-mt-45 div-padding">
                <div class="v-section-title">
                  {/* <img class="img-fluid " src="images/target.png" alt="single_01" /> */}
                  <AiOutlineEye />
                  <div class="title-heade">
                    <h2 class="titlemis">Our Mission</h2>
                  </div>
                </div>
                <div class="pb-15 res-991-pb-0">
                  <p class="mb-0">Our mission is to build your brand with creativity, collaboration, and dynamic approach.
                    Understanding, accountability, and passion are the core qualities that we believe in.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 text-center">
              <div class="res-991-pt-0 res-991-mt-45 div-padding">
                <div class="v-section-title">
                  {/* <img class="img-fluid " src="images/target.png" alt="single_01" /> */}
                  <AiOutlineEye />
                  <div class="title-heade">
                    <h2 class="titlemis">Our Value</h2>
                  </div>
                </div>
                <div class="pb-15 res-991-pb-0">
                  <p class="mb-0">Our mission is to build your brand with creativity, collaboration, and dynamic approach.
                    Understanding, accountability, and passion are the core qualities that we believe in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end main about us */}

      {/* Counters section */}
      {/* <section className='count-project count-text'>
        <Container>
          <Row>
            <Col lg={3} xs={3}>
              <h3>300+</h3>
              <p>Happy Clients</p>
            </Col>
            <Col lg={3} xs={3}>
              <h3>300+</h3>
              <p>Happy Clients</p>
            </Col>
            <Col lg={3} xs={3}>
              <h3>300+</h3>
              <p>Happy Clients</p>
            </Col>
            <Col lg={3} xs={3}>
              <h3>300+</h3>
              <p>Happy Clients</p>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* end counters section */}

      {/* Mission vision */}
      {/* <section className="space-pt">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title4 text-center">
                <h2>Welcome to Green Aqua Enviro Projects Private Limited, Hyderabad, India.</h2>
                <p>Green Aqua consists a team of Technical Engineers who have experience in pure drinking water to waste Water treatmantsolutions and related services. We started to serve the needs of safe drinking water to industrial porcess water and also to recycle the waste water. The main aim of the Company is to give an ultimate solution to the customers by quality products and service.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6 mb-4 mb-sm-0">
              <div className="feature-info feature-info-style-02 bg-dark text-white">
                <div className="feature-info-icon">
                  <i className="text-white">
                    <MdOutlineVisibility />
                  </i>
                  <h4 className="mb-0 ms-4 feature-info-title text-white">Our Vision</h4>
                </div>
                <div className="feature-info-content">
                  <p className="mb-0">To make these virtues a habit, himself on his daily actions. In a journal he drew a table with a row for every virtue and a column for every day of the week.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="feature-info feature-info-style-02 bg-primary text-white">
                <div className="feature-info-icon">
                  <i className="text-white">
                    <AiOutlineAim />
                  </i>
                  <h4 className="mb-0 ms-4 feature-info-title text-white">Our Mission</h4>
                </div>
                <div className="feature-info-content">
                  <p className="mb-0">We also know those epic stories, those modern-day legends surrounding the early failures of such supremely successful folks as Michael Jordan and Bill Gates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* end mission vision */}


    </>
  );
}
