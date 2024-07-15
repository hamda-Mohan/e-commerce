import React, { useContext, useState } from 'react';
import './Navbar.css'; // Styles for Navbar component
import cart_icon from '../Assets/cart_icon.png'; // Importing cart icon image
import { Link } from 'react-router-dom'; // Using Link component from react-router-dom for navigation
import logo from '../Assets/logo.png'; // Importing logo image
import { ShopContext } from '../../Context/ShopContext'; // Importing ShopContext from correct path
import { AuthContext } from '../../Context/AuthContext'; // Importing AuthContext from correct path

function Navbar() {
  const [menu, setMenu] = useState("shop"); // State for active menu item
  const { getTotalCartItems } = useContext(ShopContext); // Getting total cart items from ShopContext
  const { isAuthenticated, userName, logout } = useContext(AuthContext); // Getting authentication status and user info from AuthContext

  return (
    <div className='navbar'>
      {/* Navbar container */}
      <div className="nav-logo">
        <img src={logo} alt="Fashion Store Logo" className="logo" />
        {/* Logo image */}
        <p>FASHION<span>STORE</span></p>
        {/* Store name */}
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {/* Shop link */}
          {menu === "shop" && <hr />}
          {/* Display HR line if menu is active */}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link>
          {/* Men's section link */}
          {menu === "mens" && <hr />}
          {/* Display HR line if menu is active */}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Women</Link>
          {/* Women's section link */}
          {menu === "womens" && <hr />}
          {/* Display HR line if menu is active */}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {/* Kids section link */}
          {menu === "kids" && <hr />}
          {/* Display HR line if menu is active */}
        </li>
      </ul>
      <div className="nav-login-cart">
        {isAuthenticated ? (
          <>
            <span>Welcome, {userName}</span>
            {/* Displaying user's name */}
            <button onClick={logout}>Logout</button>
            {/* Logout button */}
          </>
        ) : (
          <Link to='/login'>
            <button>Login</button>
            {/* Login button */}
          </Link>
        )}
        <Link to='/cart'>
          <img src={cart_icon} alt="Cart Icon" className="cart-icon" />
          {/* Cart icon */}
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        {/* Displaying total items in cart */}
      </div>
    </div>
  );
}

export default Navbar;
