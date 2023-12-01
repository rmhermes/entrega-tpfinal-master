import React from 'react'
import './aboutUsPage.css'
const AboutUsPage = () => {
  return (
    <div className='aboutUs'>
      <div className="aboutUsText">
        <h4>Nuestro emprendimiento</h4>
        <p> comenzó con un par de esquejes en una terraza y se expandió hasta lo que hoy conocemos como Ramificarte, que no es sólo un vivero, también es un espacio de aprendizaje donde capacitamos a cada cliente con el cuidado de las plantas para poder tenerlas en las condiciones más favorables para su desarrollo. </p>
      </div>
      <div className="spanAboutUs">

        <div className="spanChild">
          <span className='asideSpanTxt'>
            Dedicamos nuestro tiempo a la reproducción de plantas específicas, para obtener los especimenes más fuertes de cada especie.
          </span>
        </div>
        <div className="spanChild">
          <span className='asideSpanTxt'>
            Disponemos de un "hospital de plantas" listo para que los clientes traigan sus ejemplares enfermos para recuperación a cargo de profesionales.
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage