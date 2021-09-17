import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from '../reducers/userReducer'
import { bookDetailReducer, bookReducer } from '../reducers/bookReducer'
import { cartReducer } from '../reducers/cartReducer'

const reducers = combineReducers({
    userLogin: userReducer,
    bookStore: bookReducer,
    bookDetail: bookDetailReducer,
    cart: cartReducer
})

const middleware = [thunk]
//

const userLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const cartItemStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('carItems')) : null

const initialState = {
    userLogin: {userLogin: userLocalStorage },
    cart: {cartItems: cartItemStorage}
}

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store