import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from '../reducers/userReducer'

const reducers = combineReducers({
    userLogin: userReducer
})

const middleware = [thunk]
//

const userLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userLogin: userLocalStorage }
}

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store