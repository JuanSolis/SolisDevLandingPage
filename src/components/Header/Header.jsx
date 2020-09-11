import React from 'react';
import {Link} from 'react-router-dom';

import './header-css.css';

const Header = () => {
    return(
        <nav className="Contenedor-Header">
            <div className="Contenedor-Logo">
                <ul>
                    <li>
                        <Link to="/" className="link">SolisDev</Link>
                    </li>
                </ul>
            </div>
            
           <div className="Contenedor-links">
                <ul>
                    <li>
                        <Link to="/About" className="link">About</Link>
                    </li> 
                </ul>

                <ul>
                    <li>
                        <Link to="/Services" className="link">Services</Link>
                    </li> 
                </ul>

                <ul>
                    <li>
                        <Link to="/Contact" className="link">Contact</Link>
                    </li> 
                </ul>

                
           </div>
           
           
        </nav>
           
    );
}

export default Header;