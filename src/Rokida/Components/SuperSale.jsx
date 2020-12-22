import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import banner_SuperSale1 from '../images/banner-sieusale-1.png'
import banner_SuperSale2 from '../images/super-sale.png'
import banner_SuperSale3 from '../images/banner-sieusale-2.png'
import banner_SuperSale4 from '../images/banner-sieusale-3.png'
import product_SuperSale1 from '../images/product-sale-2.png'
import product_SuperSale2 from '../images/product-sale-3.png'
import product_SuperSale3 from '../images/product-sale-4.png'


const SuperSale = () => {
    return (
        <>
            <Container className="mt-5">
                <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Siêu Sale</h3>
                <Row className="my-3">
                    <Col className="text-center">
                        <img src={banner_SuperSale1} alt="" />
                    </Col>
                    
                </Row>
                <Row className="my-3">
                    <Col className="text-center">
                        <img src={banner_SuperSale3} alt="" />
                    </Col>
                    <Col className="text-center">
                        <img src={product_SuperSale1} alt="" />
                    </Col>
                    <Col className="text-center">
                        <img src={product_SuperSale2} alt="" />
                    </Col>
                    <Col className="text-center">
                        <img src={product_SuperSale3} alt="" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col className="text-center">
                        <img src={banner_SuperSale4} alt="" />
                    </Col>
                    <Col className="text-center">
                        <img src={product_SuperSale1} alt="" />
                    </Col>
                    <Col className="text-center">
                        <img src={product_SuperSale2} alt="" />
                    </Col>
                    <Col className="text-center">
                        <img src={product_SuperSale3} alt="" />
                    </Col>
                </Row>
            </Container>
            <div className="my-2">
                <img src={banner_SuperSale2} alt="" />
            </div>
        </>
    )
}

export default React.memo(SuperSale)