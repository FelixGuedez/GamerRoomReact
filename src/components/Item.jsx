import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = ({ juego }) => {
    const { nombre, consola, precio, img } = juego
    console.log(juego.nombre)

    return (

        <Card style={{ width: '16rem', margin: 20 }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    <p>Consola:{consola}</p>
                </Card.Text>
                <Button variant="primary">Ver mas</Button>
            </Card.Body>
        </Card>

    )
}

export default Item