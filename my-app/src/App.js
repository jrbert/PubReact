import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import RenderMusic from './components/RenderMusic/RenderMusic.jsx';
import Team from './components/Funcionarios/Funcionarios.jsx';
import RenderFuncionarios from './components/RenderFuncionario/RenderFuncionario.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>  
            <Route path="/musicas">
              <RenderMusic />
            </Route>
            <Route path="/equipe">
              <Team />
              <RenderFuncionarios />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
