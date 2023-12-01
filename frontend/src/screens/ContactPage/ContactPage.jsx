import React, { useState, useEffect } from 'react'
import './contactPage.css'

import { useCustomContext } from '../../ContextManager/ContextProvider'
import MensajeCard from '../../components/MensajeCard/MensajeCard'

const ContactPage = () => {
  useEffect(() => {
    fetch('http://localhost:420/api/mensajes')
      .then(res => res.json())
      .then(result => setCurrentMensajes(result.mensajes))
  }, [])

  const [currentMensajes, setCurrentMensajes] = useState([])

  const { createMensaje, updatedPage } = useCustomContext()

  const [nombre, setNombreValue] = useState('')
  const [apellido, setApellidoValue] = useState('')
  const [mensaje, setMensajeValue] = useState('')

  const onClickCreateMensaje = () => {
    console.log(mensaje)
    createMensaje({ nombre, apellido, mensaje })
    updatedPage()
  }


  return (
    <>
      <div className='contactPage'>

        <h2 className='tltContact'>Dejá tu mensaje en nuestra web</h2>


        <div className='contactFormPosts'>
          <div className='formContact'>
            <label htmlFor="name">Nombre:</label>
            <input value={nombre} onChange={(e) => { setNombreValue(e.target.value) }} type='string' />
            <label htmlFor="lastname">Apellido: </label>
            <input value={apellido} onChange={(e) => { setApellidoValue(e.target.value) }} type='string' />
            <label htmlFor="mensaje">Mensaje: </label>
            <textarea name="mensaje" value={mensaje} onChange={(e) => { setMensajeValue(e.target.value) }} type='string' id="mensaje" rows="7" cols="35" ></textarea>
            <button onClick={onClickCreateMensaje}>Enviar tu mensaje</button>
          </div>
          <div className="mensajeCont">

            {currentMensajes.map(mensaje => (
              <MensajeCard mensaje={mensaje} key={mensaje._id} />
            ))
            }

          </div>
        </div>

      </div>
    </>
  )
}

export default ContactPage