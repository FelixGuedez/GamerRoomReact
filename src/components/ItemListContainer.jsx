import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'

export default function ItemListContainer() {
    const [juegos, setJuegos] = useState([])

    useEffect(() => {

        setTimeout(() => {
            fetch('data.json')
                .then(res => res.json())
                .then(res => setJuegos(res))
                .catch(error => console.error('Error:', error))

        }, 2000);


    }, [])
    console.log(juegos)

    return (
        <ItemList juegos={juegos} />

    )
}
