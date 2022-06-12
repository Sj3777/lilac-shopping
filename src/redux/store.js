import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducers, listCartItemsReducers } from '../redux/reducers/cartReducers'
import { getProductReducers, getProductDetailsReducers } from '../redux/reducers/productReducers'

const reducers = combineReducers({
    cartItemList: listCartItemsReducers,
    getProducts: getProductReducers,
    // getProductDetails: getProductDetailsReducers
})

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;