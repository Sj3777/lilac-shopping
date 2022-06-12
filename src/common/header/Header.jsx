import React from "react"
import "./header-style.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  return (
    <>
      {/* <Head /> */}
      <Search CartItem={CartItem} />
      <Navbar />
    </>
  )
}

export default Header
