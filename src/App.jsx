import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import { useReducer } from 'react';
import ConfirmedBooking from './components/ConfirmedBooking';

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same available times regardless of the date
      return action.availableTimes;
    default:
      return state;
  }
};

function App() {

  const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0];
    const availableTimes = await fetchAPI(today);
    return availableTimes;
  };

  // Use useReducer hook to manage availableTimes state
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );



  const updateTimes = async (selectedDate) => {
    const availableTimes = await fetchAPI(selectedDate);
    dispatch({
      type: 'UPDATE_TIMES',
      availableTimes: availableTimes,
    });
  };


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/booking' element={ <BookingForm availableTimes = {availableTimes} updateTimes={updateTimes}/> }/>
        <Rout path='/confirmation' element={<ConfirmedBooking/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export  default App;
