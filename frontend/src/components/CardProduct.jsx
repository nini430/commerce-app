import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'

const ProductContainer=styled.div`
    ${tw`
        w-full
        flex
        items-center
        shadow-md
        relative
        
    `}

    img {
        width:auto;
        height:150px;
    }


`

const CardProduct = ({product,order}) => {
  return (
    <ProductContainer>
        <div className='w-1/4'>
        <img  src={product.image} alt="" />
        </div>
        <h2 className='w-1/4 font-bold text-xl'>{product.name}</h2>
        <div className=' w-1/4 flex flex-col'>
            <span className='uppercase text-lg text-gray-400'>quantity</span>
                <select className='border w-[60%]'>
                   { [1,2,3,4,5].map(item=>(
                        <option className='text-center'>{item}</option>
                    ))}
                </select>
        </div>
        <div className=' w-1/4 flex flex-col '>
            <span className='uppercase text-lg text-gray-400'>subtotal</span>
            <span>$ {product.price}</span>
        </div>
        {!order &&  <div className="absolute rounded-full w-[20px] h-[20px] bg-red-500 text-white flex justify-center items-center top-0 font-bold cursor-pointer">X</div>}
       
    </ProductContainer>
  )
}

export default CardProduct;