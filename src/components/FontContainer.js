import React, { useState } from 'react';
import NavTabs from './NavTabs.js';
import Home from './pages/Home';
import Buy from './pages/Buy';
//import { useFontContext } from '../utils/FontContexts';

export default function FontContainer() {
  //const { fonts } = useFontContext();
  const [currentPage, setCurrentPage] = useState('Home');

  //console.log("in fontContainer fonts : "+ fonts);

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    
    if (currentPage === 'Buy') {
      return <Buy />;
    }else if (currentPage === 'Home') {
      return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  //console.log("currentPage : " + currentPage);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
