import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducers, listCartItemsReducers, addItemToCartReducer, removeItemFromCartReducer } from '../redux/reducers/cartReducers'
import { getProductReducers, getProductDetailsReducers } from '../redux/reducers/productReducers'

const reducers = combineReducers({
    cartItemList: listCartItemsReducers,
    getProducts: getProductReducers,
    removeItemFromCart: removeItemFromCartReducer
    // addItemToCart: addItemToCartReducer
    // getProductDetails: getProductDetailsReducers
})

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;