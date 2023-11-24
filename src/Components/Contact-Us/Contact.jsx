// import React from 'react'
import './Contact.css';

export default function Contact() {
  return (
    <div>
      <div className='contactContainer'>
        <div className='conForm'>
          <form action="">
            <input className='textName' type="text" placeholder='Enter Your Name'/>
            <input className='textName' type="email" placeholder='Enter Your Email'/>
            <textarea className='mess' name="message" id="" placeholder='Enter Message'></textarea>
            <div>
              <button className='sendbtn' type='submit'>SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
