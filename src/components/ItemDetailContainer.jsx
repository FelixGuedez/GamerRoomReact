import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [juego, setJuego] = useState([])

    console.log(id)
    useEffect(() => {

        const getItem = () => {
            fetch('../data.json')
                .then(res => res.json())
                .then(res => setJuego(res.find((el) => el.id == id)))
                .catch(error => console.error('Error:', error))

        }

        getItem()

    }, [id])

    return (

        <ItemDetail juego={juego} />

    )
}

export default ItemDetailContainer