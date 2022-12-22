export const mainReducer = (state,action) =>{
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
        case 'REMOVE_FROM_CART':
            return {...state,cart:state.cart.filter((e)=>e.id !== action.payload.id)}
            case 'SEARCH':
                return {...state,search:action.payload}
            case 'CLEAR_SEARCH':
                return {...state,search:''}
            case 'BTN':
                return {...state,button:!state.button}
            case 'CHANGE':
                 return {...state,button:false}
         default:
            return state;
    }
}