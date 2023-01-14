import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"


const NewsLetterContainer=styled.div`
    height:300px;
    margin-top:20px;
    background:url("https://media.rackroomshoes.com/img/events/2023/clearance/homepage/20221228-cb-run.jpg") center;
    background-repeat: no-repeat;
    background-size:cover;
    ${tw`
        w-full
        flex
        flex-col
        items-center
        justify-center
    `}
`

const Title=styled.h1`
    ${tw`
        text-lg
        lg:text-2xl
        
        font-bold
        uppercase
    `}
`

const InputContainer=styled.div`
    margin-top:20px;
    ${tw`
        flex
        items-center
        relative
    `}

    
`



const NewsLetter = () => {
  return (
    <NewsLetterContainer>
        <Title> do you need more tips?</Title>
        <p className='font-bold mt-2 '>Sign Up and get the latest tips</p>
        <InputContainer>
        <input className='outline-none min-w-[300px] lg:min-w-[400px] p-2.5 rounded-[20px]' placeholder='Your E-mail' type="text" />
        <button className='absolute uppercase bg-green-600 text-white right-0 py-2.5 px-1.5 lg:px-2.5 rounded-[20px]'>yes, i want</button>
        </InputContainer>
    </NewsLetterContainer>
  )
}

export default NewsLetter;