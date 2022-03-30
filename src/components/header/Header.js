import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Col, Row, Image, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "./header.css";
import axios from 'axios';
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";


export default function Header() {
  // const [showDropdown, setShowDropd  own] = useState(false);
  const [active, setActive] = useState("home");

  // const [headerLink, setHeaderCatLink] = useState([]);
  // useEffect(() => {
  // fetchHeaderCatLink();
  // }, []);
  // const fetchHeaderCatLink = () => {
  // axios
  //     .get('/api/ga/categories')
  //     .then((res) => {
  //     setHeaderCatLink(res.data.data);
  //     })
  //     .catch((err) => {
  //     console.log(err);
  //     });
  // };



  return (
    <>
      <div className="top-header">
        <Container>
          <Row>
            <Col sm={6} >
              <div className="name-mail">
                <a href="/" target="_blank" rel=""  >Call: +91 12345 67890</a>
                <a href="/" target="_blank" rel=""  >Email: contact@vividplastic.in</a>
              </div>
            </Col>
            <Col sm={6}>
              <div className="social-icons">
                <a href="instagram.com" target="_blank" rel=""  ><GrInstagram /></a>
                <a href="facebook.com" target="_blank" rel=""  ><GrFacebookOption /></a>
                <a href="linkedin.com" target="_blank" rel=""  ><FaLinkedinIn /></a>
                <a href="youtube.com" target="_blank" rel=""  ><IoLogoYoutube /></a>
                <a href="twitter.com" target="_blank" rel=""  ><BsTwitter /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <section className="logo-section-header">
        <Container>
          <Row>
            <Col sm={6} xs={4}>
              <Link to="/">
                <img src={logo} className="img-fluid logo-img" alt="logo" />
              </Link>
            </Col>
            <Col sm={6} xs={8}>
              <div className='text-end'>
                <Image src={require('../../assets/images/iso.jpg')} className='partner-logo' />
                <Image src={require('../../assets/images/nsic.png')} className='partner-logo' />
                <Image src={require('../../assets/images/msme.png')} className='partner-logo pt-4' />
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* <Navbar bg="light" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="m-auto sub-nav"
              activeKey={active}
              onSelect={(selectedKey) => setActive(selectedKey)}
            >
              <Nav.Item>
                <Nav.Link eventKey="home" as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="about" as={Link} to="/about">
                  About Us
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                  <ul className="dropdown">
                    <li>
                        <Nav.Link eventKey="products" as={Link} to="/products">
                      Products
                    </Nav.Link>
                    <ul className="dropdown-chaild">
              
                        <li><Link to="/ProductCategories">Water Vending Station</Link></li>
                        <li><Link to="/ProductCategories">Wastewater Treatment</Link>
                          <ul>
                            <li><Link to="/ProductDetails">Sewage Treatment plants</Link></li>
                            <li><Link to="/ProductDetails">Packages STP</Link></li>
                            <li><Link to="/ProductDetails">Effluent Treatment Plants</Link></li>
                            <li><Link to="/ProductDetails">Packages ETP</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/ProductCategories">Industrial Water Solutions </Link>
                          <ul>
                            <li><Link to="/ProductDetails">Industrial Reverse Osmosis (RO) Plants</Link></li>
                            <li><Link to="/ProductDetails">Ultra Filtration Plant</Link></li>
                            <li><Link to="/ProductDetails"> Multi Grade Sand Filter</Link></li>
                            <li><Link to="/ProductDetails">Activated Carbon Filter</Link></li>
                            <li><Link to="/ProductDetails">MB Units</Link></li>
                            <li><Link to="/ProductDetails"> DM Plants</Link></li> 
                            <li><Link to="/ProductDetails">Desalination Plants</Link></li> 
                            <li><Link to="/ProductDetails">Chemical Dosing System</Link></li> 
                            <li><Link to="/ProductDetails">Swimming Pool Filtration Systems</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/ProductCategories">Domestic & Industrial </Link>
                          <ul>
                            <li><Link to="/ProductDetails">RO Purifiers</Link></li>
                            <li><Link to="/ProductDetails">Home Softners</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/ProductCategories">Drinking Water Solutions</Link>
                          <ul>
                            <li><Link to="/ProductDetails">Turnkey Project for Packaged</Link></li>
                            <li><Link to="/ProductDetails">RO Dringking Water Plants</Link></li>
                          </ul>
                        </li>
                        
                      </ul>
                    </li>
                </ul>
              </Nav.Item>

        
              <Nav.Item>
                <Nav.Link eventKey="services" as={Link} to="/services">
                 Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="gallery" as={Link} to="/gallery">
                  Gallery
                  </Nav.Link>
                </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="downloads" as={Link} to="/downloads">
                Brouchers
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="contact" as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* <section className='top-header-log'>
        <Container>
          <Row>
            <Col sm={4}>
              <img src={logo} className="img-fluid logo-img" alt="logo" />
            </Col>
            <Col sm={8}>
              <div class="block-right">
                <div class="top-contact">
                  <div class="contact-infos"><i class="fas fa-phone-alt"></i>
                    <div class="contact-body"> <span>call us:</span><a href="tel:123-456-7890">+91 1234 567890</a></div>
                  </div>
                  <div class="contact-infos"><i class="fas fa-envelope"></i>
                    <div class="contact-body"> <span>email us:</span><a href="mailto:Astred@zytheme.com?Subject=Hello%20again">vivid@example.com </a></div>
                  </div>
                  <div class="contact-infos"><i class="fas fa-clock"></i>
                    <div class="contact-body"> <span>opening hours:</span>
                      <p>Mon-Fri: 8am – 7pm </p>
                    </div>
                  </div>
                </div>
                <div class="module">
                <button className='btn btn-header'>Request A Quote</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}








      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="img-fluid logo-img" alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link eventKey="home" as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="about" as={Link} to="/about">
                  About Us
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <ul className="dropdown">
                  <li>
                    <Nav.Link eventKey="products" as={Link} to="/products">
                      Products
                    </Nav.Link>
                  </li>
                </ul>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="services" as={Link} to="/services">
                  Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="blog" as={Link} to="/blog">
                  News
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="contact" as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <button className='btn btn-header'>Request A Quote</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>




    </>
  );
}
