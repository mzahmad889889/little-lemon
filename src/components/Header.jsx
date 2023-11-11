import React from 'react'
import Nav from './Nav'
import logo from '../assets/logo.svg'
import restauranfood from '../assets/restauranfood.jpg'
import Main from './Main'
function Header() {
  return (
    <>
    <div className='header'> 
       <img src={logo} alt='resturant' width="189px" height="75px"/>
       <Nav/>
    </div>
    <div className='hero'>
      <div className='content'>
           <h2>Little Lemon</h2>
           <h3>Chicago</h3>
           <p>We are a family owned<br/>
            Mediterranean restaurant,<br/>
            focused on traditional<br/>
            recipes served with a modern<br/>
            twist.</p><br/>
            <input type='button' id='button' butt value="Reserve a Table"/>
      </div>
      <div className='Image'>
        <img src={restauranfood} id='image'  alt='retaurant' width="350" height="410"/>

      </div>

    </div>
    <Main/>
    </>
  )
 
}

export default Header
