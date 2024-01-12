import { CartCard } from "../components"
import { useTitle } from "../hooks/useTitle"

export const Cart = ({title}) => {

  const products = [
    {id: '1', name: "Sony Wh-Ch510 Bluetooth Wireless", price: '149', image: "/assets/images/1001.png"},
    {id: '2', name: "Sony Wh-Ch510 Bluetooth Wireless", price: '159', image: "/assets/images/1006.png"}
  ]

  useTitle('Cart')


  return (
    <main>

      <section>

        <h1 className="text-center text-2xl font-medium my-16">cart Items: 2</h1>
        
      {products.map((product) => (

        <CartCard key={product.id} product={product}/>

      ))}

      </section>


    </main>
  )
}
