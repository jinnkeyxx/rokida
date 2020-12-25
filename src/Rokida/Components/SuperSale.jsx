import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import banner_SuperSale1 from '../images/banner-sieusale-1.png'
import ProductItem from './ProductItem'

const SuperSale = () => {
    return (
        <>
            <Container className="mt-5">
                <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Siêu Sale</h3>
                <Row className="">
                    <Col className=" text-center text-lg-left" >
                        <img src={banner_SuperSale1} alt="" className="img-fluid" />
                    </Col>
                    <Col md={12} lg={9} sm={12}>
                        <ProductItem/>
                    </Col>
                    
                </Row>
                
            </Container>
            
        </>
    )
}

export default React.memo(SuperSale)