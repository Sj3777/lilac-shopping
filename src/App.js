import React, { useState, useEffect } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import ShopX from "./ShopX"
import Cart from  "../src/pages/Cart"
import Register from './pages/Register/Register'
import Test from './pages/Test'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as AllProducts } from './redux/actions/productAction'
function App() {

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<ShopX/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/cart' exact element={<Cart />}/>
          <Route path='/register' exact element={<Register/>}/>
          {/* <Route path='/test' exact element={<Test/>}/> */}
        </Routes>
        
      </Router>
    </>
  )
}

export default App
