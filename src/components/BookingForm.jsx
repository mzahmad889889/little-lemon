import React from 'react'
import Header from './Header'
import logo from '../assets/logo.svg'
import Footer from './Footer'
import { useState } from 'react'
function BookingForm({availableTimes, updateTimes}) {
  const [chosenDate, setChosenDate] = useState('');
  const [chosenTime, setChosenTime] = useState('17:00'); // Set a default time
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Handler for updating the chosen date
  const handleDateChange = (event) => {
    setChosenDate(event.target.value);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., communicate with an API) here
    console.log("Form submitted:", { chosenDate, chosenTime, numberOfGuests, occasion });
    setChosenDate(' ');
    setChosenTime('17:00');
    setNumberOfGuests(' ');
    setOccasion('Birthday');



  };
  return (
    <>
    <div>
         <Header/>
    </div>
    <div className='Form'>
      <h2>Online Table Reservations</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date:</label>
        <input
          type="date"
          id="res-date"
          value={chosenDate}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time:</label>
        <select id="res-time" value={chosenTime} onChange={handleTimeChange}>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
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
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
   <div>
   <Footer logo={logo}/>
   </div>
    </>
  )
}

export default BookingForm
