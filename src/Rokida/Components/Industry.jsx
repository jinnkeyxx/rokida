import React from 'react'
import Header from './Header'
import Banner from './Banner'
import BannerSubIndus from './BannerSub-Indus'
import FashionWoman from './FashionWoman'
import CarauseoProduct from './CarauseoProduct'
import '../css/Layout.less'
import '../css/Responesive.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer'
import ProductShow from './ProductShow'
import ProductList from './ProductList'

const Industry = () => {
    return(
        <>
            <Header/>
            <Banner/>
            <BannerSubIndus/>
            <ProductList/>
            <FashionWoman/>
            <CarauseoProduct/>
            <ProductShow/>
            <Footer/>
        </>
    )
}
export default Industry