import React, {useEffect} from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./shop-style.css"
import {FaHotjar} from 'react-icons/fa'
import { useSelector, useDispatch } from "react-redux";
import { getProducts as AllProducts } from "../../redux/actions/productAction";
const Shop = ({ addToCart, shopItems }) => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  console.log("redux succcesss FROM FLASH----->", getProducts);
  useEffect(() => {
    dispatch(AllProducts());
  }, [dispatch]);
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          {/* <Catg /> */}

          <div className='shop_cont'>
            <div className='heading d_flex'>
              <div className='heading-left row f_flex'>
                <FaHotjar className='icons_hot'/> <h2>Exclusive</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product_content grid1'>
              {getProducts.products.map((item) => {
                return (<ShopCart item={item}/>)
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
