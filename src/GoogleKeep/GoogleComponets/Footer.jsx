import React from 'react'
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='footer_div'>
          <p>CopyRight @ {year}</p>
    </div>
  )
}

export default Footer
