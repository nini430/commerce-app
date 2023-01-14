import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"
import {products} from "../data/products"
import Product from './Product'

const ProductsContainer=styled.div`
margin-top:60px;
    ${tw`
    px-5
        lg:px-40
        flex
        flex-wrap
        gap-4
        lg:gap-8
    `}
`



const ProductList = () => {
  return (
    <ProductsContainer>
        {products.map(product=>(
            <Product key={product.id} product={product}/>
        ))}
    </ProductsContainer>
  )
}

export default ProductList