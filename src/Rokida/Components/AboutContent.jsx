import React, { useEffect, useState } from "react"
import { Container, Row, Col, Nav, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import bg_help from '../images/bg-help.png'
import icon_mail from '../images/logo/mail.png'
import icon_phone from '../images/logo/phone.png'
import icon_location from '../images/logo/location.png'


const AboutContent = () => {
    return (
        <>
            <Container fluid="true">
                <Row className="bg_help">
                    <Container>
                        <Row className="bg_help2">
                            <Col md={{ span: 6, offset: 6 }}>
                                <div className="menu-icon text-right">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <form className="about-form">
                                    <p>Chúng tôi có thể giúp gì cho bạn. Hãy gửi câu hỏi cho chúng tôi.</p>
                                    <textarea/>
                                    <input type="submit" value="Gửi" />
                                </form>
                            </Col>
                        </Row>
                        <Row className="help-bottom">
                            <Col><Link to="/">Về trang cá nhân</Link></Col>
                            <Col className="text-center arrow-down">Tạo gian hàng</Col>
                            <Col className="text-right">
                                <img src={icon_mail} alt="" />
                                <img src={icon_phone} alt="" className="mr-2 ml-2"/>
                                <img src={icon_location} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )
}
export default React.memo(AboutContent)