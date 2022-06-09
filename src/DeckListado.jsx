
import api from './api';
import './RandomCards.css';
import React, { Component, useEffect, useState } from 'react';
import { Routes, Route, useParams, } from "react-router-dom"; 


  function DeckListado() {

  const {id} = useParams();
  const [cardImage, setCardImage] = useState([]);
  var dataImage;


  useEffect(() => {
    api
      .get(`/archetypes/${id}`)
      .then((response) => setCardImage(response.data.image))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }, []);

  return (
      
    <div className='body'>
        <h2> Cartas do Arquétipo {id} </h2>
        {console.log(cardImage.length)}
        {/* <p>{cardImage[0]}</p> */}
        {
              <p>
                  {cardImage.map(item =>
                      //<li key="{item}">{item}</li>
                      <img key={item} src={item} ></img>
                  )}
              </p>
        }
    
    </div>
  );
}

export default DeckListado;


// cardImage.map((valor, x) => {   
//     //var link = {valor}
//     var link = `${valor}`;
//     setCardImage(valor)
//     return (<p><a href={link}>{valor} </a></p>)
//     //return (<p><a href={link}>{valor} </a></p>);
//     //return (<img src={valor} ></img>);
// })

// const DeckListado = props => {
//     const {id} = useParams();

//     return  <div className='body'>
//                 <h2> Deck Listado: {id} </h2>
//                 <div>
//                 {/* { this.state.nomes.map((valor, x) => {   
//                          //var link = `http://localhost:8088/archetypes/${valor}`;
//                          var link = `/listarDecks/deckListado${valor}`;
//                         return (<p><a href={link}>{valor} </a></p>)
//                      })
//                  } */}
//                  </div>
//              </div>
// }

// export default DeckListado;




// class DeckListado extends Component () {

//   state = {
//     nomes: [],
//     imagens: [],
//   }


//   async componentDidMount() { 
//     const response = await api.get(`/archetypes/${id}`);
    
//     console.log(response.data.length); 

//     this.setState({nomes: response.data})

//   }


//   render () {

//     const {nomes} = this.state;
//     //const {nomes} = 'Lucas';

//     return (
//         <div className='body'>
//             <h2> Deck Listado: {id} </h2>
//             <div>
//             {/* { this.state.nomes.map((valor, x) => {   
//                     //var link = `http://localhost:8088/archetypes/${valor}`;
//                     var link = `/listarDecks/deckListado${valor}`;
//                     return (<p><a href={link}>{valor} </a></p>)
//                 })
//             } */}
//             </div>
//         </div>
//     );
//   }
// }

// export default DeckListado;
