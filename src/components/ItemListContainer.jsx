import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import Loader from './Loader';


export default function ItemListContainer() {
    const [juegos, setJuegos] = useState([])
    const [loading, setLoading] = useState()
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            fetch('../data.json')
                .then(res => res.json())
                .then(res => {
                    if (categoryId) {
                        setJuegos(res.filter((juegos) => juegos.consola === categoryId))
                    } else {
                        setJuegos(res)
                    }
                })
                .catch(error => console.error('Error:', error))
            setLoading(false)

        }, 2000);
    }, [categoryId])

    return (
        loading ? <Loader/> : <ItemList juegos={juegos} />

    )
}
