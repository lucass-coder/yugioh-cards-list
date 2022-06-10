import React, { useState } from "react";
import "./CadastroPage.css";
import axios from 'axios';

function CadastrarCarta() {
  const [urlImage, setUrlImage] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const funcaoSubmit = (e) => {
      e.preventDefault();
      console.log("submit", {url_image: urlImage, nome: nome});
      axios.post("http://localhost:8088/cadastrarCard", {
      url_image: urlImage,
      nome: nome
      }).then( (response) =>{
        const data = response.data
        if(data.status === true){
            setMensagem('Carta Cadastrada com Sucesso!')
      }
      })
      ;
  }



  return (
    <div id="login">
        Dica: <a href="https://br.pinterest.com/alexandre9437/cartas-yugioh/">Uma base de dados para procurar boas imagens</a>
      <h1 className="title"> Cadastro de Cartas </h1>
      <form
        className="form"
        onSubmit={funcaoSubmit}
      >
          <div className="field">
          <label htmlFor="nome">Nome do Card</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            //onChange={handleChangeValues}
          />
        </div>
        <div className="field">
          <label htmlFor="text">Url da imagem do Card</label>
          <input
            type="text"
            name="url_image"
            id="url_image"
            value={urlImage}
            onChange={(e) => setUrlImage(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit">Cadastrar{" "}
          </button>
        </div>
      </form>
      <h2> {mensagem} </h2>
    </div>
  );
}

export default CadastrarCarta;
