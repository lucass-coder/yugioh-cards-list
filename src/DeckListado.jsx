
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