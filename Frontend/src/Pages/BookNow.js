import React from 'react';
import './BookNow.css';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Pre_syd from './sydney_premium.jpg';
import buss_syd from './sydney_business.jpg';
import econ_syd from './sydney_economy.jpg';
import { Link } from 'react-router-dom';
import Pre_new from './new_prem.jpg'; 

function BookNow() {
  return <div className='BookNow_Body'>
    <Header />
    <div className='Welcome_part'>
        <h3>WELCOME</h3>
        <p>TO</p>
        <h5>DHA Suffa Airlines</h5>
    </div>
    <div className='Flight_1'>
      <div className='Premium'>
        <img src={Pre_syd} alt="Sydney Pic"></img>
        <div className='Pre_tab'>
          <div className='Pre_button'>
            <Link to="/BookNow/BookingForm/Karachi/Sydney/Premium/125000">
            <button>Book Now</button>
            </Link>
          </div>
          <h6>Sydney</h6>
          <span>24 Feb 2022</span>          
          <h5>Premium From</h5>
          <p>PKR 125000</p>
        </div>
      </div>

      <div className='Business'>
        <img src={buss_syd} alt="Sydney Pic"></img>
        <div className='norm_tab'>
          <div className='norm_button'>
            <Link to="/BookNow/BookingForm/Karachi/Sydney/Business/95000">
            <button>Book Now</button>
            </Link>
          </div>
          <h6>Sydney</h6>
          <span>24 Feb 2022</span>          
          <h5>Business From</h5>
          <p>PKR 95000</p>
        </div>
      </div>

      <div className='Economy'>
        <img src={econ_syd} alt="Sydney Pic"></img>
        <div className='norm_tab'>
          <div className='norm_button'>
            <Link to="/BookNow/BookingForm/Karachi/Sydney/Economy/67500">
            <button>Book Now</button>
            </Link>
          </div>
          <h6>Sydney</h6>
          <span>24 Feb 2022</span>          
          <h5>Economy From</h5>
          <p>PKR 67500</p>
        </div>
      </div>

    </div>

    <div className='Flight_1'>
      <div className='Premium'>
        <img src={Pre_new} alt="Sydney Pic"></img>
        <div className='Pre_tab'>
          <div className='Pre_button'>
            <Link to="/BookNow/BookingForm/Karachi/NewYork/Premium/150000">
            <button>Book Now</button>
            </Link>
          </div>
          <h6>NewYork</h6>
          <span>24 Feb 2022</span>          
          <h5>Premium From</h5>
          <p>PKR 125000</p>
        </div>
      </div>

      <div className='Business'>
        <img src={buss_syd} alt="Sydney Pic"></img>
        <div className='norm_tab'>
          <div className='norm_button'>
            <Link to="/BookNow/BookingForm/Karachi/NewYork/Business/110000">
            <button>Book Now</button>
            </Link>
          </div>
          <h6>NewYork</h6>
          <span>24 Feb 2022</span>          
          <h5>Business From</h5>
          <p>PKR 95000</p>
        </div>
      </div>

      <div className='Economy'>
        <img src={econ_syd} alt="Sydney Pic"></img>
        <div className='norm_tab'>
          <div className='norm_button'>
            <Link to="/BookNow/BookingForm/Karachi/NewYork/Economy/69420">
            <button>Book Now</button>
            </Link>
          </div>
          <h6>NewYork</h6>
          <span>24 Feb 2022</span>          
          <h5>Economy From</h5>
          <p>PKR 67500</p>
        </div>
      </div>

    </div>

    <Footer />
  </div>;
}

export default BookNow;
