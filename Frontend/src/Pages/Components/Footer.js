import React from 'react';
import './Footer.css';

function Footer() {
  return <div>
      <div className='footerPart1'>
        <div className='underfooter'>
          <div className='footerList1'>
            <h4>DHA Suffa Airways</h4>
            <ul className='fl1'>
              <li>About US</li>
              <li>Awards</li>
              <li>Careers</li>
              <li>Press releases</li>
              <li>Sponsorship</li>
              <li>Travel alerts</li>              
            </ul>
          </div>
          <div className='footerList2'>
            <h4>Group Companies</h4>
            <ul className='fl2'>
              <li>Karachi International Airport</li>
              <li>Suffa Executive</li>
              <li>Suffa Duty Free</li>
              <li>Suffe Airway Cargo</li>
              </ul>
  
          </div>
          <div className='footerList3'>
            <h4>Business Solutions</h4>
            <ul className='fl3'>
              <li>Corporate Travel</li>
              <li>Beyond Business</li>
              <li>Qmice Meeting and Events</li>
              </ul>
  
          </div>
          <div className='footerList4'>
            <h4>Business Partners</h4>
            <ul className='fl4'>
              <li>Affiliate Marketing</li>
              <li>e-Procurement</li>
              <li>Trade Rartners</li>
              </ul>
          </div>
        </div>
        <div className='lastPartFooter'>
          <ul className='lastFooterList'>
            <li>Cookie Policy</li>
            <li>Legal</li>
            <li>Privacy</li>
            <li>Accessibility</li>
            <li>Combating Human Trafficking</li>
            <li>Cookie Consent</li>
          </ul>
        </div>
        <div className='CopyrightPart'>
            <p><i>DHA Suffa Airways. All rights reserved</i></p>
        </div>
      </div>
  </div>;
}

export default Footer;
