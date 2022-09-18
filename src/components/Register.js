import React, {useState} from "react";
import Nav from "./Nav";
import db from "../services/firebase";

export const Register = () => {
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = () => {
        const payload = {
            name,
            lastName,
            birthDate,
            email,
            password
        }

        db.collection('users').add(payload)
            .then(r => console.info('Usuário adicionado com sucesso. ID: ', r.id))
            .catch(err => console.warn(err))
    }

    return <>
        <Nav />
        <div className='container mt-5'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-6  d-flex flex-column'>
                    <label form={'name'}>Nome</label>
                    <input className='form-control' type={'text'} onChange={e => setName(e.target.value)} />
                </div>
                <div className='col-6 d-flex flex-column'>
                    <label form={'lastName'}>Sobrenome</label>
                    <input className='form-control' type={'text'} onChange={e => setLastName(e.target.value)} />
                </div>
                <div className='col-6  d-flex flex-column'>
                    <label form={'birthDate'}>Data de nascimento</label>
                    <input className='form-control' type={'date'} onChange={e => setBirthDate(e.target.value)} />
                </div>
                <div className='col-6  d-flex flex-column'>
                    <label form='email'>E-mail</label>
                    <input className='form-control' type={'email'} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='col-12  d-flex flex-column'>
                    <label form={'password'}>Senha</label>
                    <input className='form-control' type={'password'} onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <button className={'btn btn-primary rounded-1 mt-3'} type={'button'} onClick={handleRegister}>Registrar</button>
                </div>
            </div>
        </div>
    </>
}