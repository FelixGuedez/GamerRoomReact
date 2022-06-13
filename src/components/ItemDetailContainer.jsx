import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({item}) => {
    const [juego, setJuego] = useState([])

    useEffect(() => {
        

        const getItem = () => {
                fetch('data.json')
                    .then(res => res.json())
                    .then(res => setJuego(res.find((el) => el.id === item)))
                    .catch(error => console.error('Error:', error))
        }
    
        getItem()

    }, [item])

    return (

        <ItemDetail juego={juego} />

    )
}

export default ItemDetailContainer