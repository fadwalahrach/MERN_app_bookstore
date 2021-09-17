import { ADD_TO_CART } from "../constants/cartConstants"

import axios from 'axios'

export const addToCart = (id , qty) => async(dispatch, getState) => {
    try{
        const {data} = await axios.get(`/books/${id}`)

        dispatch({
            type: ADD_TO_CART,
            payload: {
                book_id: data._id,
                book: data.title,
                price: data.price,
                image: data.image,
                countInStock: data.countInStock,
                qty
            }
        })
            localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

    }
    catch(error){

    }
}