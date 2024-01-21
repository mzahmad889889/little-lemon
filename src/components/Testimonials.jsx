import React from 'react'
import zubair from '../assets/zubair.jpg'
function Testimonials() {
  return (
    <>
    <div className='Testimonial'>
    <h2>Testimonials</h2>
    <div className='testiCard'>
        <div className='review'>
                <h4>Rating</h4>
                <div className='revimg'>
                        <img src={zubair} alt='profile' width="50px" height="50px"/>
                        <h4>Muhammad</h4>
                </div>
                <h4>Review Text</h4>
        </div>
        <div className='review'>
                <h4>Rating</h4>
                <div className='revimg'>
                        <img src={zubair} alt='profile' width="50px" height="50px"/>
                        <h4>zubair</h4>
                </div>
                <h4>Review Text</h4>
        </div>
        <div className='review'>
                <h4>Rating</h4>
                <div className='revimg'>
                        <img src={zubair} alt='profile' width="50px" height="50px"/>
                        <h4>Ahmad</h4>
                </div>
                <h4>Review Text</h4>
        </div>
        <div className='review'>
                <h4>Rating</h4>
                <div className='revimg'>
                        <img src={zubair} alt='profile' width="50px" height="50px"/>
                        <h4>Engineer</h4>
                </div>
                <h4>Review Text</h4>
        </div>
    </div>
    </div>
    </>
  )
}


export default Testimonials