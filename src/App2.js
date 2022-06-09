import RandomCard from './RandomCard';
import api from './api';
import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom"; 







// class App extends Component {



//   async componentDidMount() { 
//     //const response = await api.get('/archetypes/Jinzo');
//     const response = await api.get('/randomcard');
    
//     //console.log(response.data.data[3].card_images[0].image_url);
//     console.log(response.data.nome);
//     console.log(response.data.id);
//     console.log(response.data.img);

//     //this.setState({imagens: response.data.data[3].card_images[0].image_url})
//     // this.setState({imagens: response.data.img})
//     // this.setState({nome: response.data.nome})
//     // this.setState({id: response.data.id})

//   }


//   render () {

//     const {imagens} = this.state;
//     const {nome} = this.state;
//     const {id} = this.state;

//     //console.log(imagens)
//     return (
//       // <Cabecalho titulo="YU-Gi-OH - Cards"></Cabecalho>
//       <RandomCard imagens = {imagens} nome = {nome} id = {id}></RandomCard>
//     );
//   }
// }

// export default App;
