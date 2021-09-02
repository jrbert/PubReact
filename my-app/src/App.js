import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header.jsx';
import RenderMusic from './components/RenderMusic/RenderMusic.jsx';
import RenderFuncionarios from './components/RenderFuncionario/RenderFuncionario.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';


const App = () => {

  const [loading, setLoadign] = useState(false);

  useEffect(()=>{
    setLoadign(true);
    setTimeout(()=>{
      setLoadign(false)
    },6000)
  }, [])

  return (
    <>
    { loading ? 
      <Loading/>
    :
    
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
              <RenderFuncionarios />
            </Route>
          </Switch>
        <Footer />
      </Router>
    }
    
    </>
  );
}


export default App;
