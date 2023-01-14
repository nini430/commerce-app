import styled from "styled-components";
import tw from "twin.macro";
import {RxAvatar} from "react-icons/rx"
import {FaBus} from "react-icons/fa"
import {MdLocationOn} from "react-icons/md"
import {products} from "../data/products"
import {CardProduct} from "../components";


const OrderContainer=styled.div`
    margin-top:60px;
    min-height:calc(100vh - 300px);
    ${tw`
        px-5
        lg:px-40

    `}
`

const InfoContainer=styled.div`
    height:150px;
    ${tw`
        w-full
        flex
        items-center
        justify-around
        bg-green-100
    `}
`

const BottomContainer=styled.div`
    margin-top:20px;
    ${tw`
        flex
        gap-2
        lg:gap-4
    `}
`

const ProductsContainer=styled.div`
    max-height:450px;
    overflow-y:auto;
    ${tw`
        w-2/3
        flex
        flex-col
        gap-2
    `}
`

const SummaryContainer=styled.div`
    max-height:220px;
    margin-top:20px;
   
    ${tw`
        w-1/3
        flex
        flex-col
       
    `}
`

const SummaryItem=styled.div`
    
    ${tw`
        py-3
        w-full
        flex
       border
       border-gray-300
        

    `}

    &:last-child {
        ${tw`
            border-none
        `}
    }
`





const PlaceOrder = ({confirmed}) => {
  return (
   <OrderContainer>
    <InfoContainer>
        <div className="flex gap-3 items-center">
     
            <RxAvatar size={100}/>
            <div className="flex flex-col gap-3">
                <h2 className="font-extrabold text-2xl">Customer</h2>
                <h2 className="font-bold text-xl text-green-600">John Doe</h2>
                <p className="text-green-600 font-bold">johndoe@gmail.com</p>
            </div>
        
        </div>
        <div className="flex gap-3 items-center">
     
            <FaBus size={100}/>
            <div className="flex flex-col gap-3">
                <h2 className="font-extrabold text-2xl">Order Info</h2>
                <h2 className="font-bold text-xl text-green-600">Shipping:Georgia</h2>
                <p className="text-green-600 font-bold">Payment Method:Paypal</p>
                {confirmed && (<div className="bg-blue-300 p-1 text-white text-center">Paid at january 6</div>)}
            </div>
        
        </div>
        <div className="flex gap-3 items-center">
     
            <MdLocationOn size={100}/>
            <div className="flex flex-col gap-3">
                <h2 className="font-extrabold text-2xl">Deliver To</h2>
                <h2 className="font-bold text-xl text-green-600">Address: Washington 16</h2>
                <p className="text-green-600 font-bold">Crater: po 575847 A12</p>
                {confirmed && (<div className="bg-red-500 p-1 text-center text-white">Not Delivered</div>)}
            </div>
        
        </div>
    </InfoContainer>
        <BottomContainer>
                <ProductsContainer className="products">
                    {products.map(product=>(
                        <CardProduct product={product} order/>
                    ))}
                </ProductsContainer>
                <SummaryContainer>
                        <SummaryItem>
                            <span className="w-1/2 font-bold text-xl flex justify-center">Products</span>
                            <span className="w-1/2 flex justify-center text-gray-400 font-bold">$345</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span className="w-1/2 font-bold text-xl flex justify-center">Shipping</span>
                            <span className="w-1/2 flex justify-center text-gray-400 font-bold">$345</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span className="w-1/2 font-bold text-xl flex justify-center">Tax</span>
                            <span className="w-1/2 flex justify-center text-gray-400 font-bold">$345</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span className="w-1/2 font-bold text-xl flex justify-center">Total</span>
                            <span className="w-1/2 flex justify-center text-gray-400 font-bold">$345</span>
                        </SummaryItem>
                        <button className="w-full bg-green-400 uppercase text-white font-bold mt-3 p-2">place order</button>
                </SummaryContainer>
        </BottomContainer>
   </OrderContainer>
  )
}

export default PlaceOrder;