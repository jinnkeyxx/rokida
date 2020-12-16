import React , {useState , useEffect} from 'react'
import { Img_Banner , Img_Banner_sefl } from '../DataFake/Banner'
import { ListProduct } from '../DataFake/ListProduct'
import {Container , Row , Col , Nav , Navbar , ListGroup , Carousel} from 'react-bootstrap'
import Loading from '../Other/Loading'
const Banner = () => {
    const [ productList  , setProductList] = useState([])
    const [ banner , setBanner ] = useState([])
    const [bannerSefl , setBannerSelf] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    useEffect(() => {
        const loadItem = async () => {
            await setIsLoading(true)
            await setProductList(ListProduct)
            await setBanner(Img_Banner)
            await setBannerSelf(Img_Banner_sefl)
        }
        loadItem()
    }, []);
    return(
        <main className="main">
            {!isLoading && (<Loading/>)}
        <div className="my-2">
            <Container fluid>
                <Row>
                    <Col md={12} lg={2}>
                    <Navbar navbar="light" expand="lg">
                        <Navbar.Toggle aria-controls="rokida__product" className="ml-auto mr-auto"/>
                            <Navbar.Collapse  className="py-2 text-center " id="rokida__product">
                                <Nav>
                                    <ListGroup className="list-group bg-light">
                                        {productList.map((item , index) => (
                                            <ListGroup.Item key={index}><Nav.Link href={item.href}>{item.name}</Nav.Link></ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col md={12} lg={7}>
                        <Carousel className="banner position-relative h-100 py-2 ">
                            {banner.map((item , index) => (
                                <Carousel.Item className="carousel-item active" key={index}>
                                    <img className="d-block w-100" src={item.src} alt="First slide"/>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col >
                        {bannerSefl.map((item , index) => (
                            <img src={item.src} className="img-fluid pt-2 w-100 d-lg-block" alt=""key={index}/>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    </main>
    )
}
export default React.memo(Banner)