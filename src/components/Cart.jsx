import React from 'react'
import {useContext} from 'react';
import {CartContext} from './context/CartContext';

export default function Cart() {
    const {getItemQty, getItemPrice, emptyCart} = useContext(CartContext)

    return (
        <div>
            Cart
            <br />
            Cantidad de Productos: {getItemQty()}
            <br />
            Total de la Compra: ${getItemPrice()}
            <br />
            <button className='btn-agregar' onClick={() => {emptyCart()}}>Borrar Carrito</button>




        </div>
    )
}
