import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Layout.less'
import '../css/Responesive.css'
import cart from '../images/logo/cart.png'
import iconVn from '../images/iconVN.png'
import iconUS from '../images/iconUS.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Row, Col, InputGroup, FormControl, Nav } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
const HeaderNew = () => {
    const [numberShop, setNumberShop] = useState(0)
    const [ValueSerach, setValueSerach] = useState("")
    const changeValueSearch = (e) => {
        setValueSerach(e.target.value)
    }
    const Search = () => {
        if (!ValueSerach) return
        console.log(ValueSerach)
    }
    return (
        <header>
            <Navbar navbar="" expand="lg">
                <Navbar.Toggle aria-controls="navbar__rokida" className="ml-auto mr-auto bg_header" />
                <Navbar.Collapse id="navbar__rokida">
                    <Container className="header__help justify-content-center text-center">
                        <Nav className="mr-auto ml-auto">
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">BÁN HÀNG CÙNG ROKIDA</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">TRỢ GIÚP</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">KIỂM TRA ĐƠN HÀNG</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">ĐĂNG NHẬP</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">ĐĂNG KÝ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="text-center ">
                                <Nav.Link href="/#">NGÔN NGỮ
                                <div className="flag ">
                                        <a className="d-inline " href="/#"><img className="img-fluid" src={iconVn} alt="" /> </a>
                                        <a className="d-inline " href="/#"><img className="img-fluid" src={iconUS} alt="" /> </a>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                    <Container className="header__form justify-content-center text-center">
                        <Row className="w-80 align-content-center ml-auto mr-auto">
                            <Col md={10} className=" ml-md-5 px-0">
                                <InputGroup className="py-2">
                                    <FormControl type="text" value={ValueSerach} onChange={changeValueSearch} className="form-control" placeholder="" aria-label="" aria-describedby="search_product" />
                                    <InputGroup.Append onClick={Search}>
                                        <InputGroup.Text id="search_product"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col className="px-0 text-center py-2">
                                <a href="/" className="nav-link position-relative ">
                                    <b className="position-absolute number d-block">{numberShop}</b><img src={cart} alt="" />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="header__product justify-content-center text-center">
                        <Nav className="mr-auto ml-auto">
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">Nấu ăn</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">Thiết bị nhà tắm</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">Thời trang nam</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">Túi xách</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">Váy đầm</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
export default React.memo(HeaderNew)