import './App.css';
import Home from './Pages/Home.js';
import BookNow from './Pages/BookNow.js';
import BookingForm from './Pages/BookingForm';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Routes>
            <Route exact path="/" element={<Home/>}> </Route>
            <Route exact path="/BookNow" element={<BookNow/>}> </Route>
            <Route exact path="/BookNow/BookingForm/:from/:to/:class/:fare" element={<BookingForm/>}> </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
