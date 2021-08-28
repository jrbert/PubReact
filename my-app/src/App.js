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
          <Switch>
            <Header />
              <Route path="/">
                <Main />
              </Route>  
              <Route path="/musicas">
                <RenderMusic />
              </Route>
            </Switch>
          </Router>
        <div>
          <Footer />
        </div>    
      </div>
  )
}


export default App;
