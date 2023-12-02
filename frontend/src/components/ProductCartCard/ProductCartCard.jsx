import React, { useState } from "react";
import './productCartCard.css'

import { useCustomContext } from '../../ContextManager/ContextProvider'

const ProductCartCard = ({ producto, initialValue, stock }) => {
    const { modifyProductCard } = useCustomContext()
    const onClickModifyProduct = (quantity) => {
        modifyProductCard(producto._id, quantity)

    }
    return (
        <div className="cartCard">
            <h2>{producto.nombre}</h2>
            <img className='imgCardCart' src={producto.thumbnail} alt={producto.nombre} />
            <h3>Precio: ${producto.precio}</h3>
            <p>Cantidad: {producto.quantity}</p>
            <div className="counterControler">
                <button onClick={() => onClickModifyProduct(producto.quantity > 1 ? producto.quantity - 1 : producto.quantity)}>-</button>

                <button onClick={() => onClickModifyProduct(producto.quantity === stock ? producto.quantity : producto.quantity + 1)}>+</button>
              
            </div>
            <button type="submit">Comprar</button>
        </div>
    )
}
export default ProductCartCard