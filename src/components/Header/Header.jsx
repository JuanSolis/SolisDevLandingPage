import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as LogoIcon } from '../../assets/svg/CaligrafiaSolisDev2.svg';
import './header-css.css';

const Header = () => {
    return(
        <nav className="Contenedor-Header">
            <div className="Contenedor-Logo">
                <ul>
                    <li>
                        <div className="Logo-Container">
                            <p className="Logo">SolisDev</p>
                        </div>
                    </li>
                </ul>
            </div>
            
           <div className="Contenedor-links">
                <ul>
                    <li>
                        <Link to="/About" className="link">Nosotros</Link>
                    </li> 
                </ul>

                <ul>
                    <li>
                        <Link to="/Services" className="link">Servicios</Link>
                    </li> 
                </ul>

                <ul>
                    <li>
                        <Link to="/Contact" className="link">Contacto</Link>
                    </li> 
                </ul>

                
           </div>
           
           
        </nav>
           
    );
}

export default Header;