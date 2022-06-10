import React from "react";
import "./Home.css";
import { useParams } from "react-router-dom"; 

const urlImageHome =
  "https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/01/carta-yu-gi-oh-valiosa.jpg";

function Home() {
    const {id} = useParams();

    if(id == null) {
        id = "Tomate"
    }

  return (
    <div className="Home">
      <h1>Seja Bem Vindo(a) {id}</h1>
      <h2>Hora do Duelo!!!</h2>
      <img src={urlImageHome}></img>
    </div>
  );
}

export default Home;
