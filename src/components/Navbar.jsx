import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
 const [showMenu, setShowMenu] = useState(false);

 const toggleMenu = () => {
   setShowMenu(!showMenu);
 };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
 return (
   <header className="header">
     <nav className="nav container">
       <Link to="/" className="nav__logo">
       <img src={logo} alt='resturant' width="189px" height="75px"/>
       </Link>

       <div
         className={`nav__menu ${showMenu ? "show-menu" : ""}`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <Link to="/" className="nav__link"  onClick={closeMenuOnMobile}>
               Home
             </Link>
           </li>
           <li className="nav__item">
             {/* <Link to="/news" className="nav__link"  onClick={closeMenuOnMobile}> */}
               About us
             {/* </Link> */}
           </li>
           <li className="nav__item">
             <Link
               to="/booking"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               Booking Form
             </Link>
           </li>
           <li className="nav__item">
             {/* <Link
               to="/favorite"
               className="nav__link"
                onClick={closeMenuOnMobile}
             > */}
               Contact us
             {/* </Link> */}
           </li>
           <li className="nav__item">
             {/* <Link
               to="/location"
               className="nav__link"
                onClick={closeMenuOnMobile}
             > */}
               Login
             {/* </Link> */}
           </li>
           {/* <li className="nav__item">
             <Link to="/get-started" className="nav__link nav__cta">
               Get Started
             </Link>
           </li> */}
         </ul>
         <div className="nav__close" id="nav-close" onClick={toggleMenu}>
           <IoClose />
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
         <IoMenu />
       </div>
     </nav>
   </header>
 );
};

export default Navbar;