import React from 'react'
import Header from './Header'
import Banner from './Banner'
import BannerSub from './BannerSub'
import SaleItem from './SaleItem'
import CarauseoProduct from './CarauseoProduct'
import HotItem from './HotItem'
import SuperSale from './SuperSale'
import Suggestion from './Suggestion'
import Partner from './Partner'
import RokidaMall from './RokidaMall'
import '../css/Layout.less'
import '../css/Responesive.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer'
const HomePage = () => {
    return(
        <>
            <Header/>
            <Banner/>
            <BannerSub/>
            <SaleItem/>
            <CarauseoProduct/>
            <HotItem/>
            <SuperSale/>
            <RokidaMall/>
            <Suggestion/>
            <Partner/>
            <Footer/>
        </>
    )
}
export default HomePage