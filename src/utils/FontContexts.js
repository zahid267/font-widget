import React, { createContext, useState, useEffect, useContext } from "react";
//import axios from 'axios';
//import { getFontData } from './API';
const { REACT_APP_FONTURLA } = process.env;

// create context
const FontContext = createContext();
export const useFontContext = () => useContext(FontContext);
export const FontContextProvider = ({ children }) => {
  // the value that will be given to the context
 // const [currentPage, setCurrentPage] = useState('Home');
  
  const [fonts, setFonts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
   /* setFonts(getFontData(`${REACT_APP_FONTURLA}`));
    setIsLoading(false);*/
   const fetchFont = () => {
      fetch(`${REACT_APP_FONTURLA}`)
        .then((response) => response.json())
        .then((data) => {
         // console.log("response : " + data);
         /* var json = JSON.stringify(data);
           console.log("content-json : "+json);
            json = JSON.parse(json);*/
          const content = data.content;
          setFonts(content);
          setIsLoading(false);
         // console.log("response 2 : " + content);
        })
        //.then((data) => setFonts(data.content))
        .catch((error) => console.log("An error occured when fetching data - " + error+` ${REACT_APP_FONTURLA}`));
    };
    fetchFont();
  }, []);
  //const handlePageChange = (page) => setCurrentPage(page);

 // console.log("fonts : " + fonts);

  return (
    // the Provider gives access to the context to its children
    <FontContext.Provider value={{ fonts, isLoading }}>
      {children}
    </FontContext.Provider>
  );
};
