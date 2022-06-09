import React from "react";
import './App.css'

function RandomCard(props) {
    return (
        <div className='body'>
        <h2>{props.nome} - {props.id}</h2>
        <img src= {props.imagens} ></img>
        <p>Descrição da carta Jinzo</p>
        </div>
    )
}

export default RandomCard; 