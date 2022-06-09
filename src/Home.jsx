import React from 'react';
import './Home.css'

const urlImageHome = "https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/01/carta-yu-gi-oh-valiosa.jpg";

const Home = props => (
    <div className='Home'>
        <h1>Seja Bem Vindo!</h1>
        <h2>Hora do Duelo!!!</h2>
        <img src= {urlImageHome} ></img>
    </div>
)

export default Home