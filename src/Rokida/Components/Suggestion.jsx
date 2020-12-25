import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import poster_Rokida from '../images/poster-rokida-onl.png'
import ProductItem from './ProductItem'



const Suggestion = () => {
    return (
        <>
            <Container className="mt-5">
                <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Gợi ý hôm nay</h3>
                <Row className="my-3">
                    <Col md={12} lg={9} sm={12}>
                        <ProductItem />
                    </Col>
                    <Col className=" text-center text-lg-right" >
                        <img src={poster_Rokida} alt="" className="img-fluid" />
                    </Col>


                </Row>
            </Container>
        </>
    )
}

export default React.memo(Suggestion)