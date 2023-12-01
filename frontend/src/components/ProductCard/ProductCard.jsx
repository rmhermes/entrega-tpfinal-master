import React from "react";
import { Link, useParams } from 'react-router-dom'
import './productCard.css'
import { Counter } from '../../components'

import { useCustomContext } from '../../ContextManager/ContextProvider'


const ProductCard = ({ producto }) => {
    const { isInCart } = useCustomContext()
    const { id } = useParams()

    return (
        <div className="productCard">
            <div className="card">
                <img className='imgCard' src={producto.thumbnail} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <h3>Precio: ${producto.precio}</h3>
                <div className="textCard">
                    <p> {producto.descripcion}</p>
                    <Link to={'/detail/' + producto._id}>Ver producto</Link>

                </div>
                <div className='contDetailProductCard'>
                    {
                        <Counter initialValue={1} stock={producto.stock} id={producto._id} />}


                </div>
            </div>
        </div>
    )
}

export default ProductCard
