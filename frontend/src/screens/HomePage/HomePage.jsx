import React, { useState, useEffect } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../components'
import './homePage.css'

const HomePage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:420/api/products')
            .then(res => res.json())
            .then(result => {
                setProducts(result.products)
                setCurrentProducts(result.products)
            })

    }, [])
    const [searchProduct, setSearchProduct] = useState('')
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(100000)
    const [currentProducts, setCurrentProducts] = useState([])


    useEffect(() => {
        setCurrentProducts(products.filter(
            producto => producto.nombre.toUpperCase().includes(searchProduct.toUpperCase()) && producto.precio >= min && producto.precio <= max))

    }, [searchProduct, max, min])

    return (
        <div className='homePage'>
            <div className='homeSearch'>
                <input className='buscador' placeholder='Busca lo que deseas' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />

                <div className='precioCont'>

                    <div className='inputPrecio'>
                        <input className='inputNumber' placeholder='Precio minimo' type="number" onChange={(e) => setMin(Number(e.target.value))} />

                        <input className='inputNumber' placeholder='Precio máximo' type="number" onChange={(e) => setMax(Number(e.target.value))} />
                    </div>
                </div>
            </div>
            <div className='cardsHome'>
                {currentProducts.length > 0 ? currentProducts.map(producto => (
                    <ProductCard producto={producto} key={producto._id} />
                )) : <h3 className='noProductAlert'>No se encuentra ningún producto</h3>

                }
            </div>
        </div>

    )
}

export default HomePage