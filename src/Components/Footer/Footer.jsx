// import React from 'react'
import './Footer.css';
import logo from "../../images/airplane-logo.svg";

export default function Footer() {
  return (
    <div>
      <div className='footerContainer'>
        <div className="logo2"> 
                <h1 className="logotext2">
                Pluto <span className='spa'>Airs</span>
                </h1>
                <div className="img1">
                <img src={logo} alt="airplane logo" />
                </div>
            </div>
            <div className='textAbout'>
                <p>We Fly Only To Provide The Best With The Right Buget</p>
            </div>
            <div className='usefulLink'>
                <h4 className='use'>USEFULL LINKS</h4>
                <div className='links'>
                    <a href="">Home</a>
                    <a href="">Reservation</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Destination</a>
                    <a href="">Testimonials</a>
                    <a href="">Contact Us</a>
                </div>
            </div>
            <div className='followUs'>
              <h5 className='US'>Follow Us</h5>
              <div className='followContainer'>
                <div className='linkin'></div>
                <div className='instagram'></div>
                <div className='facebook'></div>
                <div className='git'></div>
              </div>
            </div>
            <div className='COntact'>
              <h4 className='use'>Contact us</h4>
              <div className='contactInfo'>
                <p className='footP'>123 Street, Abuja, Nigeria</p>
                <p className='footP'>+2348158619465</p>
                <p className='footP'>plutoairs@gmail.com</p>
              </div>
            </div>
            <div className='form'>
              <form action="">
                <input className='fname' type="text" name='fullName' placeholder='Full Name' />
                <input className='email' type="email" name='email' placeholder='Email' />
                <textarea className='message' name="message" id="" placeholder='Enter Message'></textarea>
                <div className='footBtn'>
                  <button className='fBtn' type='submit'>SEND</button>
                </div>
              </form>
            </div>

        </div>
        <div className='copyright'>
          <p className='cpp'>Copyright © <span className='cp'>YBK</span>. All Rights Reserved.</p>
          <p className='cpp'>Designed by <span className='cp'>YTech-City</span></p>
        </div>
        
    </div>
  )
}
