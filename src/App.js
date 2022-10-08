
import React, {Fragment} from 'react'
import Home from './Home';
import Desarrollador from './Desarrollador';
import {Route, Routes } from 'react-router-dom';
import Error from './componentes/Error404';
import Footer from "./componentes/Footer";
import Header from './componentes/Header';
import Hangman from './Hangman';


function App() {

  
  return (
    <Fragment>
    <Header/>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/juego' element = {<Hangman/>}/>
      <Route path = '/desarrolladores' element = {<Desarrollador/>}/>
      <Route path = '*' element = {<Error/>}/>
    </Routes>
    <Footer/>
    </Fragment>
    
    
  )
}

export default App;
