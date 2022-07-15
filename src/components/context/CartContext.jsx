import { useState } from "react";
import { createContext, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('items')) ?? [])


    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(cart))

    }, [cart])


    const isInCart = (id) => {
        return cart.some(e => e.id === id)

    }

    const addItem = (item, qty) => {
        const newItem = {
            ...item, qty
        }

        if (isInCart(newItem.id)) {
            const findProduct = cart.find(e => e.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            if (auxArray[productIndex].qty + qty > newItem.stock) {
                auxArray[productIndex].qty = newItem.stock
                toast.warn('Las cantidades en el carrito no pueden superar el stock del producto', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            } else { auxArray[productIndex].qty += qty }


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
        return cart.reduce((acc, x) => acc += x.qty * x.precio, 0)

    }

    const AlertSuccess = (message) => {

        toast.success({ message }, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        return (
            <ToastContainer />
        )
    }

    return <>
        <Provider value={{ cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice, AlertSuccess }} >{children}</Provider>
        <ToastContainer />
    </>

}
export default MyProvider

