import React from 'react';
import Logo from '../../assets/logo.png';
import userIcon from '../../assets/user-regular-24.png';
import cartIcon from '../../assets/cart-regular-24.png';
import searchIcon from '../../assets/search-regular-24.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className='navBar'>

    <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>


      <ul className='navLink'>
        <li><a href="home">Shop</a></li>
        <li><a href="new">New Arrivals</a></li>
        <li><a href="best">Best Sellers</a></li>
        <li><a href="best">Black Friday</a></li>

      </ul>


      <ul className='navIcons'>
        <li><img src={userIcon} alt="User" /></li>
        <li><img src={searchIcon} alt="Search" /></li>
        <li><img src={cartIcon} alt="Cart" /></li>
      </ul>
    </header>
  );
}

export default NavBar;
