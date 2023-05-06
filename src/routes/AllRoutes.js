import React from 'react'
import { Routes, Route } from "react-router-dom"

import { HomePage, ProductDetail, ProductList } from "../pages"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} end />
      <Route path='/products' element={<ProductList />} />
      <Route path='/products/:id' element={<ProductDetail />} />
    </Routes>
  )
}

export default AllRoutes