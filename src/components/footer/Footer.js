import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Modal, Button, Form } from 'react-bootstrap';
import './footer.css'
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// const [footerLink, setFooterLink] = useState([]);
// useEffect(() => {
// fetchFooterLink();
// }, []);
// const fetchFooterLink = () => {
// axios
//     .get('/api/ga/categories')
//     .then((res) => {
//     setFooterLink(res.data.data);
//     })
//     .catch((err) => {
//     console.log(err);
//     });
// };


  return (
    <>
     <footer>
   <Container>
      <Row>
         <Col sm={4}>
         <div className="footer-logo">
            {/* <Image  src={require('../../assets/images/logo.jpg')} className='img-fluid' /> */}
            <h1 className='footer-log-link'>Vivid Platic</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae, in aspernatur distinctio eveniet neque excepturi numquam</p>
         </div>
         <div className='footer-links'>
            <div className="footer-social-icons mt-3">
               <a  href="instagram.com"  target="_blank" rel=""  ><i className="fab fa-instagram"></i></a>
               <a  href="facebook.com"  target="_blank" rel=""  ><i className="fab fa-facebook-f"></i></a>
               <a  href="linkedin.com"  target="_blank" rel=""  ><i className="fab fa-linkedin"></i></a>
               <a  href="youtube.com"  target="_blank" rel=""  ><i className="fab fa-youtube"></i></a>
               <a  href="twitter.com"  target="_blank" rel=""  ><i className="fab fa-twitter"></i></a>
            </div>
         </div>
         </Col>
         <Col sm={2} xs={4}>
         <div className="footer-content-list footer-content-item">
            <div className="footer-content-title">
               <h3>Links</h3>
            </div>
            <ul className="footer-details footer-list">
               <li>
                  <i className="fal fa-chevron-right"></i> 
                  <Link to="/">
                  Home</Link>
               </li>
               <li>
                  <i className="fal fa-chevron-right"></i> 
                  <Link to="/About">
                  About</Link>
               </li>
               <li>
                  <i className="fal fa-chevron-right"></i> 
                  <Link to="/Services">
                  Services</Link>
               </li>
               {/* <li>
                  <i className="fal fa-chevron-right"></i> 
                  <Link to="/Contact">
                  Contact Us</Link>
               </li> */}
               <li>
                  <i className="fal fa-chevron-right"></i> 
                  <Link to="">
                  News</Link>
               </li>
            </ul>
         </div>
         </Col>
         <Col sm={3} xs={8}>
         <div className="footer-content-list footer-content-item">
            <div className="footer-content-title">
               <h3>Our Products</h3>
            </div>
            <ul className="footer-details footer-list">
               {/* {
                  footerLink.map((footersitem) => {
                    return(
                     <li key={footersitem.id}>
                        <i className="fal fa-chevron-right"></i> 
                        <Link to="/">{footersitem.name}</Link>
                     </li>
                     )
                  })
               } */}
                  <li>
                        <i className="fal fa-chevron-right"></i> 
                        <Link to="/">Product </Link>
                     </li>
               
            </ul>
         </div>
         </Col>
         <Col sm={3}>
         <div className="footer-content-list footer-content-item">
            <div className="footer-content-title">
               <h3>Contact us</h3>
            </div>
            <div className="footer-address-info-item mt-2">
               <p className="footer-physical-address">Patrika Nagar,Hitech City, Madhapur Hyderabad - 500 081
                  Telangana State, India 
               </p>
            </div>
            <div className="footer-address-info-item">
               <p className="footer-contact-number">
                  Phone : 
                  <Link to="">
                  +91 1234567890</Link>
               </p>
            </div>
            <div className="footer-address-info-item">
               <p className="footer-email">
                  Email : 
                  <Link to="">
                  <span className="">example@gmail.com</span></Link>
               </p>
            </div>
         </div>
         </Col>
      </Row>
   </Container>
</footer>




<div className='copywrite'>
   <p className="text-center text-white">Copyright ©2021<span className=""> Vivid Plastic</span>. Design &amp; Develop By <a href="www.odms.in/" rel=""  target="_blank" className="text-white"> ODMS Pvt Ltd. </a></p>
</div>

    {/* <div className="wf-pop" onClick={handleShow}>
        <Image  src={require('../../assets/images/req.png')}/>
    </div>

   <div className="container-fluid">
      <div className="">
         <div className="follow-whatsapp">
            <a href="https://web.whatsapp.com/send?phone=+919289375566 &amp;text=Towards the creation of a home for your dream" 
            title="Contact Us On WhatsApp" target="_blank"> <i className="fab fa-whatsapp"></i></a>
         </div>
         <div className="follow-facebook">
            <a href="tel:+919289375566" title="Contact Us On facebook" target="_blank"> <i className="fa fa-phone"></i></a>
         </div>
         <div className="follow-instagram">
            <a href="mailto: info@mypropindia.com" title="Contact Us On instagram" target="_blank"> <i className="fa fa-envelope"></i></a>
         </div>
      </div>
   </div> */}


<Modal
   show={show}
   onHide={handleClose}
   backdrop="static"
   keyboard={false}
   className="pop-up"
   centered 
   dialogClassName="modal-90w"
   >
  <Modal.Header closeButton>
          <Modal.Title>Request A Call Back</Modal.Title>
          </Modal.Header>
          <Modal.Body>
      <Form className=''>
         <Form.Group className="">
            <Form.Control type="text" className='input-feild-height' placeholder="Enter Name" />
         </Form.Group>
         <Form.Group className="">
            <Form.Control type="text" className='input-feild-height' placeholder="Enter email" />
         </Form.Group>
         <Form.Group className="">
            <Form.Control type="text" className='input-feild-height' placeholder="Enter Company Name" />
         </Form.Group>
         <Form.Group className="">
            <Form.Control type="text" className='input-feild-height' placeholder="Enter Phone" />
         </Form.Group>
         <Form.Group className=""  >
            <textarea className="form-control" id="" rows="3" placeholder="Enter Message"></textarea>
         </Form.Group>
         <div className='text-center'>
         <Button variant="primary" type="submit" className='btn-theme-colored'>Send your message</Button>
         </div>
      </Form>
   </Modal.Body>
</Modal>




    </>
  );
}
