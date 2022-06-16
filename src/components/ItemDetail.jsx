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
          <span className='categoria'>{consola}</span>
          <span className='precio'>${precio}CLP</span>
          <span className='descripcion'>{descripcion}</span>
          <ItemCount inicial={1} stock={5}/>
        </div>
      </div>








    </>
  )
}

export default ItemDetail