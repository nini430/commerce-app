import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'


const LoginContainer=styled.div`
    min-height:calc(100vh - 240px);

    ${tw`
        flex
        justify-center
        items-center
    `}
`

const Login = () => {
  return (
   <LoginContainer>
        <form className='flex flex-col gap-3 w-[400px] max-w-[600px] shadow-lg p-4'>
        <div className="flex flex-col">
            <label className='uppercase text-gray-500 text-lg' htmlFor="email">Email</label>
            <input className='p-1 border border-solid border-gray-400' type="text" />
        </div>
        <div className="flex flex-col">
            <label className='uppercase text-gray-500 text-lg' htmlFor="email">Password</label>
            <input className='p-1 border border-solid border-gray-400' type="text" />
        </div>
        <button className='uppercase bg-green-400 text-white w-full p-2'>login</button>
        <span className='text-gray-400 font-bold text-center'>Create new Account</span>
        </form> 
   </LoginContainer>
  )
}

export default Login;