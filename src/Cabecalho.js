import React from "react";
import './App.css';

import { Link } from 'react-router-dom';

function Cabecalho(props) {
    return (
        <header className='header'>
            <h1>{props.titulo}</h1>
            <ul className='menu'>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/randomCard">Carta Aleatória</Link>
                </li>
                <li><a href="/listarDecks">Listar Decks</a></li>
                <li>Criar Deck</li>
                <li>Meu Deck</li>
            </ul>
        </header>
    )
}

export default Cabecalho;