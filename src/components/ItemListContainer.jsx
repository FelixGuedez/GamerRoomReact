import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from "react-router-dom";


export default function ItemListContainer() {
    const [juegos, setJuegos] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {

        setTimeout(() => {
            fetch('../data.json')
                .then(res => res.json())
                .then(res => {
                    if (categoryId) {
                        setJuegos(res.filter((juegos)=> juegos.consola === categoryId))
                    } else {
                        setJuegos(res)
                    }
                })
                .catch(error => console.error('Error:', error))

        }, 2000);
    }, [categoryId])

    return (
        <ItemList juegos={juegos} />

    )
}
