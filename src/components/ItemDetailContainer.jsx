import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState()
    const { id } = useParams();
    console.log(id)


    useEffect(() => {

        const getItem = () => {
            fetch('../data.json')
                .then(res => res.json())
                .then(res => {
                    const juegoEncontrado = (res.find((el) => el.id === Number(id)))
                    console.log(juegoEncontrado)
                    setJuego(juegoEncontrado)
                    
                })
                .catch(error => console.error('Error:', error))
        }

        getItem()

    }, [id])


    return (

        <>
            {juego ? <ItemDetail juego={juego} /> : 'Cargando detalle ...'}


        </>

    )
}

export default ItemDetailContainer