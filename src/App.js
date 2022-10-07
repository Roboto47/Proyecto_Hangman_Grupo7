
import React, {Fragment} from 'react'
import Home from './Home';
import Desarrolladores from './Desarrolladores';
import desarrolladores from './desarrolladores.json'
import {Route, Routes } from 'react-router-dom';
import Error from './componentes/Error404';


function App() {

  
  return (
   /* <Fragment>

   <Routes>
   <Route path='/' element={ <Home/>   }/>
  
  <Route path='/desarrolladores' element={    <> 

<headerDesarrolladores/>

{//desarrolladores && desarrolladores.map es para comprobar si los datos existen
  desarrolladores.desarrolladores && desarrolladores.desarrolladores.map( des =>   
    <Desarrolladores style="display:inline-block;" key={des.nombre}
      nombre={des.nombre}
    dni={des.dni}
    lu={des.lu}
    ></Desarrolladores>  
      )
    }

<footerDesarrolladores/>

</> 
}/>

  


    </Fragment>*/
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/desarrolladores' element = {<Desarrolladores/>}/>
      <Route path = '*' element = {<Error/>}/>
    </Routes>
  )
}

export default App;
