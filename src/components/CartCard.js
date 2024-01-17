import { useCart } from "../context/CartContext"
export const CartCard = ({product}) => {

  const {removeFromCart} = useCart();

  return (
    <div className="flex justify-between my-10 items-center ">
        
        <img className="w-36" src={product.image} alt="logo" />
        <span className="w-96 text-center">{product.name}</span>
        <span >${product.price}</span>
        <span className="py-1 text-white font-medium px-3 bg-red-600 rounded-lg cursor-pointer" onClick={() => removeFromCart(product)}>Remove</span>


    </div>
  )
}
