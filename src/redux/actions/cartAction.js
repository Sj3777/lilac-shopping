import * as actionTypes from '../constants/cartConstant';
import axios from 'axios'
import { API } from '../../config'
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(data);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
        }
    });
    //can save to localStorage
    localStorage.setItem('cart', JSON.stringify(getState().cart));
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    //remove localStorage
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}

export const listCartItems = () => async (dispatch) => {
    let cartData = []
    // const data = axios.get()
    try {
        dispatch({type: actionTypes.CART_LIST_REQUEST})
        let url = `${API.localhost}/product/get-cart`;
        const user = JSON.parse(localStorage.getItem('user'))
        axios.get(url, {
            headers: {
              'user_id': user._id
            }
          }).then((res) => {
            console.log("api res FOR CART----", res.data.Data)
            dispatch({ 
                type: actionTypes.CART_LIST_SUCCESS,
                payload: res.data.Data
            })
          }).catch((err) => {
            console.log("-----errr", err)
          })
        // dispatch({type: actionTypes.CART_LIST_SUCCESS, payload: cartData})
    } catch (error) {
        dispatch({
            type: actionTypes.CART_LIST_FAILURE, 
            payload: error.response && error.response.data.message
                      ? error.response.data.message
                      : error.message
        })
    }
}