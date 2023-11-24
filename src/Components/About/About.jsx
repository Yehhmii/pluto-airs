// import React from 'react'
import header4 from '../../images/header4.jpg';
import './About.css'
import about1 from '../../images/about-2.jpg';
import about2 from '../../images/about-1.jpg';


export default function About() {
  return (
    <div>
      <div className="AboutCard">
        <div className='img2'>
            <img src={header4} alt="about img" />
        </div>
        <div className='aboutText'>
          <h6 className='abouth6'>ABOUT US</h6>
          <h3 className='abouth3'>We Fly Only To Provide The Best With The Right Buget</h3>
          <p className='aboutp'>The best package can only come the right service and all time planning with us by your side every stepm of the way, have no fear of making the wrong choice. Let's access the risk for you. </p>
          <div className='aboutImg'>
            <img src={about1} alt="" />
            <img src={about2} alt="" />
          </div>
          <div className='divaboutBtn'>
            <button className='aboutBtn'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
