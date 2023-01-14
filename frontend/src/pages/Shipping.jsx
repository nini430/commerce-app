import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import tw from "twin.macro"


const ShippingContainer=styled.div`
       margin-top:80px;
       min-height:calc(100vh - 320px);
       ${tw`
        flex
        justify-center
       `}

       

`

const Shipping = () => {
  return (
    <ShippingContainer>
       <form className='flex flex-col shadow-md rounded-md p-3 gap-2 w-[300px] lg:w-[500px] h-[500px]'>
        <h1 className='uppercase text-center font-semibold text-gray-400 text-3xl mb-1'>delivery address</h1>
        <div className='flex flex-col'>
            <label className='text-xl mb-1'>Enter Address</label>
            <input className='border border-solid p-3 outline-none' type="text" />
        </div>
        <div className='flex flex-col'>
            <label className='text-xl mb-1'>Enter City</label>
            <input className='border border-solid p-3 outline-none' type="text" />
        </div>
        <div className='flex flex-col'>
            <label className='text-xl mb-1'>Enter Postal Code</label>
            <input className='border border-solid p-3 outline-none' type="text" />
        </div>
        <div className='flex flex-col'>
            <label className='text-xl mb-1'>Enter Country</label>
            <input className='border border-solid p-3 outline-none' type="text" />
        </div>
        <Link to="/payment"><button className='mt-1 uppercase text-white bg-green-500 p-4 w-full'>continue</button></Link>
       </form>
    </ShippingContainer>
  )
}

export default Shipping;