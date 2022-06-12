//import React, { useState } from "react"

//const ShopCart = ({ addToCart, shopItems }) => {
//  const [count, setCount] = useState(0)
//  const increment = () => {
//    setCount(count + 1)
//  }

//  return (
//    <>
//      {shopItems.map((shopItems) => {
//        return (
//          <div className='product mtop'>
//            <div className='img'>
//              <span className='discount'>{shopItems.discount}% Off</span>
//              <img src={shopItems.cover} alt='' />
//              <div className='product-like'>
//                <label>{count}</label> <br />
//                <i className='fa-regular fa-heart' onClick={increment}></i>
//              </div>
//            </div>
//            <div className='product-details'>
//              <h3>{shopItems.name}</h3>
//              <div className='rate'>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//              </div>
//              <div className='price'>
//                <h4>${shopItems.price}.00 </h4>
//                <button onClick={() => addToCart(shopItems)}>
//                  <i className='fa fa-plus'></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        )
//      })}
//    </>
//  )
//}

//export default ShopCart

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addProductToCart } from "../../redux/actions/cartAction";

const ShopCart = ({ item }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    // e.preventDefault();
    console.log("cart item is clicked", item);
    const cred = {
      product_id: item._id,
      cart_action: true,
    };
    console.log("cart item is clicked", cred);
    dispatch(addProductToCart(cred));
  };

  return (
    <>
      <div className="box">
        <div className="product_view">
          <div className="img">
            <span className="discount">{item.discount}% Off</span>
            <img src={item.p_image} alt="" className="prod_img" />
            <div className="product-like">
              {/* <label>{count}</label> <br /> */}
              <i className="fa-regular fa-heart" onClick={increment}></i>
            </div>
          </div>
          <div className="product-details">
            <h3>{item.p_name}</h3>
            <div className="rate">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="price">
              <h4>${item.p_price}.00 </h4>
              {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
              <button onClick={addItemToCartHandler}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart;
