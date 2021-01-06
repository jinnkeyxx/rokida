import React, { useEffect, useState } from "react"
import { Container, Row, Col, Nav, ListGroup } from 'react-bootstrap'
import { ListAsk, ListQuestion } from '../DataFake/Ask'
import bg_help from '../images/bg-help.png'
import icon_bar from '../images/icon-bar.png'

const Question = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4} className=" text-center text-lg-left" >
                        <Nav className="nav__right ">
                            <ListGroup className="">
                                <h6 className="mb-4">Danh mục</h6>
                                {ListAsk.map((item, index) => (
                                    <div className="txt_list" key={index}><Nav.Link href={item.href}>{item.name}</Nav.Link></div>
                                ))}
                            </ListGroup>
                        </Nav>

                    </Col>
                    <Col md={8} className=" text-center text-lg-left" >
                        <ListGroup className="">
                            <h6 className="mb-4">CÂU HỎI THƯỜNG GẶP</h6>
                            {ListQuestion.map((item, index) => (
                                <div className="txt_list bd_question" key={index}><Nav.Link href={item.href}>{item.name}</Nav.Link></div>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default React.memo(Question)