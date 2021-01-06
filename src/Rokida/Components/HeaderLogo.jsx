import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Layout.less'
import '../css/Responesive.css'
import logo from '../images/logo.gif'
import user from '../images/user.png'
import iconVn from '../images/iconVN.png'
import iconUS from '../images/iconUS.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Row, Col, InputGroup, FormControl, Nav } from 'react-bootstrap'
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
                    <Container className="header__info text-center bg_header">
                        <Nav className="mr-auto">
                            <Nav.Item className=" active">
                                <Nav.Link href="/#">Tải ứng dụng</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="mr-auto ml-auto">
                            <Nav.Item className=" active">
                                <img src={logo} alt="" id="logo" />
                            </Nav.Item>
                        </Nav>
                        <Nav className="">
                            <Nav.Item className=" active">
                                <Nav.Link href="/#">Thông báo</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" character">
                                <Nav.Link href="/#">|</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">Trợ giúp</Nav.Link>
                            </Nav.Item>
                            <Nav.Item  >
                                <Nav.Link href="/#" >
                                    <img src={user} className="img-fluid rounded-circle" id="img__user" alt="" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" ">
                                <Nav.Link href="/#">Xuxu2_2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
export default React.memo(HeaderNew)