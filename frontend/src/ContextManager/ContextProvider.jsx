import React, { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext()
const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:420/api/products')
            .then(res => res.json())
            .then(result => setProducts(result.products))
    }, [])


    const getProductById = (id) => {
        return products.find(producto => producto._id === id)
    }
    const getProductCartById = (id) => {
        return cart.find(producto => producto._id === id)
    }

    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some(producto => producto._id === id)

    const superaStock = (id, quantity) => {
        const product = getProductCartById(id)
        if (product == null) {
            return false
        }

        const maxStock = quantity + product.quantity > product.stock
        return maxStock
    }
    const addProductCart = (id, quantity) => {
        if (isInCart(id)) {
            setCart(cart.map(product => {
                if (product._id == id) {

                    product.quantity = quantity + product.quantity
                        > product.stock ?
                        product.stock :
                        quantity + product.quantity

                }
                return product
            }))
        } else {
            setCart([...cart, { ...getProductById(id), quantity: quantity }])
        }
    }
    const modifyProductCard = (id, quantity) => {

        setCart(cart.map(product => {
            if (product._id == id) {
                product.quantity = quantity
            }
            return product
        }))

    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    }


    const updatedPage = () => {
        location.reload()
    }

    const deleteProduct = async (id) => {
        const deleteProduct = {
            method: 'DELETE'
        };
        await fetch('http://localhost:420/api/products/' + id, deleteProduct)
            .then(result => {
                if (result.ok) {
                    console.log(result)
                } else {
                    console.log(result.error)
                }
            })

    }



    const updateProduct = async (product) => {

        console.log(product)
        const newProduct =
        {
            _id: product.idValue,
            nombre: product.nombreValue,
            precio: product.precioValue,
            stock: product.stockValue,
            descripcion: product.descValue,
            historia: product.historiaValue,
            thumbnail: product.thumbnailValue

        }

        const updateProduct = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        };
        await fetch('http://localhost:420/api/products', updateProduct)
            .then(result => {
                if (result.ok) {
                    console.log(result)
                } else {
                    console.log(result.error)
                }
            })

    }


    const createProduct = async (newProduct) => {

        const createProduct = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        };
        await fetch('http://localhost:420/api/products', createProduct)
            .then(result => {
                if (result.ok) {
                    console.log(result)
                } else {
                    console.log(result.error)
                }
            })

    }

    const createMensaje = async (newMensaje) => {

        const createMensaje = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMensaje)
        };
        await fetch('http://localhost:420/api/mensajes', createMensaje)

    }


    return (
        <Context.Provider value={{ products, createProduct, updatedPage, getProductById, cart, addProductCart, superaStock, modifyProductCard, updateProduct, isInCart, getProductCartById, getTotal, deleteProduct, createMensaje }}>
            {children}
        </Context.Provider>
    )
}




export const useCustomContext = () => useContext(Context)
export default ContextProvider