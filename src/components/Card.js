import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"

export const Card = ({ product }) => {
    const {cartList ,addToCart , removeFromCart} = useCart();
    const [show ,setShow] = useState(false);

    useEffect(() => {

        const productInCard = cartList.find((current) => current.id === product.id)

        if(productInCard){
            return setShow(true);
        }

        else{
            setShow(false)
        }

    },[cartList,product.id])
    return (

        <div className=' flex flex-col mt-6 p-5  rounded-lg flex-wrap car shadow-md'>

            <img className=' h-72' src={product.image} alt="" />

            <p className='text-xl'>{product.name}</p>

            <div className='flex justify-between items-center pt-6  text-xl'>

                <span>${product.price}</span>
                {show ? (<span className='border rounded-lg py-2   px-4 text-white bg-red-700 cursor-pointer' onClick={() => removeFromCart(product)}>Remove</span>) : (<span className='border rounded-lg py-2  bg-blue-600 px-4 text-white  hover:bg-blue-700 cursor-pointer' onClick={() => addToCart(product)}>Add To Cart</span>)}
                
            </div>

        </div>

    )
}
