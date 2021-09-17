import { ADD_TO_CART } from "../constants/cartConstants"

export const cartReducer = (state={cartItems: []}, action) => { 
    switch(action.type) {
        case ADD_TO_CART: 
                const item = action.payload
                const itemExist = state.cartItems.find((element) => element.book_id === item._id)
                //TRUE STATEMENT IF EXIT
               return itemExist ?  {...state.cartItems, cartItems: this.state.cartItems.map(el => el.id === itemExist.id ? item: el)} :  {...state.cartItems, cartItems: item }
        default: return state
    }

}