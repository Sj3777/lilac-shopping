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

export const addItemToCartReducer = (state = { newCartItem: []}, action) => {
    console.log("-------cart reducers", ...state.cartItems)
    switch (action.type) {
        case actionTypes.ADD_TO_CART_REQUEST:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case actionTypes.ADD_TO_CART_SUCCESS:
            return {
                loading: false,
                newCartItem: action.payload
            }
        case actionTypes.ADD_TO_CART_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const removeItemFromCartReducer = (state = { newCartItem: []}, action) => {
    // console.log("-------cart reducers", state.cartItems)
    switch (action.type) {
        case actionTypes.REMOVE_FROM_CART_REQUEST:
            return {
                ...state,
                // cartItems: [...state.cartItems, action.payload]
            }
        case actionTypes.REMOVE_FROM_CART_SUCCESS:
            // const newItems = state.cartItems.filter((x) => {
            //    return x._id !== action.payload._id
            // })
            return {
                loading: false,
                newCartItem: action.payload
            }
        case actionTypes.REMOVE_FROM_CART_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

