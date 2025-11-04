import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusisive Offer On Your Email</h1>
      <p>Subscribe To Our NewsLetter and Stay updated</p>
      <div>
        <input type="email"placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter