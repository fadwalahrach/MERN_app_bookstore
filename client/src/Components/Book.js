import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getBook } from '../redux/actions/bookActions'
import Loading from '../Shared/Loading'
import {useHistory} from 'react-router-dom'
const Book = ({location,match}) => {
    const dispatch = useDispatch()
    const bookDetails = useSelector(state => state.bookDetail)
    const {loading, book} = bookDetails
    const history = useHistory()
    const [qty, setQty] = useState(1)
    useEffect(()=>{
        dispatch(getBook(match.params.id))
    },[dispatch])
    
    const addToCart = () => { 
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        
        <div>
            {
                loading || Array.isArray(book)  ? <Loading/> :
                (
                    <>
                    <h1>{book.data.title}</h1>

                    <h3>Rating : {book.data.rating}</h3>
                    <h4>Price: {book.data.price}</h4>


                    <button onClick={addToCart}>Add To Cart</button>
                    </>
                )
            }
        </div>
    )
}

export default Book
