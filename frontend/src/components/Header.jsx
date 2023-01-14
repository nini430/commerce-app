import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import tw from "twin.macro"
import Logo from "../assets/logo.jpg"
import DropDown from "react-dropdown"
import {FaCartPlus} from "react-icons/fa"
import { useMediaQuery } from 'react-responsive'
import { SCREENS } from '../utils/screens'


const HeaderContainer=styled.div`
margin-top:20px;
    ${tw`
      flex
      items-center
      justify-around  
      lg:pl-12
      lg:pr-12
      pl-3
      pr-3
    `}
`

const LogoContainer=styled.div`
height:50px;
    ${tw`
       
        flex
     
        


    `}
    
    img {
      width:auto;
      height:100%;  
    }
`

const InputContainer=styled.div`

 ${tw`
    w-1/2
    flex
    items-center
    justify-center
 `}



 

    
`

const RightContainer=styled.div`
    ${tw`
     
        flex
        items-center
        gap-1
        lg:gap-2
    `}
`

const CartContainer=styled.div`
    ${tw`
        relative
        cursor-pointer

    `}
`

const Badge=styled.div`
    width:20px;
    height:20px;
    top:-8px;
    right:-8px;

    
    ${tw`
        absolute
        bg-red-500
        text-white
        rounded-full
        flex
        justify-center
        items-center
        text-sm

    `}
`



const Header = () => {
    const options=["Profile","Log Out"];
    const isMobile=useMediaQuery({maxWidth:SCREENS.sm});
  return (
    <HeaderContainer>
        <Link  to="/"><LogoContainer>
            <img  src={Logo} alt=""/>
        </LogoContainer></Link>
        <InputContainer>
        <input className='p-1 lg:p-2.5 w-[70%] border border-solid border-gray-800' type="text" placeholder="Search..."/>
        <button className='bg-black p-1 lg:p-2.5 text-white uppercase'>Search</button>
        </InputContainer>
        <RightContainer>
           <DropDown options={options} placeholder="Hi,Nini"/>
           <Link to="/cart">
           <CartContainer>
            <FaCartPlus size={isMobile?20:30}/>
            <Badge>4</Badge>
           </CartContainer></Link>
        </RightContainer>

    </HeaderContainer>
  )
}

export default Header;