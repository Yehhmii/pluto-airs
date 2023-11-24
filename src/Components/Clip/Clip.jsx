// import React from 'react'
import './Clip.css';
import Ser1 from '../../images/service-icon-01.1.png';
import Ser2 from '../../images/service-icon-02.2.png';
import Ser3 from '../../images/service-icon-03.3.png';

export default function Clip() {
  return (
    <div>
      <div className='chipContainer'>
        <div className='service1'>
            <img className='serimg' src={Ser1} alt="" />
            <h3 className='serh3'>Fix The Best</h3>
            <p className='serp'>With Pluto Airs it means you are signing up for the best exprience you can only get at are front desk.</p>
            <div className='clip'>
                <h3 className='chiph3'>Let's Go!</h3>
            </div>
        </div>
        <div className='service1 light2'>
            <img className='serimg' src={Ser2} alt="" />
            <h3 className='serh3'>Light Your Path</h3>
            <p className='serp'>Having us direct your trip means you want the best and we will light that idea and bring it to life.</p>
            <div className='clip2'>
                <h3 className='chip2h3'>Lets Grow!</h3>
            </div>
        </div>
        <div className='service1 find3'>
            <img className='serimg' src={Ser3} alt="" />
            <h3 className='serh3'>Find The Best</h3>
            <p className='serp'>With Pluto Airs finding the best is always around the conner with our exceptional team working the ropes to find the best.</p>
            <div className='clip3'>
                <h3 className='chiph3'>Fly Now!</h3>
            </div>
        </div>
      </div>
    </div>
  )
}
