import React,{useEffect} from 'react';
import { observer } from '../../services/helpers';
import "./Sintomas.css"

const Sintomas = () => {
    useEffect(() => {
        observer();
    }, [])
    return (
        <div className="container" id="sintomas">
            <h2 className="animate__animated animate__slideInDown text-center m-4"><b>Sintomas</b></h2>
                <p className="animate__animated animate__fadeInLeft">
                    El COVID-19 afecta de distintas maneras en función de cada persona. La
                    mayoría de las personas que se contagian presentan síntomas de
                    intensidad leve o moderada, y se recuperan sin necesidad de
                    hospitalización.
                </p>
                <div className="animate__animated animate__fadeInLeft">
                    <p className="text-center"><b>¿Cuáles son los síntomas de la COVID-19?</b></p>
                    <p>Los síntomas más habituales de la COVID-19 son <b>fiebre, tos seca y
                    cansancio</b>. Sin embargo otros síntomas menos frecuentes y que pueden
                    afectar a algunos pacientes son la <b>pérdida del gusto o el olfato, congestión
                    nasal, el enrojecimiento ocular, dolor de garganta, dolor de cabeza, dolores
                    musculares o articulares, así como náuseas y/o vómitos, erupciones
                    cutáneas, diarrea, escalofríos o vértigos</b>.</p>
                </div>
                <img className="img-fluid animate__animated animate__zoomIn" src="https://res.cloudinary.com/do5yybhwe/image/upload/v1620196350/UNEFM/sintomas-covi_yy2gcv.jpg" alt="sintomas-covid"/>
                <div className="container-grid-sintomas">
                    <p>Ahora bien, entre los síntomas de un cuadro grave de la COVID-19
                    manifiestan dificultad respiratoria, pérdida de apetito, confusión, dolor u
                    opresión persistente en el pecho y temperatura por encima de los 38°C.
                    Otros síntomas menos frecuentes irritabilidad, ansiedad, depresión,
                    trastornos de sueño, complicaciones neurológicas más graves y raras,
                    como accidentes cerebrovasculares, inflamación del cerebro, estado
                    delirante y lesiones neurales.</p>
                    <p>Las personas de cualquier edad que tengan fiebre o tos y además respiren
                    con dificultad, sientan dolor u opresión en el pecho o tengan dificultadespara hablar o moverse deben solicitar atención médica inmediatamente. </p>
                </div>
                <div className="covid-kids" id="covid-kids">
                    <h2 className="text-center mb-3"><b>Covid-19 en niños</b></h2>
                    <iframe width="1350" height="488" src="https://www.youtube.com/embed/rMPZHYLLF4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
        </div>
    );
}

export default Sintomas;