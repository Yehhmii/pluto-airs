import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css';

export default function Form() {
    const [returnDate, setReturnDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);

  return (
    <div>
      <div className="formContainer">
        <form className='formtag' action="">
            <select className='inner' name="destination" id="dest">
                <option value="">Destination</option>
                <option value="abuja">Abuja</option>
                <option value="lagos">Lagos</option>
                <option value="kano">Kano</option>
                <option value="edo">Edo</option>
                <option value="imo">Imo</option>
                <option value="ekiti">Ekiti</option>
            </select>
            {/* <input 
            className='inner' 
            type="date" 
            name="depart" 
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            placeholder={returnDate ? '' : 'Return Date'}
            /> */}
            <DatePicker 
                className='inner datees' 
                selected={departureDate}
                onChange={(date) => setDepartureDate(date)}
                placeholderText="Departure Date"
            />
            <DatePicker 
                className='inner datees' 
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                placeholderText="Return Date"
            />
            <select className='inner ' name="duration" id="dura">
                <option value="">Duration</option>
                <option value="1">1-2 Weeks</option>
                <option value="2">2-4 Weeks</option>
                <option value="3">1-2 Months</option>
                <option value="4">2-6 Months</option>
                <option value="5">6-12 Months</option>
                <option value="6">1Year Above</option>
            </select>
            <div className='divformBtn'>
                <button className='formBtn'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}
