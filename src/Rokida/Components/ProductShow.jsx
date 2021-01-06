import React from 'react'
import { Container, Row, Col, Nav, Navbar, ListGroup } from 'react-bootstrap'
import christmassale from '../images/christmas-sale.png'
import christmas from '../images/christmas.png'
import backfriday from '../images/black-friday.png'
import { ListMenu } from '../DataFake/ListProduct'
import ProductList1 from './ProductList1'

const ProductShow = () => {
    return (
        <>
            <Container className="mt-5">
                <Row className="">
                    <Col className=" text-center text-lg-left" >
                        <Navbar navbar="light" expand="lg">
                            <Navbar.Toggle aria-controls="rokida__product" className="ml-auto mr-auto" />
                            <Navbar.Collapse className="" id="rokida__product">
                                <Nav className="nav__right">
                                    <ListGroup className="">
                                        <h6>Tất cả danh mục</h6>
                                        {ListMenu.map((item, index) => (
                                            <div className="" key={index}><Nav.Link href={item.href}>{item.name}</Nav.Link></div>
                                        ))}
                                    </ListGroup>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className="text-center">
                            <img src={christmassale} alt="" />
                            <img src={christmas} alt="" />
                        </div>
                    </Col>
                    <Col md={12} lg={9} sm={12}>
                        <ProductList1/>
                    </Col>
                </Row>
            </Container>
            <nav className="my-2">
                <img src={backfriday} alt="" />
            </nav>
        </>
    )
}

export default React.memo(ProductShow)