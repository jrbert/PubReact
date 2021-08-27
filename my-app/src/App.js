import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Musicas from './Music/Musica'
import Rodape from './Footer/Footer.jsx'


const App = () => {


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/musicas">
            <Musicas/>
          </Route>
        </Switch>
        <div>
        <Rodape />
        </div>
      </Router>
    </div>
  );
  }

export default App;
