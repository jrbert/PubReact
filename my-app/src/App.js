import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header.jsx'
import RenderMusic from './MusicList/RenderMusic.jsx'
import Footer from './Footer/Footer.jsx'
import Main from './Main/Main.jsx'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
              <Main />
          </Route>  
        </Switch>
        <Switch>
          <Route path="/musicas">
            <RenderMusic/>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
