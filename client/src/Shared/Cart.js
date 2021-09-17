import React, {useEffect} from 'react'
import {useLocation, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'

const Cart = ({location}) => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems} = cart
    const idBook= location.pathname.split('/')[2]
    const qtyBook = location.search.split('=')[1]
    
    useEffect(()=>{
        dispatch(addToCart(idBook, qtyBook))
    },[dispatch])
    console.log(cartItems)
    return (
        <div>
            CART
        </div>
    )
}

export default Cart
