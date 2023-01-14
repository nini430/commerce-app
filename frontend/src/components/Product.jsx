import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"
import {Rating} from "react-simple-star-rating"
import {Link} from "react-router-dom"

const ProductContainer=styled.div`
    width:350px;
    height:450px;
    ${tw`
        flex
        flex-col
        p-1
        lg:p-2
        shadow-md
        gap-3
        cursor-pointer
        transition
        duration-500
        hover:scale-110
    `}
`


const ImageContainer=styled.div`
    width:auto;
    height:70%;
    display: flex;
    justify-content: center;

    img {
        width:auto;
        height:100%;

    }
`

const RateReviewContainer=styled.div`
    ${tw`
        flex
        gap-2
        items-center
    `}
`

const Product = ({product}) => {
  return (
    <Link to={`/product/${product.id}`}>
    <ProductContainer>
        <ImageContainer>
            <img src={product.image} alt=""/>
        </ImageContainer>
        <h3 className='text-lg font-bold'>{product.name}</h3>
        <RateReviewContainer>
        <Rating readonly SVGclassName='inline-block' initialValue={product.rating}/>
        <span className='text-gray-500 text-base font-bold'>{product.numReviews} reviews</span>
        </RateReviewContainer>
        <h2 className='text-2xl font-extrabold'>$ {product.price}</h2>
         
        
    </ProductContainer>
    </Link>
  )
}

export default Product