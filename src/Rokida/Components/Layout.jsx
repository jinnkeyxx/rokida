import React from 'react'
import Header from './Header'
import Banner from './Banner'
import BannerSub from './BannerSub'
import SaleItem from './SaleItem'
import '../css/Layout.less'
import '../css/Responesive.css'
const Layout = () => {
    return(
        <>
            <Header/>
            <Banner/>
            <BannerSub/>
            <SaleItem/>
        </>
    )
}
export default Layout