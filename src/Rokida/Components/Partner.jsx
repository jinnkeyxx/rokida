import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img_Partner1 from '../images/logo/icon-momo.png'
import img_Partner2 from '../images/logo/logo-airpay.png'
import img_Partner3 from '../images/logo/logo-bestexpress.png'
import img_Partner4 from '../images/logo/logo-ghn.png'
import img_Partner5 from '../images/logo/logo-ghtk.png'
import img_Partner6 from '../images/logo/logo-Grab-express.png'

const SuperSale = () => {
    return (
        <>
            <Container className="mt-5">
            <Row className="my-3">
                <Col className="text-center">
                    <img src={img_Partner1} alt=""/>
                </Col>
                <Col className="text-center">
                    <img src={img_Partner2} alt=""/>
                </Col>
                <Col className="text-center">
                    <img src={img_Partner3} alt=""/>
                </Col>
                <Col className="text-center">
                    <img src={img_Partner4} alt=""/>
                </Col>
                <Col className="text-center">
                    <img src={img_Partner5} alt=""/>
                </Col>
                <Col className="text-center">
                    <img src={img_Partner6} alt=""/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default React.memo(SuperSale)