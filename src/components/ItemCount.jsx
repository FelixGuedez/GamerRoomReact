import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ inicial, stock, onAdd }) => {

    const [count, setCount] = useState(inicial)

    const sumar = () => {
        count < stock ? setCount(count + 1) : alert('No puedes agregar mas productos')
    }

    const restar = () => {
        count > inicial ? setCount(count - 1) : alert('No puedes quitar mas productos')
    }


    return (
        <div className='container-botones '>
            <div className='btn-producto d-flex justify-content-between '>
                <button className='btn-sum-rest' onClick={restar}>-</button>
                <span>{count}</span>
                <button className='btn-sum-rest' onClick={sumar}>+</button>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <button className='btn-agregar' onClick={() => {
                    count <= stock ? onAdd(count) : alert('No existe stock de este producto')}}>Agregar a Carrito</button>
            </div>

        </div>
    )
}

export default ItemCount
