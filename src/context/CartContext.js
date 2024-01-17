import { createContext, useContext } from "react"
import { cartReduce } from "../assets/reducer/cartReduce";
import { useReducer } from "react";


const initialstate = {
    cartList: [],
    total: 0
}

const CartContext = createContext(initialstate);


export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReduce, initialstate);

    const addToCart = (product) => {

        const updateCartList = state.cartList.concat(product)
        updateAllTotal(updateCartList)
        
        dispatch({
            type:"Add_To_Cart",
            payload:{

                products:updateCartList

            }
        })
    }

    const removeFromCart = (product) => {

        const updateCartList = state.cartList.filter(current => current.id !== product.id)
        updateAllTotal(updateCartList)

        dispatch({
            type:"Remove_From_Cart",
            payload:{
                products:updateCartList
            }
        })
    }

    const updateAllTotal = (product) => {

        let total = 0;

        product.forEach((product) => (total = total + product.price));
        
        dispatch({
            type:"Update_Total",
            payload:{
                total:total
            }
        })

        

    }

    



    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>

    );
}


export const useCart = () => {

    const context = useContext(CartContext)

    return context;

}
