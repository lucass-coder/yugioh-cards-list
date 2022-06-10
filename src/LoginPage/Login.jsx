import React, { useState } from "react";
import "./LoginPage.css";
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const funcaoSubmit = (e) => {
      e.preventDefault();
      //console.log("submit", {email, senha});
      axios.post("http://localhost:8088/login", {
      email: email,
      senha: senha
      }).then( (response) =>{
        const data = response.data
        if(data.status === true){
            window.location.href = `/home/${data.nome}`;
            console.log(data.status)
        }
        //return res.json(data)
      });
  }



  return (
    <div id="login">
      <h1 className="title"> Hora de logar Duelista </h1>
      <form
        //actions="http://localhost:8088/cadastrar"
        className="form"
        onSubmit={funcaoSubmit}
        //method= "POST"
      >
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
          <button type="submit">Logar{" "}
          </button>
        </div>
        <br/>
        <a href="/cadastrar" >Não tenho cadastro</a>
      </form>
    </div>
  );
}

export default LoginPage;
