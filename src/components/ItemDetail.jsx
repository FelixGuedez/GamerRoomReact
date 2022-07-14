import { React, useState } from 'react'
import ItemCount from './ItemCount'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

const ItemDetail = ({ juego }) => {

  const { nombre, consola, descripcion, precio, img, stock } = juego
  const [agreCarrito, SetAgreCarrito] = useState(true)



  const { isInCart, addItem} = useContext(CartContext)

  const onAdd = (qty) => {
    isInCart(juego.id)
    addItem(juego, qty)

    SetAgreCarrito(false);

  }

  return (
    <>
      <h1>Detalles del Producto</h1>
      <div className='container-item d-flex container-fluid'>
        <div className='container-img'>
          <img src={img} alt="" />
        </div>
        <div className='container-info'>
          <h2>{nombre}</h2>
          <p className='categoria'>{consola}</p>
          <p className='precio'>${precio}CLP</p>
          <p className='stock'>Stock: {stock}</p>
          <p className='descripcion'>{descripcion}</p>
          {agreCarrito ? <ItemCount inicial={1} stock={stock} onAdd={onAdd} />
            :
            <div>
              <Link to={'/home/'} ><Button className='btn-item-detail'>Continuar Compra</Button></Link>
              <Link to={'/cart/'} ><Button className='btn-item-detail'>Finalizar Compra</Button></Link>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default ItemDetail