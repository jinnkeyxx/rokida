import React from 'react'
import HeaderLogo from './HeaderLogo';
import '../css/Layout.less'
import '../css/Responesive.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer'
import InforLogin from './InforLogin';


const UserLogin = () => {
    return(
        <>
            <HeaderLogo/>
            <InforLogin/>
            <Footer/>
        </>
    )
}
export default UserLogin
