import React from 'react'
import { Routes, Route } from "react-router-dom"

import { HomePage, ProductList } from "../pages"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} end />
      <Route path='/productList' element={<ProductList />} />
    </Routes>
  )
}

export default AllRoutes