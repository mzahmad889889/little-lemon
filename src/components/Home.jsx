import React from 'react'
import logo from '../assets/logo.svg'
import Main from './Main'
import Testimonials from './Testimonials'
import About from './About'
import Footer from './Footer'
import Header from './Header'
export default function Home() {
  return (
    <>
    <Header/>
    <Main/>
    <Testimonials/>
    <About/>
    <Footer logo={logo}/>
    </>
  )
}
