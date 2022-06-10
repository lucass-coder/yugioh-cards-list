
import api from './api';
import './RandomCards.css';
import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";


class ListarDecks extends Component {

    state = {
        nomes: [],
    }


    async componentDidMount() {
        //const response = await api.get('/archetypes/Jinzo');
        const response = await api.get('/archetypes');

        //console.log(response.data.data[3].card_images[0].image_url);

        console.log(response.data.length);
        //console.log(response.data.data[0].name);
        // for(var k in response) {
        //     console.log(k, response.data.data[k].name);
        //  }
        //console.log(response.filter(x => x.name ));


        this.setState({ nomes: response.data })
        //this.setState({imagens: response.data.data[3].card_images[0].image_url})
        //this.setState({nome: response.data.nome})

    }


    render() {

        const { nomes } = this.state;
        //const {nomes} = 'Lucas';

        return (
            <div className='body'>
                <h2> TIpos de Decks </h2>
                <div>
                    {this.state.nomes.map((valor) => {
                        var link = `/listarDecks/deckListado/${valor}`;
                        return (<p key={valor}><a  href={link}>{valor} </a></p>)
                    })
                    }
                </div>
            </div>
        );
    }
}

export default ListarDecks;
