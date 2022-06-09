import React from "react";
import './App.css'

function Cabecalho(props) {
    return (
    <header className='header'>
        <h1>{props.titulo}</h1>
        <ul className='menu'>
            <li><a href=" ">Listar Decks</a></li>
            <li>Listar Cards</li>
            <li>Listar Todas as cartas</li>
            <li>Carta Aleatória</li>
        </ul>
    </header>
    )
}

export default Cabecalho;