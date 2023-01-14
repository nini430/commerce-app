import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"


const PaymentContainer=styled.div`
    margin-top:80px;
    min-height:calc(100vh - 320px);
    ${tw`
        flex
        justify-center
    `}

    
`

const Payment = () => {
  return (
    <PaymentContainer>
        <form className='flex flex-col p-3 rounded-md shadow-lg w-[300px] lg:w-[500px] h-[150px]'>
            <h1 className='text-center uppercase text-xl'>select payment method</h1>
            <div className='flex mt-6'>
            <input  className='mr-2 accent-green-400' id="pay" type="radio"/>
                <label htmlFor='pay'>Paypal Or Credit Card</label>
                
            </div>
            <button className='p-3 bg-green-500 w-full text-white uppercase'>continue</button>
            
        </form>
    </PaymentContainer>
  )
}

export default Payment;