import React from "react"
import logo from "../../components/assets/images/Logo.png"
import { useNavigate } from "react-router-dom"
import {FaShoppingCart} from 'react-icons/fa'
import {IoPersonSharp, IoSearch} from "react-icons/io5";
const Search = ({ CartItem }) => {

  const history = useNavigate()
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const goCart = () => {
    history('/cart')
  }

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <IoSearch className="search_icon2"/>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <div className="cart"><IoPersonSharp className="search_icon"/></div>
            <div className='cart'>
              <div onClick={goCart}>
              <FaShoppingCart className="search_icon"/>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
