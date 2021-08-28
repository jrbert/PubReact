import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header.jsx'
import RenderMusic from './MusicList/RenderMusic.jsx'
import Footer from './Footer/Footer.jsx'
import Main from './Main/Main.jsx'

const App = () => {
<<<<<<< HEAD

  
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
=======
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
>>>>>>> a4ca95dcbc6c786c807a0a7db702c8ced25ccb76
}


export default App;
