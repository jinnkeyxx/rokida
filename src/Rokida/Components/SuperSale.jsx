import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import banner_SuperSale1 from '../images/banner-sieusale-1.png'
import banner_SuperSale2 from '../images/super-sale.png'


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
            </Container>
            <div className="my-2">
             <img src={banner_SuperSale2} alt="" />
            </div>
        </>
    )
}

export default React.memo(SuperSale)