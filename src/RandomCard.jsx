
import api from './api';
import './RandomCards.css';
import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom"; 


class RandomCard extends Component {

  state = {
    nome: [],
    imagens: [],
    id: [],
  }


  async componentDidMount() { 
    //const response = await api.get('/archetypes/Jinzo');
    const response = await api.get('/randomcard');
    
    //console.log(response.data.data[3].card_images[0].image_url);
    console.log(response.data.nome);
    console.log(response.data.id);
    console.log(response.data.img);

    //this.setState({imagens: response.data.data[3].card_images[0].image_url})
    this.setState({imagens: response.data.img})
    this.setState({nome: response.data.nome})
    this.setState({id: response.data.id})

  }


  render () {

    const {imagens} = this.state;
    const {nome} = this.state;
    const {id} = this.state;

    //console.log(imagens)
    return (
        <div className='body'>
            <h2>NOME: {nome} - ID: {id}</h2>
            <img src={imagens} ></img>
            <p></p>
            <button onClick={()=>window.location.reload()}>Sortear outra</button>
        </div>
    );
  }
}

export default RandomCard;






// import React, { useState, Component } from "react";
// import './RandomCards.css';
// import api from './api';
// import apiRandom from "./apiRandom";
// import { setSelectionRange } from "@testing-library/user-event/dist/utils";


// function RandomCard() {

//     const [dataCard, setDataCard] = useState('tomate');
//     var nomeCard = 'Nome Tomate';

//     (async () => {
//         const response = await api.get('/randomCard');
    
//         console.log(response.data.nome);
//         console.log(response.data.id);
//         console.log(response.data.img);
    
//         nomeCard = response.data.nome;
//         //setDataCard(response.data.nome);
    
//         //setDataCard(response.data.nome)
    
//         // this.setState({imagens: response.data.data[3].card_images[0].image_url})
//         // this.setState({ imagens: response.data.img })
//         // this.setState({ nome: response.data.nome })
//         // this.setState({ id: response.data.id })
    
//     }).apply();


//     return (
//         <div className='body'>
//             <h2> Tomate - {nomeCard}</h2>
//             <img src="" ></img>
//             <p>Descrição da carta Jinzo</p>
//             <button  >Sortear</button>
//         </div>
//     )
// }



// export default RandomCard; 