import React from 'react'
import Navbar from './Navbar'
import restauranfood from '../assets/restauranfood.jpg'
function Header() {
  return (
    <>
       <Navbar/>
    <div className='hero'>
      <div className='content'>
           <h2>Little Lemon</h2>
           <h3>Chicago</h3>
           <p>We are a family owned<br/>
            Mediterranean restaurant,<br/>
            focused on traditional<br/>
            recipes served with a modern<br/>
            twist.</p><br/>
            <input type='button' id='button'  value="Reserve a Table"/>
      </div>
      <div className='Image'>
        <img src={restauranfood} id='image'  alt='retaurant' width="350" height="410"/>
      </div>
    </div>

    </>
  )

}

export default Header
