import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './Checkout.css';
import { CartContext } from './context/CartContext';

import 'react-toastify/dist/ReactToastify.css';

export default function Checkout() {
    const [finalizado, setFinalizado] = useState(false)
    const [orderId, SetOrderID] = useState('')
    const { getItemPrice, cart, emptyCart } = useContext(CartContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const db = getFirestore();
    const ordercollection = collection(db, 'orders')


    const onSubmit = (data, e) => {
        setFinalizado(true)
        const order = {
            buyer: data,
            items: cart,
            total: getItemPrice(),
        }
        toast.success('Su compra se ha realizado con exito.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });

        addDoc(ordercollection, order).then(({ id }) => {
            SetOrderID(id)
        })
        e.target.reset()
        emptyCart()


    }

    return (
        <>
            {!finalizado ? (
                <>
                    <div className='container estilo-form'>
                        <h2>Complete sus datos para terminar la compra</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Nombre</label>
                            <input className='form-control my-2'
                                {...register("nombre", {
                                    required: true,
                                    pattern: /^[A-Za-z]+$/i
                                })}
                            />
                            {errors?.nombre?.type === "required" && <p className='mensaje-alerta'>Campo Requerido</p>}
                            {errors?.nombre?.type === "pattern" && (
                                <p className='mensaje-alerta'>No se permiten carateres especiales</p>)}
                            <label>Telefono</label>
                            <input className='form-control my-2'
                                {...register("telefono", {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[0-9]{9}/
                                })}
                            />
                            {errors?.telefono?.type === "required" && <p className='mensaje-alerta'>Campo Requerido</p>}
                            {errors?.telefono?.type === "pattern" && (
                                <p className='mensaje-alerta'>Por favor introduzca un numero de telefono valido</p>)}
                            <label>Correo Electronico</label>
                            <input
                                className='form-control my-2'
                                {...register("correo", {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                                })}
                            />
                            {errors?.correo?.type === "pattern" && (
                                <p className='mensaje-alerta'>Por favor introduzca un correo electronico valido</p>)}
                                <button className="btn btn-agregar my-2" type='submit'>Terminar compra</button>
                        </form>
                    </div>
                    <ToastContainer />
                </>
            )
                : (
                    <div className='compra-finalizada container-fluid d-flex flex-column align-items-center'>
                        <h1>Su compra se ha realizado con Exito</h1>
                        <h2>Su numero de Id es:</h2>
                        <p className='order'>{orderId}</p>
                        <p className='mensaje'>Muy pronto nos contactaremos con ud.</p>
                        <Link to={'/home'}> <Button className='btn-agregar m-5'>Ir al Home</Button></Link>
                    </div>

            )
            }

        </>
    )
}