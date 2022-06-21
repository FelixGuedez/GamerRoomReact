import React from 'react'
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from './context/CartContext'

export default function CartWidget() {
    const {getItemQty} = useContext(CartContext)

    return (
        <div className='d-flex flex-row'>
            <img src={'https://icongr.am/entypo/shopping-cart.svg?size=30&color=ff7f11'} alt="Carrito" />
            <div>
                <p className='text-card'>{getItemQty()}</p>
            </div>
        </div>
    )
}
