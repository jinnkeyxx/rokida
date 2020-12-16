import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Layout.less'
import '../css/Responesive.css'
import logo from '../images/logo.gif'
import user from '../images/user.png'
import iconVn from '../images/iconVN.png'
import iconUS from '../images/iconUS.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Navbar , Container , Row , Col , InputGroup , FormControl , Nav } from 'react-bootstrap'
const Header = () => {
    const [numberShop , setNumberShop] = useState(0)
    const [ValueSerach , setValueSerach] = useState("")
    const changeValueSearch = (e) => {
        setValueSerach(e.target.value)
    }
    const Search = () => {
        if(!ValueSerach) return
        console.log(ValueSerach)
    }
    return(
        <header>
            <div className="logo w-100 text-center">
                <img src={logo} alt="" id="logo"/>
            </div>
            <Navbar navbar="light" expand="lg">
                <Navbar.Toggle aria-controls="navbar__rokida" className="ml-auto mr-auto"/>
                <Navbar.Collapse id="navbar__rokida">
                    <Container className="header__info text-center">
                        <Nav className="mr-auto">
                            <Nav.Item className=" active">
                                <Nav.Link  href="/#">Tai ung dung </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Item  className=" active">
                                <Nav.Link  href="/#">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item  className=" character">
                                <Nav.Link  href="/#">|</Nav.Link>
                            </Nav.Item>
                            <Nav.Item  className=" ">
                                <Nav.Link  href="/#">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item  >
                                <Nav.Link  href="/#" >
                                    <img src={user} className="img-fluid rounded-circle" id="img__user" alt=""/>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                    <Container className="header__help justify-content-center text-center">
                        <Nav className="mr-auto ml-auto">
                            <Nav.Item  className=" ">
                                <Nav.Link  href="/#">Ban Hnag cung Rokida </Nav.Link>
                            </Nav.Item>
                            <Nav.Item  className=" ">
                                <Nav.Link  href="/#">tro giup </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" ">
                                <Nav.Link  href="/#">Kiem tra don hang </Nav.Link>
                            </Nav.Item>
                            <Nav.Item  className=" ">
                                <Nav.Link  href="/#">Dang Nhap </Nav.Link>
                            </Nav.Item>
                            <Nav.Item  className=" ">
                                <Nav.Link  href="/#">Dang ki </Nav.Link>
                            </Nav.Item>
                            <Nav.Item  className="text-center ">
                            <div className="flag ">
                                <a className="d-inline "  href="/#"><img className="img-fluid" src={iconVn} alt=""/> </a>
                                <a className="d-inline "  href="/#"><img className="img-fluid" src={iconUS} alt=""/> </a>
                            </div>
                            </Nav.Item>
                        </Nav>
                    </Container>
                    <Container className="header__form justify-content-center text-center">
                        <Row className="w-60 align-content-center ml-auto mr-auto">
                            <Col md={10} className=" ml-md-5 px-0">
                                <InputGroup  className="py-2">
                                    <FormControl type="text" value={ValueSerach} onChange={changeValueSearch} className="form-control" placeholder="" aria-label="" aria-describedby="search_product"/>
                                    <InputGroup.Append onClick={Search}>
                                        <InputGroup.Text id="search_product"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col className="px-0 text-center py-2">
                                <a href="/" className="nav-link position-relative "><FontAwesomeIcon icon={faShoppingCart} />
                                    <b className="position-absolute number d-block">{numberShop}</b>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="header__product justify-content-center text-center">
                        <Nav className="mr-auto ml-auto">
                            <Nav.Item  className=" ">
                                <Nav.Link  href="/#">Ban Hnag cung Rokida </Nav.Link>
                            </Nav.Item>
                            <Nav.Item  className=" ">
                                <Nav.Link  href="/#">tro giup </Nav.Link>
                            </Nav.Item>
                            <Nav.Item  className=" ">
                                <Nav.Link  href="/#">Kiem tra don hang </Nav.Link>
                            </Nav.Item>
                            <Nav.Item  className=" ">
                                <Nav.Link  href="/#">Dang Nhap </Nav.Link>
                            </Nav.Item>
                            <Nav.Item  className=" ">
                                <Nav.Link  href="/#">Dang ki </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
export default React.memo(Header)