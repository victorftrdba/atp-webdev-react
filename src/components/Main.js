import React from "react";
import Nav from "./Nav";
import {useLocation} from "react-router";

export const Main = () => {
    const {state} = useLocation()

    return <>
        <Nav/>
        <div className={'container'}>
            <div className={'row text-center fw-bold flex-column'}>
                <div className={'col'}>
                    Olá, {state.name} {state.lastName}.
                </div>
                <div className={'col'}>
                    Sua data de nascimento é {new Date(state.birthDate).toLocaleDateString('pt-BR')}
                </div>
            </div>
        </div>
    </>
};
