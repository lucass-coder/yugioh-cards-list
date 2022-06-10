
import api from './api';
import './RandomCards.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


  function ListarCards() {

  const [cardImage, setCardImage] = useState([]);
  var dadosCard

  
  useEffect(() => {
    api
      .get(`/listarcards`)
      .then((response) => {
        setCardImage(response.data)
        //console.log(cardImage)
        
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  return (
      
    <div className='bodyList'>
        <h2> Cartas cadastradas </h2>
        {console.log(cardImage.length)}
        {
              <div >
                   {cardImage.map(item =>
                      //<li key="{item}">{item}</li>
                      <div key={item} className="divMapCard">
                      <h3 >{item.nome} - ID: {item.id}</h3>
                      <img  src={item.url_image} onClick={() => console.log('Imagem clicada')} className="cartas"></img>
                      {/* <button onClick={() => console.log(`${item.id}`)}>Deletar</button> */}
                      <br/>
                      <div className='buttons'>
                      <button onClick={() => 
                      {
                          axios.post("http://localhost:8088/deletaCard", {
                            id: `${item.id}`
                            })
                            .then((response) => {
                              setCardImage(response.data)
                              window.location.href = `/listarcards`;
                            })
                            .catch((err) => {
                              console.error("ops! ocorreu um erro" + err);
                            });
                          }
                      
                    }
                      >Deletar</button>
                      &nbsp; &nbsp;
                      <button onClick={() => console.log('Alterar clicado')}>Alerar</button>
                      </div>
                      </div>
                  )}
              </div>
        }
    
    </div>
  );
}

export default ListarCards;