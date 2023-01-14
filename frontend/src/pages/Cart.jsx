import styled from "styled-components"
import tw from "twin.macro"
import {Link} from "react-router-dom"
import { CardProduct } from "../components"
import { products } from "../data/products"


const CartContainer=styled.div`
    margin-top:60px;
    min-height:calc(100vh - 300px);
    ${tw`
        px-5
        lg:px-40

    `}
`

const ProductsContainer=styled.div`
    margin:20px 0;
    max-height:500px;
    overflow-y:auto;
    ${tw`
        flex
        flex-col
        gap-3
        lg:gap-5

    `}
`



const Cart = () => {
  return (
    <CartContainer>
        <div className="bg-blue-200 p-4 rounded-md flex justify-center font-bold text-blue-500">Total Cart Products (4)</div>
        <ProductsContainer className="products">
            {products.map(product=>(
                <CardProduct key={product.id} product={product}/>
            ))}
        </ProductsContainer>
        <p className="flex gap-2 w-full justify-end">
            <span className="uppercase text-gray-500 text-2xl">total:</span>
            <span className="font-bold text-2xl">$ 230</span>
        </p>
        <hr/>
        <div className="flex flex-col lg:flex-row gap-3 w-full justify-around my-10">
            <button className="px-10 py-4 w-[400px] bg-black text-white uppercase">continue shopping</button>
            <Link to="/shipping"><button className="px-10 py-4 w-[400px] bg-green-400 text-white uppercase">checkout</button></Link>
        </div>

    </CartContainer>
  )
}

export default Cart;