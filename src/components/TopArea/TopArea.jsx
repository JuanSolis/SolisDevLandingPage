import React from 'react';
import Header from '../Header/Header'

import './TopArea.css';

const TopArea = () => {
    return (
        
        <div className="HeaderArea">
            <Header/> 
          
            <div className="landingArea">   
                <div className="weAre-Text">
                    <h1 className="hi">Desarrolla tus proyectos con especialistas en el area junto al equipo de <span className="Phrase">SolisDev</span>.</h1>
                </div>
            </div>
            
        </div>
    );
}

export default TopArea;