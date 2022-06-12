import * as actionTypes from '../constants/cartConstant'

export const cartReducers = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const existItems = state.cartItems.find((x) => x.product === item.product)

            if(existItems){
              return {
                ...state,
                cartItems: state.cartItems.map((x) => x.product === existItems.product ? item : x)
              }
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }

        default:
            return state;
    }
}

export const listCartItemsReducers = ( state = { cartItems: [] }, action ) => {
    switch (action.type) {
        case actionTypes.CART_LIST_REQUEST:
            return {
                loading: true,
                cartItems: []
            }
        case actionTypes.CART_LIST_SUCCESS:
            return {
                loading: false,
                cartItems: action.payload
            }
        case actionTypes.CART_LIST_FAILURE:
            return {
                loading: false,
                cartItems: action.payload
            }
        default:
            return state;
    }
}