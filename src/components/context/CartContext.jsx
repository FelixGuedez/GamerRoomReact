import { useState } from "react";
import { createContext, useEffect } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('items'))?? [])


    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(cart))

    }, [cart])
    

    const isInCart = (id) => {
        return cart.some(e => e.id === id)

    }

    const addItem = (item, qty) => {
        const newItem = {
            ...item,qty
        }

        if (isInCart(newItem.id)) {
            const findProduct = cart.find(e => e.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].qty + qty > newItem.stock ? auxArray[productIndex].qty = newItem.stock : auxArray[productIndex].qty += qty
            setCart(auxArray)

        } else {
            setCart([...cart, newItem])
            
        }
    
    }

    const emptyCart = () => {
        setCart([])
    }
    const deleteItem = (id) => {
        return setCart(cart.filter(e => e.id !== id))

    }
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.qty, 0)


    }
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.qty*x.precio, 0)

    }



    return <Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice}} >{children}</Provider>

}
export default MyProvider

