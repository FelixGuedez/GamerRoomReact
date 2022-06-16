import React from 'react'
import './CartWidget.css'

export default function CartWidget({ items }) {
    return (
        <div className='d-flex flex-row'>
            <img src={'https://icongr.am/entypo/shopping-cart.svg?size=30&color=ff7f11'} alt="Carrito" />
            <div>
                <p className='text-card'>{items}</p>
            </div>
        </div>
    )
}
