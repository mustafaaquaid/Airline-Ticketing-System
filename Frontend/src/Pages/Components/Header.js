import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
  return <div className='Header'>
      <div className='Logo'>
        <Link to='/'>
          <h1 className='Logo_h1'> DHA Suffa<span>Airways</span></h1>
        </Link>
      </div>
  </div>;
}

export default Header;
