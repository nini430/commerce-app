import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import NotFoundImg from "../assets/notFound.webp"


const NotFoundContainer=styled.div`
    min-height:calc(100vh - 300px);
    margin-top:60px;
    ${tw`
        flex
        flex-col
        items-center
        gap-3
    `}

    img {
        width:auto;
        height:400px;
    }
`



const NotFound = () => {
  return (
    <NotFoundContainer>
        <h1 className='text-2xl lg:text-6xl font-extralight'>Page Not Found</h1>
        <img src={NotFoundImg} alt="" />
       <Link to="/"><button className='bg-green-600 text-white w-full p-3'>Home Page</button></Link> 
    </NotFoundContainer>
  )
}

export default NotFound;