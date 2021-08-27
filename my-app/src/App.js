import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
<<<<<<< HEAD
import Header from './Header/Header'


const App = () => {
 
    return (
      <div className="App">
        <Router>
          
            <Header />
          
        </Router>
      </div>
    
    );
  
}
export default App;
=======
import Header from './Header/Header.jsx'
import Musicas from './Music/Musica'
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
      </Router>
    </div>
  );
  }

export default App;
>>>>>>> 2baa76c6ca7dea987b87d0136398a66c95437b5f
