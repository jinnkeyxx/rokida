import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import poster_Rokida from '../images/poster-rokida-onl.png'



const Suggestion = () => {
    return (
        <>
            <Container className="mt-5">
                <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Gợi ý hôm nay</h3>
                <Row className="my-3">
                    <Col className="text-center">
                        <img src={poster_Rokida} alt="" />
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default React.memo(Suggestion)