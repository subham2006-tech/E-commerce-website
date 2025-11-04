import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_cross_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  const navItems = [
    { name: 'Shop', path: '/', key: 'shop' },
    { name: 'Men', path: '/mens', key: 'mens' },
    { name: 'Women', path: '/womens', key: 'womens' },
    { name: 'Kids', path: '/kids', key: 'kids' },
  ];

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        {navItems.map(item => (
          <li key={item.key} onClick={() => setMenu(item.key)}>
            <Link style={{ textDecoration: 'none' }} to={item.path}>
              {item.name}
            </Link>
            {/* Add an underline indicator instead of invalid <h> */}
            {menu === item.key && <div className="active-indicator"></div>}
          </li>
        ))}
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
