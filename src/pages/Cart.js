import { CartCard } from "../components"
import { useCart } from "../context/CartContext"
import { useTitle } from "../hooks/useTitle"


export const Cart = () => {


  useTitle('Cart');
  const {total , cartList} = useCart();


  return (
    <main>

      <section>

        <h1 className="text-center text-2xl font-medium my-16">cart Items:{cartList.length} / $:{total}</h1>
        
      {cartList.map((product) => (

        <CartCard key={product.id} product={product}/>

      ))}

      </section>


    </main>
  )
}
