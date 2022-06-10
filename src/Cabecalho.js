import React from "react";
import './App.css';

import { Link } from 'react-router-dom';

const logo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/d92o1t0-eeaf66e1-c320-4d08-a4c8-75f78cec0ad8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyN2ZlNzIxLTg0NmYtNGY3NS1hYzYxLTExMWNhMDBiMjdkZFwvZDkybzF0MC1lZWFmNjZlMS1jMzIwLTRkMDgtYTRjOC03NWY3OGNlYzBhZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qOkBmEWbOAdvZAvDVrX4EiIbrkpG2JbFN3SyGAKKU50"

function Cabecalho(props) {
    return (
        <header className='header'>
            
            <img src={logo} className="logo"/>
            <ul className='menu'>
                {/* <li>
                    <Link to="/home">Início</Link>
                </li> */}
                <li>
                    <Link to="/randomCard">Carta Aleatória</Link>
                </li>
                <li><a href="/listarDecks">TIpos de Decks</a></li>
                <li><a href="/vitrine">Vitrine</a></li>
                <li><a href="/cadastrarCarta"> Cadastrar Cartas </a></li>
                <li><a href="/listarCards"> Deletar / Alterar Cartas </a></li>
            </ul>
        </header>
    )
}

export default Cabecalho;