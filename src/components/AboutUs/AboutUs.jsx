import React from 'react';

import './AboutUs-styles.css';

const AboutUs = () => {
    return (
        <div className="AboutUs-container">
            <div className="AboutUS-Header">
                <h2>Sobre Nosotros</h2>
                <hr/>
            </div>
            <div className="AboutUs-information">
                <p>Somos un equipo conformado por tres especialistas en <span>Infraestructura</span>, desarrollo <span>back to front</span>, <span>analisis de datos</span> e <span>informatica y sistemas</span>  en conjunto a un especialista visual 
                centrado en el <span>diseño, ilustracion y fotografia.</span></p>
                <br/>
                <p><span>SolisDev</span> parte de la idea de ayudar a pequeñas, medianas y grandes <span>ideas emprendedoras</span> con soluciones
                tecnologicas para su mayor crecimiento en la <span>era digital</span>.</p>

                <div className="Avatares-Container">
                </div>
            </div>
        </div>
    );
}

export default AboutUs;