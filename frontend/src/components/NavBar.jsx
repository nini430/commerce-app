import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"
import {FaFacebook,FaInstagram,FaPinterest,FaLinkedin,FaYoutube} from "react-icons/fa"
import {useMediaQuery} from "react-responsive"
import { SCREENS } from '../utils/screens'


const NavBarContainer=styled.div`
    min-height:70px;
    ${tw`
        bg-green-600
        flex
        items-center
        justify-around
        lg:pl-12
        lg:pr-12
        pl-3
        pr-3
    `}
`

const LeftPart=styled.div`
    ${tw`
        flex
        items-center
        gap-3
        lg:gap-7
        text-white
        font-bold
        text-base
        lg:text-lg
    `}
`
    
const RightPart=styled.div`
    ${tw`
        flex
        items-center
        gap-3
        lg:gap-7
        text-white
        

    `}
`

const NavBar = () => {
   const isMobile=useMediaQuery({maxWidth:SCREENS.sm})
  return (
   <NavBarContainer>
    <LeftPart>
        <p>+234 554 345</p>
        <p>info@ninako.com</p>
    </LeftPart>
    <RightPart>
        <FaFacebook size={isMobile?15:30}/>
        <FaInstagram size={isMobile?15:30}/>
        <FaLinkedin size={isMobile?15:30}/>
        <FaPinterest size={isMobile?15:30}/>
        <FaYoutube size={isMobile?15:30}/>
    </RightPart>
   </NavBarContainer>
  )
}

export default NavBar;