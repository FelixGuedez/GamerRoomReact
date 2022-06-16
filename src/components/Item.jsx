import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ juego }) => {
    const { id, nombre, consola, img } = juego
    console.log(juego.nombre)

    return (

        <Card style={{ width: '16rem', margin: 20 }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    <p>Consola:{consola}</p>
                </Card.Text>
                <Link to = {'/item/' + id} ><Button className= 'btn-detail'>Ver mas</Button></Link>
                
            </Card.Body>
        </Card>

    )
}

export default Item