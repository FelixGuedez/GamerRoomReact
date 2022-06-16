import React from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ juego }) => {

  const { nombre, consola, descripcion, precio, img } = juego
  console.log(juego)

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
          <p className='descripcion'>{descripcion}</p>
          <ItemCount inicial={1} stock={5} />
        </div>
      </div>








    </>
  )
}

export default ItemDetail