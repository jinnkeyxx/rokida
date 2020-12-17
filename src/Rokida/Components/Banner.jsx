import React, { useState, useEffect } from 'react'
import { Img_Banner, Img_Banner_home1, Img_Banner_home2, Img_Banner_sefl } from '../DataFake/Banner'
import { ListProduct } from '../DataFake/ListProduct'
import { Container, Row, Col, Nav, Navbar, ListGroup, Carousel } from 'react-bootstrap'
import Loading from '../Other/Loading'
const Banner = () => {
    const [productList, setProductList] = useState([])
    const [banner, setBanner] = useState([])
    const [bannerSefl, setBannerSelf] = useState([])
    const [bannerHome1, setBannerHome1] = useState([])
    const [bannerHome2, setBannerHome2] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const loadItem = async () => {
            await setIsLoading(true)
            await setProductList(ListProduct)
            await setBanner(Img_Banner)
            await setBannerSelf(Img_Banner_sefl)
            await setBannerHome1(Img_Banner_home1)
            await setBannerHome2(Img_Banner_home2)
        }
        loadItem()
    }, []);
    return (
        <main className="main">
            {!isLoading && (<Loading />)}
            <div className="my-2">
                <Container fluid>
                    <Row>
                        <Col >
                            <Navbar navbar="light" expand="lg">
                                <Navbar.Toggle aria-controls="rokida__product" className="ml-auto mr-auto" />
                                <Navbar.Collapse className="" id="rokida__product">
                                    <Nav className="nav__right">
                                        <ListGroup className="list-group bg-light ">
                                        <ListGroup.Item style={{textTransform : 'uppercase' , fontWeight : 'bold'}}>Danh muc san pham</ListGroup.Item>
                                            {productList.map((item, index) => (
                                                <ListGroup.Item className="" key={index}><Nav.Link href={item.href}>{item.name}</Nav.Link></ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                        <Col md={12} lg={5} xl={6} style={{borderTop : '1px solid red'}}>
                            <Carousel className="banner position-relative h-100  ">
                                {banner.map((item, index) => (
                                    <Carousel.Item className="carousel-item active" key={index}>
                                        <img className="d-block w-100" src={item.src} alt="First slide" />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col md={12} lg={3} xl={3} className="h-100 img_self">
                            {bannerSefl.map((item, index) => (
                                <img src={item.src} className="img-fluid  pt-xl-0 w-100 d-lg-block d-xl-block" alt="" key={index} />
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="my-2">
                <Container fluid>
                    <Row>
                        <Col md={12} lg={7} xl={6}>
                            
                                {bannerHome1.map((item, index) => (
                                    <img src={item.src} className="img-fluid pt-3 w-100 d-lg-block" alt="" key={index} />
                                ))}
                           
                        </Col>
                        <Col >
                            {bannerHome2.map((item, index) => (
                                <img src={item.src} className="img-fluid pt-3 w-100 d-lg-block" alt="" key={index} />
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        </main>
    )
}
export default React.memo(Banner)