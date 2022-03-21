import React from 'react';
import PropTypes from "prop-types";
import '../styles/style.css';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {

  NavTabs.propTypes = {
    currentPage: PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.string
      ]),
    handlePageChange: PropTypes.func.isRequired
  };

  return (
    <div className='d-flex justify-content-between'>
    <p className="headtext">Please select one font</p>
    <ul className="nav nav-tabs">
      <li tabIndex='0' className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          MY FONTS
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#buy"
          onClick={() => handlePageChange('Buy')}
          className={currentPage === 'Buy' ? 'nav-link active' : 'nav-link'}
        >
          BUY FONTS
        </a>
      </li>
      
    </ul>
    </div>
  );
}

export default NavTabs;
