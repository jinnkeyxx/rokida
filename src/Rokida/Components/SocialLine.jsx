import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img_Partner3 from '../images/logo/logo-bestexpress.png'

import facebook from '../images/logo/facebook-logo.png'
import youtube from '../images/logo/youtube-logo.png'
import twiter from '../images/logo/twiter-logo.png'
import pinterest from '../images/logo/pinterest-logo.png'

const SocialLine = () => {
    return (
        <>
        <Container fluid="true" className="mt-5">
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

export default React.memo(SocialLine)