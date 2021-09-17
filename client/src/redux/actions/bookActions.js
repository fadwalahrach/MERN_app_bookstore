import axios from 'axios'
import { BOOK_REQUEST,
 BOOK_SUCCESS,
 BOOK_FAILURE,
 BOOK_DETAIL_REQUEST,
 BOOK_DETAIL_SUCCESS,
 BOOK_DETAIL_FAILURE  } from '../constants/bookConstants'


export const getAllBooks = () => async(dispatch) => { 
    try {
        dispatch({type: BOOK_REQUEST})

        const {data} = await axios.get('/books')

        dispatch({type: BOOK_SUCCESS, payload: data})
    } catch(error){
        dispatch({
            type: BOOK_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getBook = (id) => async(dispatch) => { 
    try{
        dispatch({type: BOOK_DETAIL_REQUEST})

        const {data} = await axios.get(`/books/${id}`)

        dispatch({type:BOOK_DETAIL_SUCCESS, payload:data})
    } catch(error){
        dispatch({
            type: BOOK_DETAIL_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}