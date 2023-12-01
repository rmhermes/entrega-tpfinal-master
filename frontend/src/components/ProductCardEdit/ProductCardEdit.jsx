import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom'
import './productCardEdit.css'
import { useCustomContext } from '../../ContextManager/ContextProvider'


const ProductCardEdit = ({ producto, updatedPage }) => {
    const { updateProduct, deleteProduct } = useCustomContext()
    const [idValue, setIdValue] = useState(producto._id)
    const [nombreValue, setNombreValue] = useState(producto.nombre)
    const [precioValue, setPrecioValue] = useState(producto.precio)
    const [stockValue, setStockValue] = useState(producto.stock)
    const [descValue, setDescValue] = useState(producto.descripcion)
    const [historiaValue, setHistoriaValue] = useState(producto.historia)
    const [thumbnailValue, setThumbnailValue] = useState(producto.thumbnail)



    const onClickUpdateProduct = () => {
        updateProduct({ idValue, nombreValue, precioValue, stockValue, descValue, historiaValue, thumbnailValue })
        .then( Swal.fire(
            'Se actualizó el producto'
        ))
        updatedPage()
    }
    const onClickDeleteProduct = () => {
        deleteProduct(idValue)
        .then( Swal.fire(
            'Se eliminó el producto'
        ))
        updatedPage()
    }

    return (

        <div className="settingProductCard">

            <div className="setCard">
                <label>Nombre:</label>
                <input value={nombreValue} onChange={(e) => { setNombreValue(e.target.value) }} type='string' />
                <label>Precio:</label>
                <input value={precioValue} onChange={(e) => { setPrecioValue(e.target.value) }} type='number' />
                <label>Stock:</label>
                <input value={stockValue} onChange={(e) => { setStockValue(e.target.value) }} type='number' />
                <label>Descripción:</label>
                <textarea name="descripcion" value={descValue} onChange={(e) => { setDescValue(e.target.value) }} type='string' id="historia" rows="10"></textarea>
                <label>Historia:</label>
                <textarea name="historia" value={historiaValue} onChange={(e) => { setHistoriaValue(e.target.value) }} type='string' id="historia" rows="10"></textarea>
                <label>Imagen:</label>
                <textarea name="img" value={thumbnailValue} onChange={(e) => { setThumbnailValue(e.target.value) }} type='string' id="thumbnail" rows="5" ></textarea>
            </div>
            <div className="imgSet">
                <img className='imgCard' src={producto.thumbnail} alt={producto.nombre} />

            </div>
            <div className="setButtons">
                <button onClick={onClickUpdateProduct}>Actualizar</button>
                <button onClick={onClickDeleteProduct}>Eliminar</button>
            </div>

        </div>
    )
}

export default ProductCardEdit 
