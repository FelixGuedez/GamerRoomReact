import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import Loader from './Loader';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

export default function ItemListContainer() {
    const [juegos, setJuegos] = useState([])
    const [loading, setLoading] = useState()
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const productsColletion = collection(db, 'items')

        if (categoryId) {
            const q = query(productsColletion, where('consola', '==', categoryId))
            getDocs(q).then(snapshot => {
                setJuegos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }

        else {

            getDocs(productsColletion).then(snapshot => {
                setJuegos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                    console.log(juegos)
                })
        }

    }, [categoryId])

    return (
        loading ? <Loader /> : <ItemList juegos={juegos} />

    )
}
