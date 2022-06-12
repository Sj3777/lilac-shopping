import * as actionTypes from "../constants/cartConstant";
import axios from "axios";
import { API } from "../../config";
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(data);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
    },
  });
  //can save to localStorage
  localStorage.setItem("cart", JSON.stringify(getState().cart));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  //remove localStorage
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const listCartItems = () => async (dispatch) => {
  let cartData = [];
  // const data = axios.get()
  try {
    dispatch({ type: actionTypes.CART_LIST_REQUEST });
    let url = `${API.localhost}/product/get-cart`;
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .get(url, {
        headers: {
          user_id: user._id,
        },
      })
      .then((res) => {
        console.log("api res FOR CART----", res.data.Data);
        dispatch({
          type: actionTypes.CART_LIST_SUCCESS,
          payload: res.data.Data,
        });
      })
      .catch((err) => {
        console.log("-----errr", err);
      });
    // dispatch({type: actionTypes.CART_LIST_SUCCESS, payload: cartData})
  } catch (error) {
    dispatch({
      type: actionTypes.CART_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addProductToCart = (new_product) => async (dispatch) => {
  const newCartProduct = {};
  try {
    console.log("------addProductToCart data from dispathc--", new_product);
    dispatch({ type: actionTypes.ADD_TO_CART_REQUEST });
    let url = `${API.localhost}/product/add-to-cart`;
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .post(url, new_product, {
        headers: {
          user_id: user._id,
        },
      })
      .then((res) => {
        console.log("api res FOR ADD TO CART----", res.data.data);
        dispatch({
          type: actionTypes.ADD_TO_CART_SUCCESS,
          payload: res.data.data,
        });
        window.location.reload();
        Toast.fire({
          icon: 'success',
          title: res.data.message
        })
      })
      .catch((err) => {
        console.log("-----errr", err);
      });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_TO_CART_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductFromCart = (product_id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.REMOVE_FROM_CART_REQUEST });
    let url = `${API.localhost}/product/remove-item-cart`;
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("------remove p_id", product_id)
    axios
      .post(url, product_id, {
        headers: {
          user_id: user._id,
        },
      })
      .then((res) => {
        console.log("api res FOR REMOVE TO CART----", res.data);
        Toast.fire({
          icon: 'success',
          title: res.data.message
        })
        dispatch({
          type: actionTypes.REMOVE_FROM_CART_SUCCESS,
          payload: res.data
        });
        
        window.location.reload();
        
      })
      .catch((err) => {
        console.log("-----errr", err);
      });
  } catch (error) {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
  }
};
