import React from 'react'

export default function Footer(props) {
  return (
    <div className='footer'>
        <img src={props.logo} alt='logo' width='162px' height='150px'/>
            <ul>
                <h3>Doormat Navigation</h3>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <ul>
                <h3>Social Media Links</h3>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Github</li>
                <li>LinkedIn</li>
            </ul>
            <ul>
                <h3>Contact us via below</h3>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>
  )
}
