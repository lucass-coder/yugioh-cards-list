import './App.css';
import React, {  } from 'react';
// import RandomCard from './RandomCard';
// import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom'
import Cabecalho from './Cabecalho';

import api from './api';
import Content from './Content';

function App() {


  // const [user, setUser] = useState(null);

  // ( async () => {
  //   const response = await api.get('/');

  //   console.log(response.data);

  // }).apply();

  

  return (
    <div className='App'>
      <Router>
        <Cabecalho />
        <Content />
      </Router>
    </div>

  );
}

// const App = props => (

//   <div className='App'>
//     <Router>
//       <Cabecalho />
//       <RandomCard />
//     </Router>
//   </div>
// )

export default App