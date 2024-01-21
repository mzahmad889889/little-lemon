import React from 'react'

export default function Footer(props) {
  return (
    <div className='footer'>
        <img src={props.logo} alt='logo' width='162px' height='279px'/>
        <div className='Menu1'>
            <ul>
                <h3>Doormat Nav igation</h3>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </div>
        <div className='Menu1'>
            <ul>
                <h3>Contact</h3>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>
        <div className='Menu1'>
            <ul>
                <h3>Social Media Links</h3>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
            </ul>
        </div>
    </div>
  )
}
