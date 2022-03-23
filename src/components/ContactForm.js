import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function ContactForm() {
  return (
    <div>
           <section className='bg-no-repeat'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className='contact-details bg-silver-light border-theme-color-1px'>
                          <h3 className="contact-details-text">If You have any query <span className="text-theme-colored">please<br/>
                                contact </span>with us
                          </h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, consequuntur<br/> laboriosam fugiat explicabo recusandae minima veniam ipsa ex fuga <br/> est eum tempora.</p>
                          <ul className="list-icon theme-colored square mt-30">
                            <li><i className="fa fa-map-marker text-white flot-left-contact"></i><span className="font-weight-600">Address:
                                </span>#204, Sahiti petals, 2nd street
                                    Patrika Nagar,Hitech City,<br/> Madhapur
                                    Hyderabad - 500 081
                                    Telangana State, India</li>
                            <li><i className="fa fa-phone text-white"></i><span className="font-weight-600">Phone:
                                </span> +91 1234 567890</li>
                          
                            <li><i className="fa fa-envelope text-white"></i><span className="font-weight-600">Email:
                                </span>contact@example.in</li>
                         </ul>

                        <div className='footer-links'>
                                <div className="footer-social-icons mt-3">
                                    <a  href="instagram.com"  target="_blank" rel=""  ><i className="fab fa-instagram"></i></a>
                                    <a  href="facebook.com"  target="_blank" rel=""  ><i className="fab fa-facebook-f"></i></a>
                                    <a  href="linkedin.com"  target="_blank" rel=""  ><i className="fab fa-linkedin"></i></a>
                                    <a  href="youtube.com"  target="_blank" rel=""  ><i className="fab fa-youtube"></i></a>
                                    <a  href="twitter.com"  target="_blank" rel=""  ><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className=''>
                            <h3 className="line-bottom contact-details-text">Leave Your <span className="text-theme-colored">Comment</span> Here</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error optio in
                            quia ipsum quae
                            neque alias eligendi, nulla nisi. Veniam ut quis similique culpa natus dolor aliquam
                            .</p>
                        </div>
                        <div className='Contact-form'>
                          <Form>
                            <Row>
                                <Col sm={6}>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control type="text" className='input-feild-height' placeholder="Enter Name" />
                                </Form.Group>
                                </Col>
                                <Col sm={6}>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control type="text" className='input-feild-height' placeholder="Enter email" />
                                </Form.Group>
                                </Col>
                                <Col sm={6}>
                                <Form.Group className="mb-3" controlId="">
                            
                                    <Form.Control type="text" className='input-feild-height' placeholder="Enter Company Name" />
                                </Form.Group>
                                </Col>
                                <Col sm={6}>
                                <Form.Group className="mb-3" controlId="">
                                   
                                    <Form.Control type="text" className='input-feild-height' placeholder="Enter Phone" />
                                </Form.Group>
                                </Col>
                                <Form.Group className="mb-3" controlId="">
                                    <textarea className="form-control" id="" rows="3" placeholder="Enter Message"></textarea>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit" className='btn-theme-colored'>Send your message</Button>
                          </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default ContactForm