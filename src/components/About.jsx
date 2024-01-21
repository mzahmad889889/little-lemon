import React from 'react'
import greekSalad from '../assets/greek_salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
export default function About() {
  return (
    <div className='About'>
        <div className='AboutText'>
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <p style={{textAlign:'justify'}}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor<br/> do amet sint. Velit officia consequat duis enim velit mollit. <br/>Exercitation veniam consequat sunt nostrud amet.
        Amet minim<br/> mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br/>Velit officia consequat duis enim velit mollit.
        </p>
        </div>
        <div className='AboutImage'>
            <img src={greekSalad} alt='about image' width="276px" height="338"/>
            <img src={greekSalad} alt='about image' width="272px" height="338"/>
        </div>
    </div>
  )
}
