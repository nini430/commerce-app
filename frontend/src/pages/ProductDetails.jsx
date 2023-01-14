import styled from "styled-components"
import tw from "twin.macro"
import {Rating} from "react-simple-star-rating"

const DetailsContainer=styled.div`
    margin-top:60px;
    min-height:calc(100vh - 300px);
    ${tw`
        px-5
        lg:px-40
        
        
    `}
`

const DetailWrapper=styled.div`
    ${tw`
        flex
        flex-col
        lg:flex-row
        gap-1
        lg:gap-5
    `}
`

const LeftContainer=styled.div`
    height:500px;
    ${tw`
        w-1/2
      
    `}

    img {
        width:auto;
        height:100%;
    }
`

const RightContainer=styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        gap-2
        lg:gap-5
    `}
`

const TableContainer=styled.div`
    min-height:200px;
    align-self: flex-start;
    ${tw`
        border
        border-solid
        border-gray-300
        flex-col
        w-[350px]
        lg:w-[400px]
        
    `}
`

const TableItem=styled.div`
    
    ${tw`
        p-2
        lg:p-3
        flex
        justify-between
        border
        border-b-gray-400
    `}
`

const ReviewContainer=styled.div`
    margin-top:100px;
    ${tw`
        flex
        flex-col
        lg:flex-row
        px-5
        lg:px-40
        gap-1
        lg:gap-5
    `}
`

const Review=styled.div`
    ${tw`
        lg:w-1/2
        flex
        flex-col

    `}
`

const ProductDetails = () => {
  return (
    <DetailsContainer>
        <DetailWrapper>
        <LeftContainer>
                <img src="https://images.vans.com/is/image/VansEU/VN000EE3RED-HERO?$PDP-FULL-IMAGE$" alt="" />
            </LeftContainer>
            <RightContainer>
                <h1 className="font-bold text-xl lg:text-5xl">Woman Shoes</h1>
                <p className="text-gray-700 font-bold leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae odit tempora aliquam? Corporis inventore, illo facilis modi doloribus deleniti nulla porro unde neque iste nobis dolorum voluptatum enim nisi aperiam, vero quisquam saepe asperiores, ab recusandae! Dicta, ad consequatur.</p>
                <TableContainer>
                    <TableItem >
                        <p className="text-gray-500 font-extrabold text-xl">Price</p>
                        <p className="font-extrabold text-xl">$ 89</p>
                    </TableItem>
                    <TableItem>
                        <p className="text-gray-500 font-extrabold text-xl">Status</p>
                        <p className="font-extrabold text-xl">In Stock</p>
                    </TableItem>
                    <TableItem>
                        <p className="text-gray-500 font-extrabold text-xl">Reviews</p>
                        <div className="flex items-center gap-1">
                            <Rating readonly SVGclassName="inline-block" initialValue={4}/>
                                <span className="text-gray-500">4 reviews</span>
                        </div>
                    </TableItem>
                    <TableItem>
                        <p className="text-gray-500 font-extrabold">Quantity</p>
                        <select className="border border-solid border-gray-400 px-2">
                        {[1,2,3,4,5].map(item=>(
                            <option key={item}>{item}</option>
                        ))}
                        </select>
                    </TableItem>
                    <button className="uppercase bg-black text-white p-3 w-full">add to cart</button>
                </TableContainer>
            </RightContainer>
        </DetailWrapper>
            
           <ReviewContainer>
                <Review>
                    <h2 className="uppercase text-gray-300 text-xl">reviews</h2>
                    <div className="p-3 mt-2 bg-blue-400 text-white rounded-md ">No Reviews</div>
                    <div className=" mt-3 flex flex-col gap-2 bg-slate-100 p-3 rounded-md">
                            <h4 className="font-bold text-lg">John Doe</h4>
                            <Rating size={15} SVGclassName="inline-block" readonly initialValue={3}/>
                            <span className="text-gray-600 text-sm">January 2022</span>
                            <div className="p-2 bg-blue-400 rounded-md text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nostrum fugiat consectetur debitis saepe nemo, tempora culpa totam ipsam qui veniam reiciendis dolor, consequuntur, incidunt ab atque et. Asperiores culpa et neque ea dolores quis id, tenetur odio cumque sint.</div>
                    </div>
                </Review>
                <Review>
                    <h2 className="uppercase text-gray-300 text-xl">write a customer review</h2>
                    <div className="flex flex-col">
                        <h4 className="font-bold text-base">Rating</h4>
                        <select className="p-2 mt-1 border bg-slate-100 outline-none rounded-md">
                            <option value={1}>1- Poor</option>
                            <option value={1}>2-  Fair</option>
                            <option value={1}>3- Good</option>
                            <option value={1}>4- Very Good</option>
                            <option value={1}>5- Excellent</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <h4 className='font-bold text-base'>Comment</h4>
                        <textarea rows={4} className="outline-none bg-slate-100 p-2" placeholder="Type comment...">
                            
                        </textarea>
                        <button className="uppercase bg-black text-white p-3 w-full">Submit</button>
                    </div>
                    <div className="p-2 mt-2 bg-yellow-200">Please Login to Write a review *</div>
                </Review>
           </ReviewContainer>
    </DetailsContainer>
  )
}

export default ProductDetails