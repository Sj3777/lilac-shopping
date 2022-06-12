import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
// import { BiPlus } from 'react-icons/bi'
import "./flash-style.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addProductToCart } from "../../redux/actions/cartAction";
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const FlashCard = ({ item }) => {
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
    <div className="box_flash">
      <div className="product_flash">
        <div className="img">
          <span className="discount">{item.discount}% Off</span>
          <img className="prod_img" src={item.p_image} alt="" />
          <div className="product-like">
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
        <div className="product-details">
          <h3>{item.p_name}</h3>
          <div className="rate">
            <AiFillStar className="star_icon" />
            <AiFillStar className="star_icon" />
            <AiFillStar className="star_icon" />
            <AiFillStar className="star_icon" />
            <AiFillStar className="star_icon" />
          </div>
          <div className="price">
            <h4>${item.p_price}.00 </h4>
            {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
            <button className="add_btn" onClick={addItemToCartHandler}>
             Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
