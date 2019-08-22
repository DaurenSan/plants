import React from 'react';
import './navigation.css';
import logo from '../logo-min.png';
import cart from '../cart.jpg';


function Nav() {
  return (
    <div className="NavContainer">
      <div className="Box">
        <div className="BoxItem">КОФЕ</div>
        <div className="BoxItem">ДЕСЕРТЫ</div>
      </div>
      <div className="BoxForLogo"><img className="Logo" src={logo} alt="Frapuccino" /></div>
      <div className="Box">
        <div className="BoxItem">КОКТЕЙЛИ</div>
        <div className="BoxItem"><img className="Cart" src={cart} alt="Cart" /></div>
      </div>
    </div>
  );
}

export default Nav;