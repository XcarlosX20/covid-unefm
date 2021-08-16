import React, { Fragment } from 'react';
import './Estudent.css';
const Estudent = ({ nombre, edad, descripcion, img}) => {
    return (
        <Fragment>
            <div className="card p-2 m-3">
                <img width="150px" height="100px" className="img-fluid" src={img} alt={nombre}/>
                <div className="card-body">
                    <div className="card-title">
                        <h3><b>{nombre}</b></h3>
                    </div>
                    <div className="card-text">
                        <span>{edad} años</span>
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Estudent;