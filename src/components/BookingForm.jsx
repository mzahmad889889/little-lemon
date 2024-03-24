import React from 'react'
import Header from './Header'
import logo from '../assets/logo.svg'
import Footer from './Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function BookingForm({availableTimes, updateTimes, submitForm, error}) {

  const [chosenDate, setChosenDate] = useState(new Date().toISOString().substring(0, 10));
  const [chosenTime, setChosenTime] = useState(' '); // Set a default time
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  // Handler for updating the chosen date
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setChosenDate(newDate);

    // Dispatch the state change when the date is changed
    updateTimes(newDate);
  };


  const handleTimeChange = (event) => {
      setChosenTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setNumberOfGuests(parseInt(event.target.value, 10));
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data =  { chosenDate, chosenTime, numberOfGuests, occasion };
    submitForm(data, navigate);
    setChosenDate(new Date().toISOString().substring(0, 10));
    setChosenTime(' ');
    setNumberOfGuests(1);
    setOccasion('Birthday');
};
  return (
    <>
    <div>
         <Header/>
    </div>
    <div className='Form'>
      <h2>Online Table Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date:</label>
        <input
          type="date"
          id="res-date"
          value={chosenDate}
          onChange={handleDateChange}
          min={new Date().toISOString().split('T')[0]}
        />
          <label htmlFor="res-time">Choose time:</label>
          <select id="res-time" value={chosenTime} onChange={handleTimeChange}>
              {Array.isArray(availableTimes) && availableTimes?
                  availableTimes.map((time) => (
                      <option key={time} value={time}>
                          {time}
                      </option>
                  )):
                  <option>{error}</option>
              }
          </select>

        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numberOfGuests}
          onChange={handleGuestsChange}
        />

        {/* Occasion field */}
        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        {/* Submit button */}
       <input className='backtohome' type="submit" value="Make Your reservation"/>
      </form>
    </div>
   <div>
   <Footer logo={logo}/>
   </div>
    </>
  )
}

export default BookingForm
