import React, { useState, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { API } from "../../config";
import axios from "axios";
import './cart-style.css'
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, listCartItems, removeProductFromCart } from "../../redux/actions/cartAction";
// export default function cartCard(item) {

//     // const updateCart = (item) => {
//     //     const cred = { user_id: item.user_id, product_id: item.product_id._id, }
//     //     let url = `${API.localhost}/product/add-to-cart`;
//     //     axios.post(url, cred).then((res) => {
//     //         console.log("api res---- update cart", res.data)
//     //         // setCart([...cartItem, {...item, product_qty: res.data.product_qty}])
//     //         // setCart(cartItem.map((val) =>
//     //         //     (item.product_id._id == val.product_id._id) ?
//     //         //         { ...val, product_qty: res.data.data.product_qty } : val))
//     //         // console.log('----------get item filter', cartItem.filter((val) => { return val }))

//     //     }).catch((err) => {
//     //         console.log("-----errr", err)
//     //     })
//     // }

//     )
// }

function CartCard(item) {
  const dispatch = useDispatch();
  const data = item.cartItem.product_id;
  const getItemQty = useSelector((state) => state.cartItemList.cartItems)
  // console.log( "=======cart qty change------", getItemQty);
  const addItemToCartHandler = () => {
    // console.log("----clicked", item)
    const cred = {
      product_id: item.cartItem.product_id._id,
      cart_action: true,
    };
    dispatch(addProductToCart(cred))
  };
  const removeItemFromCartHandler = () => {
    // console.log("----clicked", item)
    const cred = {
      product_id: item.cartItem.product_id._id,
      cart_action: false,
    };
    dispatch(addProductToCart(cred))
  };

  const handlecartItemDelete = () => {
    const cred = {product_id: data._id}
    dispatch(removeProductFromCart(cred))
  }
  const productQty =
    Number(item.cartItem.product_id.p_price) * item.cartItem.product_qty;
  
  // const [qty, setQty] = useState(item.cartItem.product_qty);
  // useEffect(()=>{
  //   dispatch(listCartItems())
  // },[dispatch])
  // console.log("-----itemmmmmmmmm", item.cartItem)
  return (
    <>
      <div className="cart-list product d_flex" key={item.id}>
        <div className="img">
          <img src={data.p_image} alt="" />
        </div>
        <div className="cart-details">
          <h3>{data.p_name}</h3>
          <h5>{data.p_description}</h5>
          <h4>
            ${data.p_price}.00 * {item.cartItem.product_qty}
            <span>${productQty}.00</span>
          </h4>
        </div>
        <div className="cart-items-function">
          <div className="removeCart">
            <button className="removeCart">
              <i className="fa-solid fa-xmark item_cursor" onClick={handlecartItemDelete}></i>
            </button>
          </div>
          <div className="cartControl d_flex">
            <button className="incCart item_cursor" onClick={addItemToCartHandler}>
              <FiPlus />
            </button>
            <p>{item.cartItem.product_qty}</p>
            {/* <input
              readonly
            /> */}
            <button className="desCart item_cursor"  onClick={removeItemFromCartHandler}>
              <FiMinus />
            </button>
          </div>
        </div>

        <div className="cart-item-price"></div>
      </div>
    </>
  );
}

export default CartCard;
