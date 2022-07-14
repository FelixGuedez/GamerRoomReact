import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { React, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function Categories() {
const [category, setCategory] = useState([])

useEffect(() => {
  const db = getFirestore()
  const categorieCollection = collection(db, 'categories')

  getDocs(categorieCollection).then((snapshot) => {
    setCategory(snapshot.docs.map((doc)=> doc.data().name))
  })

}, [])


  return (
  <>
  {category.map((el) => (
    <Link className='link-NavBar' key={el} to={'/category/' + el}>{el}</Link>
  )
  )}
  </>
  )

}
