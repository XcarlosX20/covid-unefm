import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {SCROLL} from '../../../services/helpers';
const Home = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src="https://res.cloudinary.com/do5yybhwe/image/upload/v1619934571/UNEFM/bienvenidos-min_d64yyf.jpg"
                            height="400px" width="600px" alt="home"
                            className="img-fluid mb-3" />
                    </div>
                    <div className="col-md-6 col-sm-12 align-self-center">

                        <h2><b>¡BIENVENIDOS!</b><i className="fas fa-stethoscope mx-3"></i></h2>
                        <article>
                            <p>Somos estudiantes del V Semestre de Medicina de la Universidad Nacional
                            Experimental "Francisco de Miranda", ubicada en la Ciudad de Coro, Estado Falcón.</p>
                            <p>Nos complace anunciarles que estamos llevando a cabo nuestras Micropasantías
                            en la Urbanización Las Velitas, de la Parroquia Santa Ana, Municipio Miranda del
                            Estado Falcón, desarrollando actividades sobre Prevención y Promoción de la Salud enfocadas en la Pandemia del COVID-19 en dicha comunidad.</p>
                            <p>Te invitamos cordialmente a seguir y a informarte con cada una de nuestras
                            actividades y contenido que compartiremos en éste Blog.
</p>
                        </article>

                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <h3><b>¿Que es el coronavirus?</b></h3>
                                <p>Los coronavirus son una extensa familia de virus que pueden causar enfermedades tanto en animales como en humanos. El coronavirus que se ha descubierto más recientemente causa la enfermedad por coronavirus COVID-19.</p>
                            </div>
                            <div className="col-md-6 col-sm-12 px-3">
                                <img className="img-fluid mb-4" src="https://res.cloudinary.com/do5yybhwe/image/upload/v1620068688/UNEFM/covid-gfa988906e_1280_ifyjrw.jpg" alt="mundo" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h3><b>¿Que es el covid-19?</b></h3>
                        <p>El COVID-19 es la enfermedad infecciosa causada por el coronavirus que se ha descubierto más recientemente. Tanto el nuevo virus como la enfermedad eran desconocidos antes de que estallara el brote en Wuhan (China) en diciembre de 2019.</p>
                    </div>
                    <div className="col-md-4 pt-2">
                        <h3>¿Cuales son los sintomas de la covid-19?</h3>
                        <p>Los sintomas habituales son:</p>
                        <ul>
                            <li>Fiebre</li>
                            <li>Tos seca</li>
                            <li>¿Cansancio</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <p>Los síntomas más comunes de la COVID-19 son fiebre, cansancio y tos seca. Algunos pacientes pueden presentar dolores, congestión nasal, rinorrea, dolor de garganta o diarrea. Estos síntomas suelen ser leves y aparecen de forma gradual. Algunas personas se infectan pero no desarrollan ningún síntoma y no se encuentran mal.
                            Para mas informacion Visita la seccion de <Link onClick={()=> SCROLL(250)} to="/sintomas">Sintomas</Link>
                        </p>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

export default Home;