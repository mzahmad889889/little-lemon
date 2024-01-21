import React from 'react'
import greekSalad from '../assets/greek_salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemon_dessert from '../assets/lemon_dessert.jpg'
function Main() {
  return (
    <>
      <div className='content2'>
        <h4>This weeks specials!</h4>
        <input type='button' id='button' value="Online Menu"/>
      </div>
      <div className='cards'>
        <div className='card1'>
        <img src={greekSalad} id='image3' alt='Greek Salad' width='267px' height='185'/>
         <div className='content3'>
           <div className='subcontent3'>
            <h2>Greek salad</h2>
            <p>$12.99</p>
           </div>
           <p>
           The famous greek salad of<br/>
           crispy lettuce, peppers, olives<br/>
           and our Chicago style feta<br/>
           cheese, garnished with<br/>
           crunchy garlic and rosemary<br/>
           croutons.
           </p>
           <input type='button' id='button3' value='Order a delivery '/>
         </div>
         </div>
         {/* end card1 */}
         <div className='card1'>
        <img src={bruchetta} id='image3' alt='Greek Salad' width='267px' height='189'/>
         <div className='content3'>
           <div className='subcontent3'>
            <h2>Bruchetta</h2>
            <p>$5.99</p>
           </div>
           <p>
           Our Bruschetta is made from<br/>
           grilled bread that has been<br/>
           smeared with garlic and<br/>
           seasoned with salt and olive<br/>
           oil.
           </p>
           <input type='button' id='button3' value='Order a delivery'/>
         </div>
         </div>
          {/* end card1 */}
          <div className='card1'>
        <img src={lemon_dessert} id='image3' alt='Greek Salad' width='267px' height='185'/>
         <div className='content3'>
           <div className='subcontent3'>
            <h2>Lemon Dessert</h2>
            <p>$5.00</p>
           </div>
           <p>
           This comes straight from<br/>
           grandma’s recipe book, every<br/>
           ast ingredient has been<br/>
           sourced and is as authentic<br/>
           as can be imagined.
           </p>
           <input type='button' id='button3' value='Order a delivery'/>
         </div>
         </div>
      </div>
    </>
  )
}

export default Main
