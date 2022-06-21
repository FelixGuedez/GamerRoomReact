import {React, useState } from 'react'
import ItemCount from './ItemCount'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './ItemDetail.css'
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

const ItemDetail = ({ juego }) => {

  const { nombre, consola, descripcion, precio, img, stock } = juego
  const [agreCarrito, SetAgreCarrito] = useState(true)


  const {isInCart, addItem, cart} = useContext(CartContext)

  const onAdd = (qty) => {
    // alert('Agregastes ' + qty + ' productos al carrito')
    isInCart(juego.id)
    addItem(juego, qty)
    console.log(cart)
        



    SetAgreCarrito(false);


  }

  return (
    <>
      <h1>Detalles del Producto</h1>
      <div className='container-item d-flex'>

        <div className='container-img'>
          <img src={img} alt="" />
        </div>

        <div className='container-info'>
          <h2>{nombre}</h2>
          <p className='categoria'>{consola}</p>
          <p className='precio'>${precio}CLP</p>
          <p className='stock'>Stock: {stock}</p>
          <p className='descripcion'>{descripcion}</p>
          {agreCarrito ? <ItemCount inicial={1} stock={stock} onAdd={onAdd}/>: <Link to = {'/cart/'} ><Button className='btn-agregar'>Finalizar Compra</Button></Link>}
        </div>
      </div>








    </>
  )
}

export default ItemDetail