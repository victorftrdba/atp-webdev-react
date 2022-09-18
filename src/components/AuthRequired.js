import React from "react";
import {Link} from "react-router-dom";
import Nav from "./Nav";

const errorStyle = {
    textAlign: 'center',
    lineHeight: '1.8rem'
}

export default function AuthRequired() {
    return <>
        <Nav />
        <div style={errorStyle}>
            <div>
                <strong>
                    Favor realizar seu login para acessar esta rota.
                </strong>
            </div>
            <Link to={'/login'}>Ir para Login</Link>
        </div>
    </>
}