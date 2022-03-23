import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Products() {
  //   const [headerLink, setHeaderCatLink] = useState([]);
  //   const getHeaderCat = async () => {
  //     fetch('/api/ga/categories')
  //       .then((response)  =>  response.json())
  //       .then((response)  =>  {
  //         setHeaderCatLink(response.data); 
  //       }).catch((err)  =>  {
  //         console.log(err.message);
  //       })
  // }
  
  // useEffect(() =>{
  //     getHeaderCat();
  // }, []);

  return (
    <>
      <section className='product-page-sub'>
        <Container>
            <div className='pro-discription'>
                <h3>Our Products</h3>
                <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
        </Container>
      </section>
    <section className='pt-5 pb-5'>


    <Container>
        <Row>
            {/* {
                headerLink.map((productitem) => {
                    return(
                        <Col sm={3}>
                          <div className='home-tab-product-card pro-height'>
                              <Image  src={require('../assets/images/pro1.jpg')}/>
                              <h3>{productitem.name}</h3>
                              <Link to={`/products/${productitem.id}`}>
                              More..</Link>
                        </div>
                    </Col> 
                    )
                })
            } */}
          
            {/* <Col sm={3}>
            <div className='home-tab-product-card pro-height'>
                <Image  src={require('../assets/images/pro3.jpg')}/>
                <h3>Domestic & Industrial</h3>
                <Link to="/SubCategories">
                More..</Link>
            </div>
            </Col> */}
           
        </Row>
    </Container>
    </section>
    </>
  );
}
