import React from "react";
import './mensajeCard.css'



const MensajeCard = ({ mensaje }) => {

    return (
        <div className="mensajeCard">
            <div className="mensj">
                <div className="pMensj">
                    <p>{mensaje.nombre}</p>
                    <p>{mensaje.apellido}</p>
                </div>
                <h4>{mensaje.mensaje}</h4>
            </div>


        </div>
    )
}

export default MensajeCard
