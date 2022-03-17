import React, { useState, useEffect } from "react";

import '../../styles/style.css';

const { REACT_APP_FONTURLB } = process.env;

export default function Buy() {
        const [text, setText] = useState('');
        const [txLoading, setTxLoading] = useState(true);

        useEffect(() => {
 
            const fetchText = () => {
               // this would usually be your own backend, or localStorage
               // for example
               // ,{ mode: 'no-cors'} 
               fetch(`${REACT_APP_FONTURLB}`)
                 .then((response) => response.json())
                 .then((data) => {
                   //console.log("response : " + data);
                  /* var json = JSON.stringify(data);
                    console.log("content-json : "+json);
                     json = JSON.parse(json);*/
                   const content = data.content;
                   setText(content);
                   setTxLoading(false);
                  // console.log("response 2 : " + content);
                 })
                 //.then((data) => setFonts(data.content))
                 .catch((error) => console.log("An error occured when fetching data - " + error));
             };
         
             fetchText();
           }, []);


    //console.log("in buy text :"+text);
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