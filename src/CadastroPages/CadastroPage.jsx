import React, { useState } from "react";
import "./CadastroPage.css";
import axios from 'axios';

function CadastroPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const funcaoSubmit = (e) => {
      e.preventDefault();
      console.log("submit", {email, senha, nome});
      axios.post("http://localhost:8088/cadastrar", {
      email: email,
      senha: senha,
      nome: nome
      }).then( (response) =>{
        const data = response.data
        if(data.status === true){
          //window.location.href = "/home";
          window.location.href = `/home/${nome}`;
      }
        //return res.json(data)
      })
      ;
  }



  return (
    <div id="login">
      <h1 className="title"> Cadastro de Duelista </h1>
      <form
        //actions="http://localhost:8088/cadastrar"
        className="form"
        onSubmit={funcaoSubmit}
        //method= "POST"
      >
          <div className="field">
          <label htmlFor="nome">Nome</label>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //onChange={handleChangeValues}
          />
        </div>
        <div className="field">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            //onChange={handleChangeValues}
          />
        </div>
        <div className="actions">
          <button type="submit">Cadastrar{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroPage;
