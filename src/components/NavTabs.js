import React from 'react';
import '../styles/style.css';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {

  return (
    <div className='d-flex justify-content-between'>
    <p className="headtext">Please select one font</p>
    <ul className="nav nav-tabs">
      <li tabIndex='0' className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          MY FONTS
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#buy"
          onClick={() => handlePageChange('Buy')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
