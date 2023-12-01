import React, { useState, useEffect } from 'react'
import { ProductCardEdit } from '../../components'
import './settingPage.css'

import { useCustomContext } from '../../ContextManager/ContextProvider'





const SettingsPage = ({ producto }) => {
    useEffect(() => {
        fetch('http://localhost:420/api/products')
            .then(res => res.json())
            .then(result => setCurrentProducts(result.products))
    }, [])

    const [currentProducts, setCurrentProducts] = useState([])

    const { createProduct, updatedPage } = useCustomContext()

    const [nombre, setNombreValue] = useState('')
    const [precio, setPrecioValue] = useState('')
    const [stock, setStockValue] = useState('')
    const [descripcion, setDescValue] = useState('')
    const [historia, setHistoriaValue] = useState('')
    const [thumbnail, setThumbnailValue] = useState('')

    const [isShown, setIsShown] = useState('')
    const handleClick = () => {
        setIsShown(current => !current)
    }

    
    const validateData = (nombre, precio, stock, descripcion, historia, thumbnail) => {

        if (nombre === '' || precio === '' || stock === '' || descripcion === '' || historia === '' || thumbnail === '') {
            return false
        } else {
            return true
        }
    }

    const onClickCreateProduct = () => {
        if (validateData(nombre, precio, stock, descripcion, historia, thumbnail)) {
            createProduct({ nombre, precio, stock, descripcion, historia, thumbnail })
            .then( Swal.fire(
                'Se creó un nuevo producto'
            ))
            updatedPage()


        } else {
            ( Swal.fire(
                'Debe completar todos los campos.'
            ))
        }


    }

    return (

        <div className='settingPage'>


            <h3 className='setTitle'>MANEJO DE PRODUCTOS</h3>
            <button onClick={handleClick}>Agregar nuevo producto</button>
            {isShown && (
                <div className='newProductCard'>

                    <div className="leftSide">

                        <label>Nombre:</label>
                        <input value={nombre} onChange={(e) => { setNombreValue(e.target.value) }} type='string' />
                        <label>Precio:</label>
                        <input value={precio} onChange={(e) => { setPrecioValue(e.target.value) }} type='number' />
                        <label>Stock:</label>
                        <input value={stock} onChange={(e) => { setStockValue(e.target.value) }} type='number' />
                        <label>Descripción:</label>
                        <textarea name="descripcion" value={descripcion} onChange={(e) => { setDescValue(e.target.value) }} type='string' id="historia" rows="10" ></textarea>
                    </div>
                    <div className="rightSide">
                        <label>Historia:</label>
                        <textarea name="historia" value={historia} onChange={(e) => { setHistoriaValue(e.target.value) }} type='string' id="historia" rows="10" ></textarea>
                        <label>Imagen:</label>
                        <textarea name="img" value={thumbnail} onChange={(e) => { setThumbnailValue(e.target.value) }} type='string' id="thumbnail" rows="5" ></textarea>
                        <button onClick={onClickCreateProduct}>CREAR PRODUCTO</button>
                        <br />
                        <p style={{ fontSize: '10px' }}>Todos los campos deben ser completados</p>
                    </div>
                </div>
            )}


            <div className='cardSetting'>
                {currentProducts.length > 0 ? currentProducts.map(producto => (
                    <>

                        <ProductCardEdit updatedPage={updatedPage} key={producto._id} producto={producto} stock={producto.stock} id={producto._id} />

                    </>
                )) : <h3 className='noProductAlert'>'No se encuentra ningún producto'</h3>

                }
            </div>
        </div>

    )
}

export default SettingsPage