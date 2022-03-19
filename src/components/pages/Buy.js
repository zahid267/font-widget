import React from "react";
import { useFontContext } from '../../utils/FontContexts';
import '../../styles/style.css';

export default function Buy() {
  const { text, txLoading } = useFontContext()
       
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