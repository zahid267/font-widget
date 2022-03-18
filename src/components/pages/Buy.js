import React, { useState, useEffect } from "react";

import '../../styles/style.css';

const { REACT_APP_FONTURLB } = process.env;

export default function Buy() {
        const [text, setText] = useState('');
        const [txLoading, setTxLoading] = useState(true);

        useEffect(() => {
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

    return(
        <div className="fonttext">
            {text ?
            (   
               
              <p className="child">{text}</p> 
                 
            )
            : (txLoading ? <div>Loading ...</div> : <div>No Font Buy data available</div>)}
            </div>
    )

}