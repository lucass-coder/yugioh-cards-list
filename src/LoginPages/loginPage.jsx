import React, { useState } from "react";
import "./LoginPage.css";
import axios from 'axios';

function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");

  // const funcaoSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("submit", {email, senha});
  // }

  //definindo a variavel
  const [values, setValues] = useState();
  //fazendo uma função para quando digtitar uma informação
  const handleChangeValues = (value) => {
    //setando na variavel
    setValues((prevValue) => ({
      //e adicionando para um array
      ...prevValue,
      //pega todos os inputs que tem o onChange={handleChangeValues}
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
      
      console.log(values.email);
      console.log(values.senha);
    axios.post("http://localhost:8088/cadastrar", {
      email: values.email,
      senha: values.senha
    });
  };

  return (
    <div id="login">
      <h1 className="title"> Login do sistema</h1>
      <form
        //actions="http://localhost:8088/cadastrar"
        className="form"
        //method= "post"
      >
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            //value={email}
            //onChange={(e) => setEmail(e.target.value)}
            onChange={handleChangeValues}
          />
        </div>
        <div className="field">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            //value={senha}
            //onChange={(e) => setSenha(e.target.value)}
            onChange={handleChangeValues}
          />
        </div>
        <div className="actions">
          <button
            type="submit"
            onClick={handleClickButton}
          >
            Entrar{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
