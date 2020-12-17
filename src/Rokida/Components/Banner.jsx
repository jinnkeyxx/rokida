import React, { useState, useEffect } from 'react'
import { Img_Banner, Img_Banner_home1, Img_Banner_home2, Img_Banner_sefl, Img_QC_Icon1, Img_QC_Icon2, Img_QC_Icon3, Img_QC_Icon4, Img_QC_Icon5, Img_QC_Icon6 } from '../DataFake/Banner'
import { ListProduct } from '../DataFake/ListProduct'
import { Container, Row, Col, Nav, Navbar, ListGroup, Carousel } from 'react-bootstrap'
import Loading from '../Other/Loading'
const Banner = () => {
    const [productList, setProductList] = useState([])
    const [banner, setBanner] = useState([])
    const [bannerSefl, setBannerSelf] = useState([])
    const [bannerHome1, setBannerHome1] = useState([])
    const [bannerHome2, setBannerHome2] = useState([])
    const [qcIcon1, setQCIcon1] = useState([])
    const [qcIcon2, setQCIcon2] = useState([])
    const [qcIcon3, setQCIcon3] = useState([])
    const [qcIcon4, setQCIcon4] = useState([])
    const [qcIcon5, setQCIcon5] = useState([])
    const [qcIcon6, setQCIcon6] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const loadItem = async () => {
            await setIsLoading(true)
            await setProductList(ListProduct)
            await setBanner(Img_Banner)
            await setBannerSelf(Img_Banner_sefl)
            await setBannerHome1(Img_Banner_home1)
            await setBannerHome2(Img_Banner_home2)
            await setQCIcon1(Img_QC_Icon1)
            await setQCIcon2(Img_QC_Icon2)
            await setQCIcon3(Img_QC_Icon3)
            await setQCIcon4(Img_QC_Icon4)
            await setQCIcon5(Img_QC_Icon5)
            await setQCIcon6(Img_QC_Icon6)
        }
        loadItem()
    }, []);
    return (
        <main className="main">
            {!isLoading && (<Loading />)}
            <div className="my-2">
                <Container fluid>
                    <Row>
                        <Col md={12} lg={2}>
                            <Navbar navbar="light" expand="lg">
                                <Navbar.Toggle aria-controls="rokida__product" className="ml-auto mr-auto" />
                                <Navbar.Collapse className="py-2 " id="rokida__product">
                                    <Nav>
                                        <ListGroup className="list-group bg-light ">
                                            {productList.map((item, index) => (
                                                <ListGroup.Item key={index}><Nav.Link href={item.href}>{item.name}</Nav.Link></ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                        <Col md={12} lg={7}>
                            <Carousel className="banner position-relative h-100 py-3 ">
                                {banner.map((item, index) => (
                                    <Carousel.Item className="carousel-item active" key={index}>
                                        <img className="d-block w-100" src={item.src} alt="First slide" />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col >
                            {bannerSefl.map((item, index) => (
                                <img src={item.src} className="img-fluid pt-3 w-100 d-lg-block" alt="" key={index} />
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="my-2">
                <Container fluid>
                    <Row>
                        <Col md={12} lg={6}>
                            
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
            <div className="header__help justify-content-center text-center container">
                <Container fluid>
                    <Row >
                        <Col md={12} lg={2} >
                                {qcIcon1.map((item, index) => (
                                    <img src={item.src} className="img-fluid d-lg-block" alt="" key={index} />
                                ))}
                                Siêu khuyến mãi
                        </Col>
                        <Col >
                                {qcIcon2.map((item, index) => (
                                    <img src={item.src} className="img-fluid d-lg-block" alt="" key={index} />
                                ))}
                                Fresship
                        </Col>
                        <Col >
                                {qcIcon3.map((item, index) => (
                                    <img src={item.src} className="img-fluid d-lg-block" alt="" key={index} />
                                ))}
                                Giờ vàng
                        </Col>
                        <Col >
                                {qcIcon4.map((item, index) => (
                                    <img src={item.src} className="img-fluid d-lg-block" alt="" key={index} />
                                ))}
                                Trả hàng hoàn tiền
                        </Col>
                        <Col >
                                {qcIcon5.map((item, index) => (
                                    <img src={item.src} className="img-fluid d-lg-block" alt="" key={index} />
                                ))}
                                Hàng quốc tế
                        </Col>
                        <Col >
                                {qcIcon6.map((item, index) => (
                                    <img src={item.src} className="img-fluid d-lg-block" alt="" key={index} />
                                ))}
                                Siêu thị điện tử
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="my-2">
                <div className="sologan">THÁNG  VÀNG KHUYẾN MÃI SIÊU SALE 70%</div>
            </div>
        </main>
    )
}
export default React.memo(Banner)