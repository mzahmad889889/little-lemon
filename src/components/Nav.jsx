import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <>
    <div>
       <ul className='Navbar'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About</li>
            <li>Menu</li>
            <li><Link to="/booking">Reservations</Link></li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        </div>
    </>
  )
}

export default Nav
