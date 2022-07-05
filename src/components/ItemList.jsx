import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = ({ juegos }) => {

    return (
        <div className='item-list'>
            {juegos?.map(juego => <Item key={juego.id} juego={juego} />)}
        </div>
    )
}

export default ItemList