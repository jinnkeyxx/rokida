import React, { useEffect , useState } from 'react'
import { StartTime } from '../DataFake/TimeSale'
import { Container , Row , Col } from 'react-bootstrap'
const SaleItem = () => {
    const [hours , setHours] = useState('00')
    const [minutes , setMinutes] = useState('00')
    const [seconds , setSeconds] = useState('00')
    useEffect(() => {
        const loadItem = async () => {
            await StartTime(setHours , setMinutes , setSeconds)
        }
        loadItem()
    },[])
    return(
        <article>
            <Container className="my-3">
                <h3 style={{fontWeight : 'bold' , textTransform : 'uppercase'}}>sale chớp nhoáng</h3>
                <Row className="px-0 mx-0">
                    <Col lg={2} md={4} className='px-0'>
                        <p>Đang bán</p>
                    </Col>
                    <Col  className='px-0'>
                        <p>Tiếp tục trong &nbsp;
                            <b className="time">{hours}</b> : &nbsp;
                            <b className="time">{minutes}</b> :&nbsp;
                            <b className="time">{seconds}</b> &nbsp;
                        </p>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}
export default React.memo(SaleItem)