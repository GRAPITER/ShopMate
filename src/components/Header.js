import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo192.png";
import './Header.css'

export const Header = () => {
  const {cartList} = useCart()
  return (
    <header className="nav flex justify-between max-w-7xl m-auto items-center h-24 border-b-2 flex-wrap mb-6 ">


      <Link to='/' className="flex items-center">
        <img src={logo} className="h-12 mr-4" alt="ShopMate logo" />
        <span className="text-xl">Shopping Cart</span>
      </Link>


      <nav className="navigation">

        <NavLink to="/" className="link mr-9 text-xl">Home</NavLink>
        <NavLink to="/Cart" className='link text-xl'>Cart</NavLink>

      </nav>


      <Link to="/cart" className="text-xl font-medium">

        <p>Cart:{cartList.length}</p>

      </Link>
    </header>
  )
}
