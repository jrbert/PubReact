import React, {Component} from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header/Header'
import Menu from '/sty'

 const App = () => {
 
  
    return (
      <div className="App">
        <Router>
       
          <Header />
      
        </Router>
      </div>
  
      
      
  
    
    );
  
}
export default App