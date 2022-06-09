import React from 'react';
import { Routes, Route } from "react-router-dom";
import DeckListado from './DeckListado';
import Home from './Home';
import ListarDecks from './ListarDecks';
import LoginPage from './LoginPages/loginPage';
import RandomCard from './RandomCard';


const Content = props => (
    <main className='Content'>
        <Routes>
            <Route path="/" caseSensitive={false} element={<LoginPage />} />
            <Route path="/randomCard" caseSensitive={false} element={<RandomCard />} />
            <Route path="/listarDecks" caseSensitive={false} element={<ListarDecks />} />
            <Route path="/listarDecks/deckListado/:id" caseSensitive={false} element={<DeckListado />} />
        </Routes>
    </main>
)

export default Content