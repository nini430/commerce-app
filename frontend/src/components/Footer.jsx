import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"
import Visa from "../assets/visa.png"
import AmericanExpress from "../assets/express.png"
import Mastercard from "../assets/mastercard.png"
import Discover from "../assets/discover.jfif"
import Paypal from "../assets/paypal.webp"

const FooterContainer=styled.div`
    height:100px;
    ${tw`
        w-full
        bg-gray-300
        flex
        justify-center
        items-center
        gap-3
        lg:gap-6
    `}

    img {
        width:auto;
        height:30px;
    }
`

const Footer = () => {

  return (
    <FooterContainer>
        <img src={Visa} alt=""/>
        <img src={AmericanExpress} alt=""/>
        <img src={Discover} alt=""/>
        <img src={Paypal} alt=""/>
        <img src={Mastercard} alt=""/>
    </FooterContainer>
  )
}

export default Footer;