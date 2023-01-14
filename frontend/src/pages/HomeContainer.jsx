import React from 'react'
import {Contacts, NewsLetter, Pagination, ProductList} from "../components"

const HomeContainer = () => {
  return (
    <div>
        <ProductList/>
        <Pagination/>
        <NewsLetter/>
        <Contacts/>
        
    </div>
  )
}

export default HomeContainer;