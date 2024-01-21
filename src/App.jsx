import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import { useReducer } from 'react';

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

  const initializeTimes = () => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  // Use useReducer hook to manage availableTimes state
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  // Function to handle state changes based on the selected date
  const updateTimes = (selectedDate) => {
    // You can implement logic here to fetch available times based on the selected date
    // For now, we'll return the same available times regardless of the date

    dispatch({
      type: 'UPDATE_TIMES',
      availableTimes: initializeTimes(),
    });

  };

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/booking' element={ <BookingForm availableTimes = {availableTimes} updateTimes={updateTimes}/> }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
