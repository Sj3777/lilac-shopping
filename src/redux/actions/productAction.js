import * as actionTypes from '../constants/productConstant';
import axios from 'axios'
import { API } from '../../config'
export const getProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCTS_REQUEST
        });

        let url = `${API.localhost}/product/get-product`;
        axios.get(url).then((res) => {
            console.log("api res----", res.data.Data)
            dispatch({ 
                type: actionTypes.GET_PRODUCTS_SUCCESS,
                payload: res.data.Data
            })
          }).catch((err) => {
            console.log("-----errr", err)
          })

        
    } catch (error) {
        dispatch({ 
            type: actionTypes.GET_PRODUCTS_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const getProductDetails = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_REQUEST
        });
        const { data } = await axios.get("")

        dispatch({ 
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({ 
            type: actionTypes.GET_PRODUCT_DETAILS_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    })
}