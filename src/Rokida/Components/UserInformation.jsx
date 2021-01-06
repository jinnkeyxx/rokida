import React from 'react'
import HeaderLogo from './HeaderLogo';
import HeaderNew from './HeaderNew';
import '../css/Layout.less'
import '../css/Responesive.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer'
import SocialLine from './SocialLine';
import Information from './Information';


const UserInformation = () => {
    return(
        <>
            <HeaderLogo/>
            <HeaderNew/>
            <Information/>
            <SocialLine/>
            <Footer/>
        </>
    )
}
export default UserInformation