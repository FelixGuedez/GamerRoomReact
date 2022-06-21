import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(e => e.id === id)

    }

    const addItem = (item, qty) => {
        console.log(item, qty)
        const newItem = {
            ...item,qty
        }
        console.log(newItem)

        if (isInCart(newItem.id)) {
            const findProduct = cart.find(e => e.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].qty += qty
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
    console.log(cart)
    

    return <Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice}} >{children}</Provider>

}
export default MyProvider

