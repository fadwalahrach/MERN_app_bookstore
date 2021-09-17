import { BOOK_REQUEST,
    BOOK_SUCCESS,
    BOOK_FAILURE,
    BOOK_DETAIL_REQUEST,
    BOOK_DETAIL_SUCCESS,
    BOOK_DETAIL_FAILURE  } from '../constants/bookConstants'

    export const bookReducer = (state={ books: []}, action) => {
        switch(action.type){
            case BOOK_REQUEST: return {loading: true, books: []}
            case BOOK_SUCCESS: return {loading:false, books: action.payload }
            case BOOK_FAILURE: return {loading:false , error: action.payload}
            default: return state
        }
    }


    export const bookDetailReducer = (state={book: []}, action) => { 
        switch(action.type){
            case BOOK_DETAIL_REQUEST: return {loading: true, book: []}
            case BOOK_DETAIL_SUCCESS: return {loading:false, book: action.payload }
            case BOOK_DETAIL_FAILURE: return {loading:false , error: action.payload}
            default: return state
        }
    }