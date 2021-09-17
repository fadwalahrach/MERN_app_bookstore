import React, {useState, useEffect} from 'react'
import Card from '../Shared/Card'
import {Link} from 'react-router-dom'
import './Bookstore.css'
import {getAllBooks} from '../redux/actions/bookActions'
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../Shared/Loading'
const BookStore = () => {
    const getBooks = useSelector(state => state.bookStore)
    const dispatch = useDispatch()
    const {loading, books} = getBooks 

    useEffect(()=>{
        dispatch(getAllBooks())
    },[dispatch,getAllBooks])

    return (    
            <div className='bookstore-container'>
                { 
               loading || Array.isArray(books)  ? <Loading/> : books.data.map(e => (
                   <>
                    <Card title={e.title} price={e.price} image={e.image} id={e._id}/>
                   </>
               ))
                }
            </div>
    )
}

export default BookStore