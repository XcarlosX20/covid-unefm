import React from 'react';
import Estudent from './Estudent';
const AboutUs = () => {
    const estudiantes = [
        {
            nombre: "Carlos Paredes", descripcion: "Estudiante de Medicina. Por medio de las actividades realizadas tengo la esperanza de que los miembros de la comunidad estén más informados acerca de la pandemia y que sean más consciente del riesgo que supone la enfermedad del Covid-19 para la salud y la vida de las personas. Además, la experiencia fue amena, creativa, el uso de herramientas digitales permitió agilizar el flujo de información y conservar las medidas de prevención. La disminución del contacto directo con los miembros de la comunidad permitió cuidar y proteger, así como bloquear cualquier posibilidad de transmisión del virus de nosotros los estudiantes a la comunidad y viceversa",
            edad: "24", img: "https://res.cloudinary.com/do5yybhwe/image/upload/v1620188420/UNEFM/estudents/carlos-paredes_zsjlgp.png"
        },
        {
            nombre: "Usama Yarbouh Samara", descripcion: "Estudiante de Medicina. Entre mis expectativas para éstas dos semanas estaban divertirme durante la ejecución de las actividades, sin embargo, durante el transcurso de las mismas me di cuenta de la gran responsabilidad que conlleva trabajar con una comunidad, y de lo satisfactorio e importante que es ayudar a los habitantes de la misma.",
            edad: "21", img: "https://res.cloudinary.com/do5yybhwe/image/upload/v1620016828/UNEFM/estudents/usama_dzqpcz.jpg"
        },
        {
            nombre: "Betsy Valera", descripcion: `Lcda. en Enfermería y Estudiante de Medicina. Las expectativas en cuanto a las Micropasantías era pensar en que nos
            iríamos a algún pueblito del Estado Falcón a llevarlas a cabo, pero con la
            situación pandemia pues nos cambió la situación y tocó adaptarnos a la
            nueva modalidad, pero satisfecha ya que a pesar de todo lo que ha
            conllevado dicha pandemia podemos decir que se logró el objetivo y que de
            alguna forma pudimos ser portavoces de lo que es la prevención contra el
            COVID-19 y reforzar de alguna manera lo que ya la comunidad conocía y
            darles nuevas informaciones que a su vez muchos desconocían.`,
            edad: "31", img: "https://res.cloudinary.com/do5yybhwe/image/upload/v1620016828/UNEFM/estudents/betsy_ctwrax.jpg"
        },
        {
            nombre: "Yoelvis Reyes", descripcion: `Las micropasantias son para mí una oportunidad de vivir de cerca la
            realidad de la comunidad, sentir sus necesidades y crear oportunidades
            para mejorar su calidad de vida. Mis expectativas fueron superadas en su
            totalidad al encontrarme con una comunidad organizada, dispuesta a
            trabajar y con ganas de avanzar y adaptarse a una nueva normalidad.`,
            edad: "21", img: "https://res.cloudinary.com/do5yybhwe/image/upload/v1620016836/UNEFM/estudents/Yoe_ag9bn9.jpg"
        },
        {
            nombre: "Josué Lugo Mendez", descripcion: "Mis expectativas fueron trabajar en la comunidad con la ayuda de sus integrantes y líderes comunales, ayudando y guiando a las personas en la actualidad con la pandemia. Fomentando la educación para eliminar mitos y tabús que han sido muy  polémicos y de muy poca ayuda en la conyuntura actual.",
            edad: "22", img: "https://res.cloudinary.com/do5yybhwe/image/upload/v1620185201/UNEFM/estudents/josue-lugo_twkmgi.jpg"
        },
        {
            nombre: "Miguel Mora", descripcion: "Estudiante de Medicina. Mi experiencia  en las Micropasantías a pesar de que fue en una situación  no habitual me gusto el poder compartir con los compañeros en cada visita a la comunidad.",
            edad: "23", img: "https://res.cloudinary.com/do5yybhwe/image/upload/v1620016862/UNEFM/estudents/Miguel_Mora_cuh7br.jpg"
        },
        {
            nombre: "María Laura Espinoza", descripcion: "Mi expectativa para las Micropasantías era vivir este momento de cercanía con las comunidades y acercarlos más a la información que nosotros como estudiantes de medicina podemos compartirles para la prevención y promoción de tema relacionados a la salud, para que les saquen todo el provecho y se mantengan alejados de cualquier tipo de problema de salud.",
            edad: "23", img: "https://res.cloudinary.com/do5yybhwe/image/upload/v1620016833/UNEFM/estudents/maria_laura_es_ephlqd.jpg"
        }, {
            nombre: "Paola Chinchilla", descripcion: "Mi experiencia en las micropasantias a pesar de todas las adversidades y las limitaciones por motivo de la Pandemia del Covid-19 fue usar las mismas como inspiración para crear herramientas de enseñanza y concientizacion a los habitantes de la comunidad sobre esta enfermedad que nos afecta a todos por igual. Y todas las medidas de prevención y seguridad que debemos tener. Y la oportunidad que se nos presenta como estudiantes de enseñar, dialogar y fortalecer nuestros conocimientos a un grupo de personas y entre nosotros mismos.",
            edad: "22", img: "https://res.cloudinary.com/do5yybhwe/image/upload/v1620018008/UNEFM/estudents/canilla_p64c4x.jpg"
        },
        {
            nombre: "Daniela Queralez", descripcion: 'Estudiante de Medicina. Espero que alcancemos vernos como portavoces de la salud e influir educativamente sobre la comunidad de "Las Velitas" de el Municipio Miranda (Edo. Falcón), en lo que compete como afrontar toda esta adversidad que produce la pandemia por el COVID-19, de manera que la misma cuente con vecinos más preventivos y capaces de mantener la calma ante esta situación',
            edad: "22", img: "https://res.cloudinary.com/do5yybhwe/image/upload/v1620186672/UNEFM/estudents/daniela-querale_qvtbb9.jpg"
        },
        {
            nombre: "Maria Gabriela Sierra", descripcion: 'En Trabajo Comunitario II conversé en algunas ocasiones con mi profesora, le pregunté que qué necesidad había de ir tantas veces a la comunidad si realmente lo que importaban eran los conocimientos que adquiríamos en cuanto a la carrera, la parte clínica en sí, y ella me decía "mas adelante entenderás y me darás a razón". Y ahora lo comprendo: lo más importante de un médico es su calidad humana, su deseo de ayudar y la empatía por su entorno, estas micropasantías dejan en mí una perspectiva diferente y más bonita de lo que yo quisiera a llegar a ser como médico pese a la situación pandémica y otros factores que quizás entendí que más que un título ser un humano dispuesto a prestar mis servicios a la comunidad en pro a sus necesidades.',
            edad: "22", img: "https://res.cloudinary.com/do5yybhwe/image/upload/v1620186655/UNEFM/estudents/gabi-min_iv8art.jpg"
        },
        {
            nombre: "Amelia Rivera", descripcion: 'Mis expectativas en la ejecución de las Micropasantías se basaban en como aplicaríamos de manera virtual lo que en dos semestres anteriores se hicieron presencialmente, si de esa manera llegaría el mensaje que queríamos dar a la comunidad, y realmente quede complacida, ya que aprovechamos al máximo todas las herramientas tecnológicas con las que contamos, abarcándolas casi en su totalidad, y entendimos que lo importante de todo era transmitir a la comunidad toda la información que preparamos para ellos y que si se logró el objetivo a pesar de la pandemia y el confinamiento por el que estamos atravesando mundialmente.',
            edad: "23", img: "https://res.cloudinary.com/do5yybhwe/image/upload/v1620171396/UNEFM/estudents/estudent_jf39iy.png"
        }
    ]
    return (
        <div className="container mb-4 text-center">
            <h2><b>Sobre Nosotros</b></h2>
            <div className="grid animate__animated animate__fadeIn">
                {estudiantes.map(estudiante => (
                    <Estudent key={estudiante.nombre}
                        nombre={estudiante.nombre}
                        edad={estudiante.edad}
                        descripcion={estudiante.descripcion}
                        img={estudiante.img} />
                ))}
            </div>
        </div>
    );
}

export default AboutUs;