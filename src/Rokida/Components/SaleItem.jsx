import React, { useEffect , useState } from 'react'
import { StartTime , TimeSale } from '../DataFake/TimeSale'
import { Container , Row , Col } from 'react-bootstrap'
const SaleItem = () => {
    const [hours , setHours] = useState('00')
    const [minutes , setMinutes] = useState('00')
    const [seconds , setSeconds] = useState('00')
    const [day , setDay] = useState("00")
    useEffect(() => {
        const loadItem = async () => {
            const timeData = TimeSale
            await StartTime(setHours , setMinutes , setSeconds , setDay,  timeData)
        }
        loadItem()
    },[])
    return(
        <article>
            <Container className="my-3">
                <h3 style={{fontWeight : 'bold' , textTransform : 'uppercase'}}>sale chớp nhoáng</h3>
                <Row className="px-0 mx-0">
                    <Col lg={2} md={4} className='px-0'>
<<<<<<< HEAD
                        <p><b>Dang ban</b></p>
                    </Col>
                    <Col  className='px-0'>
                        <p>
                            <b>Tiep tuc trong</b>  &nbsp;
                            <b className="time">{day}</b> : &nbsp;
=======
                        <p>Đang bán</p>
                    </Col>
                    <Col  className='px-0'>
                        <p>Tiếp tục trong &nbsp;
>>>>>>> 91a598268ce996971eadefe451adb3e793a5a4a5
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