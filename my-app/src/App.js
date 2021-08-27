import React, {Component} from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header/Header'
import Menu from '/sty'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
        <Route path="/" exact>
          <Header />
        </Route>
        <Switch>
        <Button />
        </Switch>
        </Router>
      </div>
      
      
      
  
    
    );
  }
}
export default App;
