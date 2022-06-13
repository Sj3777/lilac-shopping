import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from "../common/Cart/Cart"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
import { API } from '../config'
import axios from 'axios'
export default function () {
  // const user = JSON.parse(localStorage.getItem('user'))
  // let totalPrice, tax, deliveryCharge, grandTotal;
  const [cartItem, setCart] = useState([])
  // useEffect(() => {
  //   getCartItems();
  //    totalPrice = cartItem.reduce((price, item) => price + item.product_id.p_qty * item.product_id.p_price, 0)
  //    tax = (totalPrice * 18 / 100)
  //    deliveryCharge = (totalPrice * 2 / 100)
  //    grandTotal = totalPrice + tax + deliveryCharge
    
  // }, [])
  // const getCartItems = () => {
  //   let url = `${API.localhost}/product/get-cart`;
  //   axios.get(url, {
  //     headers: {
  //       'user_id': user._id
  //     }
  //   }).then((res) => {
  //     console.log("api res----", res.data.Data)
  //     setCart(res.data.Data)
  //   }).catch((err) => {
  //     console.log("-----errr", err)
  //   })
  // }
  //Step 4 :
//   const addToCart = (product) => {
//     // if hamro product alredy cart xa bhane  find garna help garxa
//     const productExit = CartItem.find((item) => item.id === product.id)
//     // if productExit chai alredy exit in cart then will run fun() => setCartItem
//     // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
//     // gayara check garxa if item.id ra product.id chai match bhayo bhane
//     // productExit product chai display garxa
//     // ani increase  exits product QTY by 1
//     // if item and product doesnt match then will add new items
//     if (productExit) {
//       setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
//     } else {
//       // but if the product doesnt exit in the cart that mean if card is empty
//       // then new product is added in cart  and its qty is initalize to 1
//       setCartItem([...CartItem, { ...product, qty: 1 }])
//     }
//   }

//   // Stpe: 6
  // const decreaseQty = (product) => {
  //   // if hamro product alredy cart xa bhane  find garna help garxa
  //   const productExit = CartItem.find((item) => item.id === product.id)

  //   // if product is exit and its qty is 1 then we will run a fun  setCartItem
  //   // inside  setCartItem we will run filter to check if item.id is match to product.id
  //   // if the item.id is doesnt match to product.id then that items are display in cart
  //   // else
  //   if (productExit.qty === 1) {
  //     setCartItem(CartItem.filter((item) => item.id !== product.id))
  //   } else {
  //     // if product is exit and qty  of that produt is not equal to 1
  //     // then will run function call setCartItem
  //     // inside setCartItem we will run map method
  //     // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
  //     setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
  //   }
  // }
  
  return (
    <>
      <Header />
      <Routes>  
        <Route path='/' exact element={<Cart />}>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}
