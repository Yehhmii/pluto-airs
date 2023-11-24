// import React from 'react'
import './Destination.css';
import img1 from '../../images/destination-1.jpg';
import img2 from '../../images/destination-2.jpg';
import img3 from '../../images/destination-3.jpg';
import img4 from '../../images/destination-4.jpg';
import img5 from '../../images/destination-5.jpg';
import img6 from '../../images/destination-6.jpg';

export default function Destination() {
  return (
    <div>
        <div className='ConDestination'>
            <h6 className='desh6'>DESTINATIONS</h6>
            <h3 className='desh3'>Have A Pick From Our Best</h3>
            <div className='destinationGrid'>
              <div className='desImg1'>
                <img src={img1} alt="" />
                <div className='layer'>
                    <h3 className=''>Abuja</h3>
                </div>
              </div>
              <div className='desImg1'>
                <img src={img2} alt="" />
                <div className='layer'>
                    <h3 className=''>Lagos</h3>
                </div>
              </div>
              <div className='desImg1'>
                <img src={img3} alt="" />
                <div className='layer'>
                    <h3 className=''>Edo</h3>
                </div>
              </div>
              <div className='desImg1'>
                <img src={img4} alt="" />
                <div className='layer'>
                    <h3 className=''>Imo</h3>
                </div>
              </div>
              <div className='desImg1'>
                <img src={img5} alt="" />
                <div className='layer'>
                    <h3 className=''>Kano</h3>
                </div>
              </div>
              <div className='desImg1'>
                <img src={img6} alt="" />
                <div className='layer'>
                    <h3 className=''>Ekiti</h3>
                </div>
              </div>
            </div>
      </div>  
    </div>
  )
}
