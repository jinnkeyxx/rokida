import React , { useState , useEffect } from "react";
import Slider from "react-slick";
import {Card , Row , Col } from 'react-bootstrap'
import { data  , PaginationData} from '../DataFake/Product1'
import Slick from './Slick'
import img_ship from '../images/icon-ship2.png'
import img_sale from '../images/saleproduct.png'
const settings = {
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
        {   
          breakpoint: 1024,
          settings: {
            slidesPerRow: 2,
            slidesToShow: 2,
            infinite: true,
            
          }
        },
        {   
            breakpoint: 991,
            settings: {
                slidesPerRow: 2,
                slidesToShow: 1,
                infinite: true,
              
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesPerRow: 2,
            slidesToShow: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesPerRow: 2,
            slidesToShow: 1,
          }
        }
    ]
}
const ProductItem = () => {
    const [Product1 , setProduct] = useState([])
    useEffect(() => {
        const loadItem = async () => {
            const sale = data
            const limit = PaginationData(data).length
            console.log(limit)
            await setProduct(sale)
        }
        loadItem()
    },[])
    return(
        <Slick settings={settings}>
        {Product1.map((item , index) => (
                    <div key={index} className="position-relative sale__item">
                    <Card className="card__item position-static">
                        {item.is_sale && (
                            // <img src={img_sale} alt="" className="d-block sale position-absolute" style={{top : '10px' , right : '10px'}} /> 
                            <div className="d-block sale position-absolute p-2" style={{ zIndex : '10000' ,top : '30px' , right : '20px' , backgroundImage : `url(${img_sale})` , backgroundRepeat : 'no-repeat' , backgroundSize : 'cover'}}>
                                <b className="d-block" style={{color : '#fff' , textAlign : 'center' , fontSize : '0.7em'}}>50%</b>
                            </div>

                        )}
                        <div className="position-relative" style={{zIndex : '0'}}>
                        <Card.Img variant="top" src={item.img} />
                        {item.is_ship && (

                            <img src={img_ship} alt="" className="d-block sale position-absolute" style={{bottom : '0' , left : '0'}} />
                        )}
                        </div>
                        <Card.Body className="">
                            <div className="card-text" style={{fontSize : '0.8em'}}>
                                {item.text}
                                <Row>
                                    <Col className="px-0 py-2" >
                                        <p className="mb-0  mx-2 d-block"><b style={{color : 'red' , fontSize : '1.2em'}}>{`${item.price.toFixed(3)}đ`}</b></p>
                                    </Col>
                                    <Col  className="px-0">
                                        <p className=" text-center mb-0 d-block">da ban 2.3k san pham</p>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                        <p className=" mb-0 text-center position-absolute detail text-center" style={{background : 'red' , bottom : '-10px' , width : '90%' , margin : 'auto'}}>xem them cac san pham tuong tu</p>
                    </Card>
                </div>
            ))}
         
        </Slick>
      
    )
}
export default React.memo(ProductItem)