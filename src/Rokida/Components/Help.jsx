import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderNew from './HeaderNew'
import Question from './_Question'
import AboutContent from './AboutContent'
import SocialLine from './SocialLine'
import CarauseoProduct from './CarauseoProduct'
import '../css/Layout.less'
import '../css/Responesive.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer'

const Help = () => {
    return(
        <>
            <HeaderLogo/>
            <HeaderNew/>
            <AboutContent/>
            <Question/>
            <CarauseoProduct/>
            <SocialLine/>
            <Footer/>
        </>
    )
}
export default Help