import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';
const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3 col-sm-12 nav transmision">
                        <Link to="/prevencion">Prevención</Link>
                    </div>
                    <div className="col-md-3 col-sm-12 nav sintomas">
                        <Link to="/sintomas">Sintomas</Link>
                    </div>
                    <div className="col-md-3 col-sm-12 nav variante">
                        <Link to="/transmision">Transmisión</Link>
                    </div>
                    <div className="col-md-3 col-sm-12 nav tratamientos">         
                        <Link to="/tratamiento">Tratamiento</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;