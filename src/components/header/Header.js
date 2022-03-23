import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Col, Row, Image, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "./header.css";
import axios from 'axios';

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
                <a href="instagram.com" target="_blank" rel=""  ><i className="fab fa-instagram"></i></a>
                <a href="facebook.com" target="_blank" rel=""  ><i className="fab fa-facebook-f"></i></a>
                <a href="linkedin.com" target="_blank" rel=""  ><i className="fab fa-linkedin"></i></a>
                <a href="youtube.com" target="_blank" rel=""  ><i className="fab fa-youtube"></i></a>
                <a href="twitter.com" target="_blank" rel=""  ><i className="fab fa-twitter"></i></a>
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


      <Navbar collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand href="#home"><img src={logo} className="img-fluid logo-img" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
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
                    {/* <ul className="dropdown-chaild">
              
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
                        
                      </ul> */}
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
            {/* <Nav.Link eventKey={2} href="#memes" className='header-button'>
              Request A Quote
            </Nav.Link> */}
            <button className='btn btn-header'>Request A Quote</button>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>




    </>
  );
}
