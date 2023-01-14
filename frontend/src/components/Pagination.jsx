import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'


const PaginationContainer=styled.div`
    max-width:300px;
margin:40px auto 0 auto;
    ${tw`

        flex
        gap-3
        lg:gap-4
    `}
`

const PaginationItem=styled.button`
    width:50px;
    height:40px;
    border:1px solid gray;
    padding:5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background:whitesmoke;
    }
`




const Pagination = () => {
  return (
    <PaginationContainer>
        <PaginationItem className='active' >1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>5</PaginationItem>
    </PaginationContainer>
  )
}

export default Pagination;