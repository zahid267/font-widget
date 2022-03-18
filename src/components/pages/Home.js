import React from "react";

import { useFontContext } from '../../utils/FontContexts';

import '../../styles/style.css';

export default function Home() {
// access the context value
    const { fonts, isLoading, selectedFont, handleFontChange } = useFontContext();
   // const [selectedFont, setSelectedFont] = useState('');
    let tabind = 2;
    return(
        <div>
            {fonts ?
            (            
            <main className="box">
                {fonts.map((font, index) => (
                    <section tabIndex={index+tabind} className={`${index === 0 ? 'left' : 'right'}
                                        ${font.id=== selectedFont ? ' selected':''}`} 
                        key={font.id} onClick={() => handleFontChange(font.id)}
                        onKeyPress={(ev) => {
                            if (ev.key === "Enter") {
                              ev.preventDefault();
                              handleFontChange(font.id);
                            }
                          }}
                        >
                        <div className="fontbox">
                            <div className="fontcolor" style={{backgroundColor:font.color}} aria-label={`${font['color-blind-label']}`}>
                                <span className="bottom">{font.abbr}</span>
                            </div>
                        </div>
                        <ul>
                            <li>{font.label}</li>
                        </ul>
                    </section>
                )
                
                )}
            </main>
            )
            : (isLoading ? <div>Loading ...</div> : <div>No Font data available</div>)}
            </div>
    )

}