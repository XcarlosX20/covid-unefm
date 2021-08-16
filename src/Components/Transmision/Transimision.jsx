import React from 'react';
import './Transmision.css';
import 'animate.css';
const Transmision = () => {
    return (
        <div className="container pb-5" id="transmision">
            <h2 className="animate__animated animate__slideInDown text-center m-4" ><b>Transmision</b></h2>
            <div className="container-grid-transmision">
                <img className="img-fluid animate__animated animate__zoomIn" src="https://res.cloudinary.com/do5yybhwe/image/upload/v1619934569/UNEFM/periodo_de_transmicion-min_ijmn75.jpg" alt="tratamiento" />
                <p className="animate__animated animate__slideInUp">Una persona puede contraer COVID-19 por contacto con otra que esté infectada por el virus. Esta enfermedad puede propagarse de persona a persona a través de las gotículas procedentes de la nariz o la boca que salen despedidas cuando una persona infectada tose o exhala. Dichas gotículas caen sobre los objetos y superficies que rodean a la persona, de modo que otras personas pueden contraer COVID-19 si tocan estos objetos o superficies y luego se tocan los ojos, la nariz o la boca. También pueden contagiarse si inhalan las gotículas que haya esparcido una persona con COVID-19 al toser o exhalar. Por eso es importante mantenerse a distancia</p>
            </div>
        </div>
    );
}

export default Transmision;