import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import { useReducer, useEffect, useState } from 'react';
import ConfirmedBooking from './components/ConfirmedBooking';
import { fetchAPI, submitAPI } from "./components/MockAPi";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.availableTimes;
    case 'UPDATE_ERROR':
      return action.error;
    default:
      return state;
  }
};


function App() {
  const [error, setError] = useState("No availables times for the selected date");
  const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0];
    const availableTimes = await fetchAPI(today);
    return availableTimes;
  };

  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );


  useEffect(() => {
    async function fetchData() {
      try {
        const today = new Date().toISOString().split('T')[0];
        const availableTimes = await fetchAPI(today);
        dispatch({ type: 'UPDATE_TIMES', availableTimes });
      } catch (error) {
        console.error ('Error fetching available times:', error);
      }
    }
    fetchData();
  }, []);

  const submitForm = async (formData, navigate) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        navigate('/confirmation');
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  const updateTimes = async (selectedDate) => {
    try {
      const availableTimes = await fetchAPI(selectedDate);
      dispatch({ type: 'UPDATE_TIMES', availableTimes });
    } catch (error) {
      dispatch({ type: 'UPDATE_ERROR', error});
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/booking' element={<BookingForm availableTimes={availableTimes} error={error} updateTimes={updateTimes} submitForm={submitForm} />}/>
        <Route path='/confirmation' element={<ConfirmedBooking/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
// export { initializeTimes, availableTimesReducer, fetchAPI};
