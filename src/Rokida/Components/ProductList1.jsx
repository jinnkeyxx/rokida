import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import { data, PaginationData } from '../DataFake/Product1'
import img_ship from '../images/icon-ship2.png'
import img_sale from '../images/saleproduct.png'
import poster from '../images/poster.png'
import christmassale from '../images/christmas-sale.png'

const ProductList1 = () => {
    const [Product1, setProduct] = useState([])
    useEffect(() => {
        const loadItem = async () => {
            const sale = data
            const limit = PaginationData(data).length
            console.log(limit)
            await setProduct(sale)
        }
        loadItem();
    }, [])

    var colClassName = (index) => (index === 7 || index === 10) ? 'col-five margin-qc' : 'col-five';
    return (
        <div className="Product1">
            <Container>
                <Row>
                    {Product1.map((item, index) => (
                        <div className={colClassName(index)}>
                            <div key={index} className="position-relative sale__item">
                                <Card className="card__item position-static">
                                    {item.is_sale && (
                                        <div className="d-block sale position-absolute p-2" style={{ zIndex: '10000', top: '30px', right: '20px', backgroundImage: `url(${img_sale})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                            <b className="d-block" style={{ color: '#fff', textAlign: 'center', fontSize: '0.7em' }}>50%</b>
                                        </div>

                                    )}

                                    {(true) && (<div></div>)}
                                    <div className="position-relative" style={{ zIndex: '0' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        {item.is_ship && (
                                            <img src={img_ship} alt="" className="d-block sale position-absolute" style={{ bottom: '0', left: '0' }} />
                                        )}
                                    </div>
                                    <Card.Body className="">
                                        <div className="card-text" style={{ fontSize: '0.8em' }}>
                                            {item.text}
                                            <Row>
                                                <Col className="px-0 py-2" >
                                                    <p className="mb-0  mx-2 d-block"><b style={{ color: 'red', fontSize: '1.2em' }}>{`${item.price.toFixed(3)}đ`}</b></p>
                                                </Col>
                                                <Col className="px-0">
                                                    <p className=" text-center mb-0 d-block">da ban 2.3k san pham</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card.Body>
                                    <p className=" mb-0 text-center position-absolute detail text-center" style={{ background: 'red', bottom: '-10px', width: '90%', margin: 'auto' }}>xem them cac san pham tuong tu</p>
                                </Card>
                            </div>
                        </div>
                    ))}
                </Row>
                {/* <div className="items-advertise col-five"><img src={poster} alt="" /></div> */}
            </Container>

        </div>
    )
}

export default React.memo(ProductList1)