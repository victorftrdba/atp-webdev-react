import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "./components/Main";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import App from "./App";
import AuthRequired from "./components/AuthRequired";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/main',
        element: <Main />,
        loader: () => {
            if (localStorage.getItem('authenticated') !== 'true') {
                throw new Error('Necessário logar para acessar a rota.')
            }
        },
        errorElement: <AuthRequired />
    }
]);

export default router;
