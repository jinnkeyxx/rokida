import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logosmall from '../images/logo-small.png'
import facebook from '../images/logo/facebook.png'
import google from '../images/logo/google.png'
import apple from '../images/logo/apple.png'


const InforRegis = () => {
    return (
        <>
            <Container fluid="true">
                <Row className="">
                    <Container>
                        <h6 className="mt-4"><img src={logosmall} alt="" className="mr-2" />ĐĂNG KÝ</h6>
                        <Row className="bg_registration">
                            <Col md={{ span: 6, offset: 6 }} className="text-center">
                                <form className="about-form">
                                    <Col>

                                        <ul className="input-infor">
                                            <li><input type="text" placeholder="Số điện thoại" /></li>
                                            <li><input type="text" placeholder="Mật khẩu" /></li>
                                            <li><input type="text" placeholder="Nhập lại mật khẩu" /></li>
                                        </ul>

                                    </Col>
                                    <Col className="text-center ">
                                        <p>Hoặc đăng nhập với</p>
                                        <img src={facebook} alt="" />
                                        <img src={google} alt="" className="ml-2 mr-2" />
                                        <img src={apple} alt="" />
                                    </Col>
                                   <Col>
                                       <p>Bằng việc đăng ký bạn đã đồng ý cùng Rokida về<Link to="/" className="ml-2">điều khoản dịch vụ </Link>và<Link to="/" className="ml-2">chính sách bảo mật</Link> </p>
                                   </Col>
                                   <Col>
                                       <p>Bạn đã có tài khoản |<Link to="/" className="ml-2">Đăng nhập</Link> </p>
                                   </Col>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )
}
export default React.memo(InforRegis)