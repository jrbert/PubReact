import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header.jsx'
import RenderMusic from './MusicList/RenderMusic.jsx'
const App = () => {


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/musicas">
            <RenderMusic/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
  }

export default App;
