import React, { useEffect, useState } from 'react';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../../store/actions/productActions';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i className='fab fa-firstdraft' />
          Midle
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='buy' className='nav-links' onClick={closeMobileMenu}>
              Buy
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/sell' className='nav-links' onClick={closeMobileMenu}>
              Sell
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>
              Shop
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/rent' className='nav-links' onClick={closeMobileMenu}>
              Rent
            </Link>
          </li>

          <li>
            <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              to='/startforfree'
              className=' nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Start for free
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;