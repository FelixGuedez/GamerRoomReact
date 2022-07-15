import React, { useState } from 'react'
import './ItemCount.css'
import { toast, ToastContainer } from 'react-toastify';

const ItemCount = ({ inicial, stock, onAdd }) => {

    const [qty, SetQty] = useState(inicial)

    const sumar = () => {
        qty < stock ? SetQty(qty + 1) :
            toast.warn('No se pueden agregar mas productos', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });

    }

    const restar = () => {
        qty > inicial ? SetQty(qty - 1) :
            toast.warn('No se pueden quitar mas productos', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
    }


    return (
        <>
            <div className='container-botones '>
                <div className='btn-producto d-flex justify-content-between '>
                    <button className='btn-sum-rest' onClick={restar}>-</button>
                    <span>{qty}</span>
                    <button className='btn-sum-rest' onClick={sumar}>+</button>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <button className='btn-agregar' onClick={() => {
                        (qty <= stock && qty > 0) ? onAdd(qty) : alert('No existe mas stock de este producto')
                    }}>Agregar a Carrito</button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default ItemCount
