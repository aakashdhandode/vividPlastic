import React from 'react';
import Slider from '../components/slider/Slider';
// import '../components/banner/Banner';
import '../assets/css/main.css'
import { Col, Container, Row, Image, Tabs, Tab, Button } from 'react-bootstrap';
import homeabout from "../assets/images/homeabout.jpg";
import '../assets/css/product.css'
import Productone from "../assets/images/productone.jpg";
import Producttwo from "../assets/images/producttwo.jpg";
import Producttree from "../assets/images/producttree.jpg";
import ProductCat from '../components/product/ProductsCat';
import ClientSlider from '../components/clientlogo/ClientSlider';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";
// import Popup from '../components/Popup';

export default function Home() {
    return (
        <div>
            <Slider />
            {/* <Popup /> */}



            {/* home page welcome section */}
            {/* <section className='new-about-bg'>
        <Container fluid>
            <Row>
                <Col sm={6} className='wlcome-img-padding'>
                <img src={homeabout} className="img-fluid" alt="greenaqua" />
                </Col>
                <Col sm={6}>
                <div className="offers-containt">
                    <h3>Welcome to vivid plastic Enviro Projects Private Limited, Hyderabad, India.</h3>
                    <p>Welcome to vivid plastic Enviro Projects Private Limited, Hyderabad, India. vivid plastic is one of the leading 
                    specialist in water treatment industry operate in the Designing, manufacturing, supply,
                    erection and commissioning of water and waste water treatment plants. At vivid plastic,
                    we are uniquely positioned to offer our clients one stop &amp; integrated solutions for 
                    household, institutional, commercial, industrial by leveraging our expertise across various
                    technologies to cater the needs of domestic, commercial and industrial requirements.
                    </p>
                    <p>By Integrating process thechnolgy, design engineering and project management capabilites,
                    we take end-to-end responsibility in planning, sourcing, integrating and managing water &amp; 
                    waste water plants, thus providing customers with total systems solutions with a long term commitment
                    for quality and service.
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
        </section> */}
            {/* home page welcome section end */}

            {/* Our product tabs section  */}
            {/* <section className='pt-4'>
        <Container>
            <div className='section-title text-center'>
                <h1>Our Products</h1>
                <p> With Esteemed Quality certifications from Water Quality and focus on Safety and Environment MAnagement Systems, vivid plastic is committed to maintain the highest standards for Health, Saftey and Environment.</p>
            </div>
            <div className='products-tabs'>
                <Tabs defaultActiveKey="tabone" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="tabone" title="Wastewater Treatment">
                    <Row>
                        <Col sm={3}>
                        <ProductCat 
                            img={Productone}
                            title="Sewage Water Treatment Plants"
                            description="vivid plastic engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                            Softeners for Residential and Small Business users."
                            more="More.."
                            />
                        </Col>
                    </Row>
                    </Tab>
                    <Tab eventKey="tabtwo" title="Wastewater Treatment">
                    <Row>
                        <Col sm={3}>
                        <ProductCat
                            img={Productone}
                            title="Industrial Reverse Osmosis Plant"
                            description="vivid plastic engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                            Softeners for Residential and Small Business users."
                            more="More.."
                            />
                        </Col>
                    </Row>
                    </Tab>
                    <Tab eventKey="tabthree" title="Water Vending Machine">
                    <Row>
                        <Col sm={3}>
                        <ProductCat 
                            img={Productone}
                            title="Industrial Reverse Osmosis Plant"
                            description="vivid plastic engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                            Softeners for Residential and Small Business users."
                            more="More.."
                            />
                        </Col>
                    </Row>
                    </Tab>
                    <Tab eventKey="tabfour" title="Domestic & Industrial">
                    </Tab>
                    <Tab eventKey="tabfive" title="Drinking Water Solutions">
                    </Tab>
                </Tabs>
            </div>
        </Container>
        </section> */}
        {/* <section className='pt-3 pb-3'>
                <Container className='s-boxx'>
                    <Row>
                        <Col sm={4}>
                            <div className='home-box-shedow'>
                                <Row>
                                    <Col sm={4} xs={3}>
                                        <Image src={require('../assets/images/w1.png')} alt="web" className='img-fluid' />
                                    </Col>
                                    <Col sm={8} xs={9}>
                                        <h5>Trusted Services</h5>
                                        <p> It is a long established fact that a reader will be distracted by the.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='home-box-shedow'>
                                <Row>
                                    <Col sm={4} xs={3}>
                                        <Image src={require('../assets/images/w2.png')} alt="web" className='img-fluid' />
                                    </Col>
                                    <Col sm={8} xs={9}>
                                        <h5>24/7 Support</h5>
                                        <p> It is a long established fact that a reader will be distracted by the.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='home-box-shedow'>
                                <Row>
                                    <Col sm={4} xs={3}>
                                        <Image src={require('../assets/images/w3.png')} alt="web" className='img-fluid' />
                                    </Col>
                                    <Col sm={8} xs={9}>
                                        <h5>Expert & Professional</h5>
                                        <p> It is a long established fact that a reader will be distracted by the.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}

            <section className='about-section-page'>
                <Container>
                    <Row>
                        <Col sm={6}>
                        <Image  src='https://img.freepik.com/free-photo/happy-co-workers-close-window_1098-3172.jpg?t=st=1648017690~exp=1648018290~hmac=4251e845b1f63d8114df1984d30e7145c7b01324f740e371bf2b38e4ea79640e&w=900' className='about-imgg'/>
                        </Col>
                        <Col sm={6}>
                        <div className='offers-containt'>
                            <h3>Welcome to Vivid Plastic Pvt Ltd</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam voluptates fugit, aperiam, laborum nulla quisquam vitae modi blanditiis minus fugiat labore voluptate perspiciatis rerum? Aliquid maxime voluptas totam eum.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius deleniti omnis labore repellat autem explicabo officia. Doloribus incidunt aut eaque quia repellendus unde necessitatibus facere, qui est ullam repudiandae?
                           <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore totam delectus ea aut optio vitae hic distinctio obcaecati fugit modi, ratione quo a dolorum quod? Consequuntur recusandae qui ex iste?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat culpa ut dicta beatae ducimus blanditiis,<br/> voluptas odit, quibusdam praesentium inventore veniam nostrum amet totam. Voluptatum laborum blanditiis porro est.
                            </p>
                            <hr />
                                <div className=''>
                                    <Row>
                                        <Col sm={1} xs={2} className="phone-about">
                                            {/* <Image src='' alt="web" className='img-fluid phone-img' /> */}
                                            <i><FiPhoneCall /></i>
                                        </Col>
                                        <Col sm={9} xs={10}>
                                            <p className='m-0 phone-text'>Need a service & ready to book? Call us</p>
                                            <h2 className='c-number'>Phone : <span> +91 12345 67890</span></h2>
                                        </Col>
                                    </Row>
                                </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <section className="slogan-area-vivid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="slogan">
                                <h2>The Vivid Platics is a one stop solution for a wide range of plastics items Manufacture Company.</h2>
                                <Button className='btn btn-salogn'>Request A Quote</Button>
                            </div>
                        </div>
                    </div>     
                </div>
            </section> */}
            <section className='offers-section'>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className='offers-vivid'>
                            <h2>The Vivid Platics is a one stop solution for a wide range of plastics items Manufacture Company.</h2>
                                <Button className='btn btn-salogn'>Request A Quote</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='pt-4'>
                <Container>
                    <div className='section-title text-center'>
                        <h1>Our Products</h1>
                        <p> With Esteemed Quality certifications from Water Quality and focus on Safety
                            and Environment MAnagement Systems, vivid plastic is committed to maintain the highest
                            standards for Health, Saftey and Environment.</p>
                    </div>
                    <Row>
                        {/* <Col sm={3}>
                            <Link to="/ProductDetails">
                                <div className="home-tab-product-card">
                                    <Image src={require('../assets/images/products/pro1.jpg')} className="img-fluid" />
                                    <h3>BUCKETS</h3>
                                    <p>Vivid Buckets are no ordinary buckets. They are made from high-grade
                                        durable plastic compounds that deliver the strongest buckets of its kind in the industry.</p>
                                </div>
                            </Link>
                        </Col>
                        <Col sm={3}>
                            <Link to="/ProductDetails">
                                <div className="home-tab-product-card">
                                    <Image src='https://uniriostores.com/wp-content/uploads/2021/08/3-46.jpeg' className="img-fluid" />
                                    <h3>INSULATED BOTTLES</h3>
                                    <p>Vivid Buckets are no ordinary buckets. They are made from high-grade
                                        durable plastic compounds that deliver the strongest buckets of its kind in the industry.</p>
                                </div>
                            </Link>
                        </Col>
                        <Col sm={3}>
                            <Link to="/ProductDetails">
                                <div className="home-tab-product-card">
                                    <Image src={require('../assets/images/products/pro3.png')} className="img-fluid" />
                                    <h3>TIFINS</h3>
                                    <p>Vivid bottles are no ordinary buckets. They are made from high-grade
                                        durable plastic compounds that deliver the strongest buckets of its kind in the industry.</p>
                                </div>
                            </Link>
                        </Col>
                        <Col sm={3}>
                            <Link to="/ProductDetails">
                                <div className="home-tab-product-card">
                                    <Image src={require('../assets/images/products/pro4.png')} className="img-fluid" />
                                    <h3>INSULATED CASSEROLES</h3>
                                    <p>Vivid Buckets are no ordinary buckets. They are made from high-grade
                                        durable plastic compounds that deliver the strongest buckets of its kind in the industry.</p>
                                </div>
                            </Link>
                        </Col> */}
                        <Col sm={3}>
                            <Link to="/">
                                <div className="home-tab-product-card">
                                    <Image src='https://vcahospitals.com/-/media/2/VCA/Images/LifeLearn-Images-Foldered/594/Syringe.ashx' className="img-fluid" />
                                    <h3>INSULIN</h3>
                                    <p>Vivid Buckets are no ordinary buckets. They are made from high-grade
                                        durable plastic compounds that deliver the strongest buckets of its kind in the industry.</p>
                                </div>
                            </Link>
                        </Col>
                        <Col sm={3}>
                            <Link to="/">
                                <div className="home-tab-product-card">
                                    <Image src='https://us.123rf.com/450wm/wihtgod/wihtgod1112/wihtgod111200038/11564948-dropping-bottles-hang-on-hooks-closeup-shot.jpg?ver=6' className="img-fluid" />
                                    <h3>INSULIN</h3>
                                    <p>Vivid Buckets are no ordinary buckets. They are made from high-grade
                                        durable plastic compounds that deliver the strongest buckets of its kind in the industry.</p>
                                </div>
                            </Link>
                        </Col>
                        <Col sm={3}>
                            <Link to="/">
                                <div className="home-tab-product-card">
                                    <Image src='https://vcahospitals.com/-/media/2/VCA/Images/LifeLearn-Images-Foldered/594/Syringe.ashx' className="img-fluid" />
                                    <h3>INSULIN</h3>
                                    <p>Vivid Buckets are no ordinary buckets. They are made from high-grade
                                        durable plastic compounds that deliver the strongest buckets of its kind in the industry.</p>
                                </div>
                            </Link>
                        </Col>
                        <Col sm={3}>
                            <Link to="/">
                                <div className="home-tab-product-card">
                                    <Image src='https://us.123rf.com/450wm/wihtgod/wihtgod1112/wihtgod111200038/11564948-dropping-bottles-hang-on-hooks-closeup-shot.jpg?ver=6' className="img-fluid" />
                                    <h3>INSULIN</h3>
                                    <p>Vivid Buckets are no ordinary buckets. They are made from high-grade
                                        durable plastic compounds that deliver the strongest buckets of its kind in the industry.</p>
                                </div>
                            </Link>
                        </Col>
                    </Row>

                    <div className='text-center mt-3 mb-3'>
             <Link to="/clients" className='more-client-btn'>
             See More</Link>
          </div>
                </Container>
            </section>
            {/* end our product tabs section */}

            <ClientSlider />
            <ContactForm />



        </div>
    );
}
