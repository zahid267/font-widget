import React, { createContext, useState, useEffect, useContext } from "react";
const { REACT_APP_FONTURLA } = process.env;
const { REACT_APP_FONTURLB } = process.env;

// create context
const FontContext = createContext();
export const useFontContext = () => useContext(FontContext);
export const FontContextProvider = ({ children }) => {
  
  const [fonts, setFonts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFont, setSelectedFont] = useState('');
  
  const [text, setText] = useState('');
  const [txLoading, setTxLoading] = useState(true);

  useEffect(() => {
    const fetchFont = () => {
      fetch(`${REACT_APP_FONTURLA}`)
        .then((response) => response.json())
        .then((data) => {
          const content = data.content;
          setFonts(content);
          setIsLoading(false);
        })
        .catch((error) => console.log("An error occured when fetching data - " + error+` ${REACT_APP_FONTURLA}`));
    };
    fetchFont();
    const fetchText = () => {
      fetch(`${REACT_APP_FONTURLB}`)
        .then((response) => response.json())
        .then((data) => {
          const content = data.content;
          setText(content);
          setTxLoading(false);
        })
        .catch((error) => console.log("An error occured when fetching data - " + error));
    };
    fetchText();
  }, []);
  const handleFontChange = (font) => setSelectedFont(font);
  return (
    // the Provider gives access to the context to its children
    <FontContext.Provider value={{ fonts, isLoading, selectedFont, handleFontChange, text, txLoading }}>
      {children}
    </FontContext.Provider>
  );
};
