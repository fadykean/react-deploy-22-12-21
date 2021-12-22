import React from 'react';
import { ReactComponent as Back } from '../../images/back.svg';
import '../secondnavbar/secondNavbar.css';

function SecondNavbar() {
  return (
    <div className='second-navbar  '>
      <div className='back ' onClick={() => (window.location = '/')}>
        <Back style={{ fill: 'black' }} /> Back
      </div>
      <p className='line'>|</p>
      <nav className='container'>


      <a className='sNav' href="#top">Property Deatils</a>
        <a className='sNav'  href="#top">Contact</a>
        <a className='sNav' href="#middle">Neighborhood Details</a>
        <a className='sNav' href="#middle">Pricing and transcations</a>
        <a className='sNav' href="#end">Reviews</a>

        {/* <button className='btn-1'>Property Deatils</button> */}
        {/* <button className='btn-1'>Contact</button> */}
        {/* <button className='btn-1'>Neighborhood Details</button> */}
        {/* <button className='btn-1'>Pricing and transcations</button> */}
        {/* <button className='btn-1'>Reviews</button> */}
      </nav>
    </div>
  );
}

export default SecondNavbar;
