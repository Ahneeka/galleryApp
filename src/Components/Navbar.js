import React from 'react'

function Navbar(props) {
  return (
    <nav className='navbar'>
      <h1 href='#' className='title'>{props.title}</h1>
      <a href='#'>Home</a>
      <a href='#'>About us</a>
      <a href='#'>Contact us</a>
      <a href='#'>Sign up</a>
    </nav>
  )
}

export default Navbar
