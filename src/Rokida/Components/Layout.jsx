import React from 'react'
import Header from './Header'
import Banner from './Banner'
import BannerSub from './BannerSub'
import SaleItem from './SaleItem'
import CarauseoProduct from './CarauseoProduct'
import '../css/Layout.less'
import '../css/Responesive.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Layout = () => {
    return(
        <>
            <Header/>
            <Banner/>
            <BannerSub/>
            <SaleItem/>
            <CarauseoProduct/>
        </>
    )
}
export default Layout