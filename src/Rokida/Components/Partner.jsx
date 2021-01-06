import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img_Partner1 from '../images/logo/icon-momo.png'
import img_Partner2 from '../images/logo/logo-airpay.png'
import img_Partner3 from '../images/logo/logo-bestexpress.png'
import img_Partner4 from '../images/logo/logo-ghn.png'
import img_Partner5 from '../images/logo/logo-ghtk.png'
import img_Partner6 from '../images/logo/logo-Grab-express.png'

import facebook from '../images/logo/facebook-logo.png'
import youtube from '../images/logo/youtube-logo.png'
import twiter from '../images/logo/twiter-logo.png'
import pinterest from '../images/logo/pinterest-logo.png'

const SuperSale = () => {
    return (
        <>
            <Container className="mt-5">
            <Row className="my-3">
                <Col className="text-center">
                    <img src={img_Partner3} alt=""/>
                </Col>
                <Col className="text-center">
                    <img src={img_Partner3} alt=""/>
                </Col>
                <Col className="text-center">
                    <img src={img_Partner3} alt=""/>
                </Col>
                <Col className="text-center">
                    <img src={img_Partner3} alt=""/>
                </Col>
            </Row>
            <Row className="justify-content-md-center"><Col md="auto"><p><b>ĐỐI TÁC CỦA CHÚNG TÔI</b></p></Col></Row>
            <Row><Col><span className="line"></span></Col></Row>
            <Row className="partner-logo-container">
                <Col>
                    <a> <img src={facebook} alt="" id="facebook" className="partner-logo"/></a>
                    <a> <img src={twiter} alt="" id="twiter" className="partner-logo"/></a>
                    <a> <img src={pinterest} alt="" id="pinterest" className="partner-logo"/></a>
                    <a> <img src={youtube} alt="" id="youtube" className="partner-logo"/></a>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default React.memo(SuperSale)