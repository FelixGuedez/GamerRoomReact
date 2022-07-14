import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loader from './Loader';

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState()
    const { id } = useParams();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const db = getFirestore()
        const productRef = doc(db, 'items', id)

        getDoc(productRef).then((snapshot) => {
            setJuego({...snapshot.data(), id: snapshot.id})
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() =>{
            setLoading(false)
        })



    }, [id])


    return (

        <>
            {loading ? <Loader/> : <ItemDetail juego={juego} />}


        </>

    )
}

export default ItemDetailContainer