
import api from './api';
import './RandomCards.css';
import React, { useEffect, useState } from 'react';

import './Vitrine.css';


  function Vitrine() {

  //const {id} = useParams();
  const [cardImage, setCardImage] = useState([]);
  var dataImage;


  useEffect(() => {
    api
      .get(`/vitrine`)
      .then((response) => setCardImage(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }, []);

  function chamaConsole(i) {
      console.log(i)
  }

  return (
      
    <div className='body'>
        <h2> Cartas mais famosas </h2>
        {console.log(cardImage.length)}
        {/* <p>{cardImage[0]}</p> */}
        {
              <p>
                  {cardImage.map(item =>
                      //<li key="{item}">{item}</li>
                      <img key={item} src={item} className="img-container" ></img>
                  )}
              </p>
        }
    
    </div>
  );
}

export default Vitrine;