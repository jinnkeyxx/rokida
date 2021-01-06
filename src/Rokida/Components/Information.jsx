import React from "react"
import { Container, Row, Col, Nav, ListGroup } from 'react-bootstrap'
import { ListUser } from '../DataFake/ListProduct';
import { Link } from 'react-router-dom';
import avartar from '../images/avatar.png'

const Information = () => {
    return (
        <>
            <Container fluid="true">
                <Row className="">
                    <Container>
                        <h4 className="mt-4">Chỉnh sửa thông tin</h4>
                        <Row>
                            <Col md={4}>
                                <Nav className="nav__right ">
                                    <ListGroup className="">
                                        {ListUser.map((item, index) => (
                                            <div className="txt_list" key={index}><Nav.Link href={item.href}>{item.name}</Nav.Link></div>
                                        ))}
                                    </ListGroup>
                                </Nav>
                            </Col>
                            <Col md={8} className="text-center">
                                <img src={avartar} alt="" />
                                <p>Xin chào Xuxu2_2</p>
                                <a>Quản lý thông tin hồ sơ bảo mật tài khoản</a>
                                <hr></hr>
                                <ul className="text-left">
                                    <li>Tên Đăng Nhập: Xuxu2_2</li>
                                    <li>Tên <input type="text" /><Link to="/" className="ml-2">Thay đổi</Link></li>
                                    <li>Mail: xxxxxxx689@gmail.com<Link to="/" className="ml-2">Thay đổi</Link></li>
                                    <li>Số Điện Thoại: ********76<Link to="/" className="ml-2">Thay đổi</Link></li>
                                    <li>Giới tính: Nữ</li>
                                    <li>Ngày Sinh<input type="date" name="bday" className="ml-2"/></li>
                                    <li>Địa Chỉ: Landmark 5, 205 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Hồ Chí Minh<Link to="/" className="ml-2">Thay đổi</Link></li>
                                </ul>
                                <input type="submit" value="Lưu" />
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )
}
export default React.memo(Information)