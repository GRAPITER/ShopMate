import { Card } from "../components"
import { useTitle } from "../hooks/useTitle"

export const Home = ({Title}) => {

  const products = [
    { id: '1', name: "Sony Wh-Ch510 Bluetooth Wireless", price: '149', image: "/assets/images/1001.png" },
    { id: '2', name: "Sony Wh-Ch510 Bluetooth Wireless", price: '159', image: "/assets/images/1006.png" },
    { id: '3', name: "bot rozker 450", price: '49', image: "/assets/images/1002.png" },
    { id: '4', name: "jbl tune 780nc", price: '179', image: "/assets/images/1003.png" },
    { id: '5', name: "Sony Wh-Ch510 Bluetooth Wireless", price: '199', image: "/assets/images/1004.png" },
    { id: '6', name: "Sony Wh-Ch510 Bluetooth Wireless", price: '119', image: "/assets/images/1005.png" }
  ]

  useTitle('Home')
  return (
    <main className=' my-8 '>

      <section className="flex  flex-wrap justify-between">
        {products.map((product) => (

          <Card key={product.id} product={product}/>

        ))}
      </section>
    
    </main>
  )
}
