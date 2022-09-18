import React, {useState} from "react";
import Nav from "./Nav";
import db from "../services/firebase";
import {useNavigate} from "react-router";

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
        const query = await db.collection('users')
            .where('email', '==', email)
            .get()

        query.docs.map(value => {
            if (value.data().password === password) {
                localStorage.setItem('authenticated', 'true')

                navigate('/main', {
                    state: {
                        name: value.data().name,
                        lastName: value.data().lastName,
                        birthDate: value.data().birthDate
                    }
                })
            } else {
                setMessage('Dados incorretos.')
            }
        })

        if (query.docs.length <= 0) {
            setMessage('Dados não encontrados no sistema, cadastre-se.')
        }
    }

    return <>
        <Nav />
        <div className='container mt-5'>
            <div className='row justify-content-center align-items-center'>
                {message !== '' && <div className={'alert alert-danger text-center fw-bold'}>
                    {message}
                </div>}
                <div className='col-6  d-flex flex-column'>
                    <label form='email'>E-mail</label>
                    <input className='form-control' type={'email'} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='col-6 d-flex flex-column'>
                    <label form={'password'}>Senha</label>
                    <input className='form-control' type={'password'} onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <button className={'btn btn-primary rounded-1 mt-3'} type={'button'} onClick={handleLogin}>Logar</button>
                </div>
            </div>
        </div>
    </>
}