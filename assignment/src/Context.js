import { createContext,useReducer ,useContext} from 'react';
import { mainReducer} from './Reducer';
const Cart = createContext();
const Context = ({children}) => {
const [main, dispatchMain] = useReducer(mainReducer,{
    cart:[]
  })
  return (
    <Cart.Provider value={{main,dispatchMain}}>{children}</Cart.Provider>
  )
}
export const CartData = () =>{
    return useContext(Cart)
  }
  
  export default Context