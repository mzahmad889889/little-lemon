import './index.css'
import Header from './components/Header'
import Main from './components/Main'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/booking' element={ <BookingForm/> }/>
      </Routes>  
    </BrowserRouter>
    </>
  )
}

export default App
