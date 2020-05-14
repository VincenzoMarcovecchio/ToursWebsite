import React, { useState } from 'react';
import './NavBar.scss';
import logo from '../../logo.png';
export default function NavBar() {
  const [state, setState] = useState({
    open: false,
  });

  const handleOpen = () => {
    setState({ open: !state.open });
  };

  return (
    <nav className={state.open ? 'navbar open' : 'navbar'}>
      <img src={logo} alt='logo city tours' />
      <i
        onClick={handleOpen}
        style={{ color: 'white', cursor: 'pointer' }}
        className='fas fa-bars'
      ></i>
      <ul className={state.open ? 'nav__links visible' : 'nav__links'}>
        <li>
          <a href='/' className='nav__link'>
            home
          </a>
        </li>
        <li>
          <a href='/' className='nav__link'>
            about
          </a>
        </li>
        <li>
          <a href='/' className='nav__link active'>
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
