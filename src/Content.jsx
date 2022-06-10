import React from 'react';
import { Routes, Route } from "react-router-dom";
import DeckListado from './DeckListado';
import Home from './Home';
import ListarDecks from './ListarDecks';
import CadastroPage from './CadastroPages/CadastroPage';
import RandomCard from './RandomCard';
import LoginPage from './LoginPage/Login';
import Vitrine from './Vitrine';
import CadastrarCarta from './CadastroPages/CadastrarCarta';
import ListarCards from './ListarCards';


const Content = props => (
    <main className='Content'>
        <Routes>
            <Route path="/" caseSensitive={false} element={<LoginPage />} /> 
            <Route path="/home/:id" caseSensitive={false} element={<Home />} />
            <Route path="/cadastrar" caseSensitive={false} element={<CadastroPage />} />
            <Route path="/cadastrarCarta" caseSensitive={false} element={<CadastrarCarta />} />
            <Route path="/randomCard" caseSensitive={false} element={<RandomCard />} />
            <Route path="/vitrine" caseSensitive={false} element={<Vitrine />} />
            <Route path="/listarDecks" caseSensitive={false} element={<ListarDecks />} />
            <Route path="/listarCards" caseSensitive={false} element={<ListarCards />} />
            <Route path="/listarDecks/deckListado/:id" caseSensitive={false} element={<DeckListado />} />
        </Routes>
    </main>
)

export default Content