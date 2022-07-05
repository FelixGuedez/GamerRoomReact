import React from 'react'
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import './Cart.css'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Cart() {
    const { getItemQty, getItemPrice, emptyCart, cart, deleteItem } = useContext(CartContext)

    return (
        <>
            <div className='cart-container container-fluid d-flex flex-column justify-content-center align-items-center'>
                {
                    getItemQty() > 0 ?

                        <h1 > Carrito({getItemQty()} Items) </h1>
                        :
                        <h1> No hay productos en el carrito, por favor agregue sus productos</h1>
                }
                <Table striped bordered hover variant="dark" className='table-cart'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    {cart.map(juego =>
                        <tbody>
                            <tr >
                                <td className='text-center'>{<img src={juego.img} className='img-item-cart' alt="" />}</td>
                                <td className='align-middle'>{juego.nombre} {juego.consola}</td>
                                <td className='align-middle'>{juego.qty}</td>
                                <td className='align-middle'>${juego.precio * juego.qty} CLP</td>
                                <td className='align-middle'> <button className='btn-agregar' onClick={() => { deleteItem(juego.id) }}>Eliminar</button></td>
                            </tr>
                        </tbody>
                    )}
                </Table>
                <h2> Resumen de la compra</h2>
                <Table striped bordered hover variant="dark" className='table-cart'>
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-end'>Cantidad de Produtos</th>
                            <th className='text-center'>Total de la Compra</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="col align-self-end">
                            <td>Total</td>
                            <td className='text-end'>{getItemQty()}</td>
                            <td className='text-center'>${getItemPrice()} CLP</td>
                        </tr>
                    </tbody>
                </Table>
                <div className='container-fluid d-flex justify-content-center'>
                    <button className='btn-agregar m-5' onClick={() => { emptyCart() }}>Borrar Carrito</button>
                    <Link to={'/home'}> <Button className='btn-agregar m-5'>Agregar Productos</Button></Link>
                    <Link to={'/checkout'}> <Button className='btn-agregar m-5'>Terminar Compra</Button></Link>
                </div>

            </div>
        </>
    )
}
