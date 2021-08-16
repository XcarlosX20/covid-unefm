import React,{useEffect} from 'react';
import { observer } from '../../services/helpers';
import './Prevencion.css';
const Prevencion = () => {
    //animate__animated animate__zoomIn
    useEffect(() => {
        observer();
    }, [])
    return (
        <div className="container mb-5">
            <h2 className="animate__animated animate__slideInDown text-center m-4 "><b>Prevencion</b></h2>
            <p className="animate__animated animate__fadeInLeft">Si en su comunidad se propaga el contagio por COVID-19 manténgase seguro a
                través de las medidas de bioseguridad, por ejemplo: Conservar distanciamiento
                físico, uso obligatorio de la mascarilla, ventilar bien las habitaciones y evitar las
                aglomeraciones, lavarse constantemente las manos y, en caso de toser, cubrirse
                la boca y la nariz con el codo flexionado o, bien sea, con un pañuelo.</p>
            <div className="container-grid-prevencion">
                <iframe className="side-1 animate__animated animate__slideInDown" width="1148" height="480" src="https://www.youtube.com/embed/GnTCXNY0LGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <article className="side-2 animate__animated animate__slideInDown">
                    <p>¿Cómo usar correctamente la Mascarilla?</p>
                    <li>Lávese las manos antes de colocarse la mascarilla. Es muy importante tener las manos limpias antes y después de quitársela, así como también cada vez que tenga que tocarla.</li>
                    <li>Asegúrese de que ésta cubre en su totalidad nariz, boca y mentón.</li>
                    <li>Cuando se retire la mascarilla guárdela en una bolsa de plástico limpia y seca; si ésta es de tela lávela cada día y si es una mascarilla médica, tírela a un cubo de basura.</li>
                </article>
                <article className="side-3">
                    <p className="text-center">¿Entonces, cómo mantenernos a salvo del Covid-19?</p>
                    <li>Distanciamiento: Guardar al menos 1,5 metros de distancia, entre usted y las otras personas, con la finalidad de reducir el riesgo de infección, en caso de que estornuden, tosan o hablen, liberando gotículas infectadas. En espacios interiores mantener una distancia aún mayor entre usted y las demás personas. Cuanto mayor sea la distancia mucho mejor.</li>
                    <li>Uso obligatorio de Mascarilla: Es de suma importancia convertir el uso de la mascarilla en una parte normal de su interacción con otras personas. Para que sean lo más eficaces posibles, es esencial utilizar, guardar, limpiar y eliminar las mascarillas correctamente.</li>
                </article>
            </div>
            <article>
                <h3 className="text-center text-uppercase">¡No olvide las normas básicas de la buena higiene!</h3>
                <ul>
                    <li>Lávese constantemente las manos con un gel hidroalcohólico o con agua y
                        jabón abundante. Esto elimina los gérmenes que pudieran estar en sus manos, incluidos los virus.</li>
                    <li>Evite tocarse los ojos, la nariz y la boca. Las manos tocan muchas
                        superficies en las que podrían estar el virus, de esta manera una vez
                        contaminadas, pueden transportar el virus a las mucosas, aprovechando de entrar al organismo e infectarlo.</li>
                    <li>Al toser o estornudar cúbrase la boca y la nariz con el codo flexionado o
                        con un pañuelo. De inmediato deseche el pañuelo utilizo en una papelera con tapa y lávese las manos.</li>
                    <li>Limpie y desinfecte con frecuencia las superficies, particularmente las que
                        se tocan con regularidad, por ejemplo: pasadores, grifos y pantallas de celulares.</li>
                </ul>
            </article>
            <div>
                <iframe width="1350" height="488" src="https://www.youtube.com/embed/n6oRGf3hqws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <span><b>Tampoco te olvides de suscribirte a nuestro canal de <a href="https://www.youtube.com/channel/UC9xM4UOQFrtGFlGnXcskDmQ">YouTube </a></b></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
        </div>
    );
}

export default Prevencion;