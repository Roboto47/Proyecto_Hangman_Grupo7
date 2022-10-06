
import React, {Fragment} from 'react'
import Desarrolladores from './Desarrolladores';
import Home from './Home';
import desarrolladores from './desarrolladores.json'
import headerDesarrolladores from './headerDesarrolladores';
import footerDesarrolladores from './footerDesarrolladores';
import {Route, Routes } from 'react-router-dom';
import Error from './componentes/Error404';


function App() {

  
  return (
   /* <Fragment>
      
<headerDesarrolladores/>
<footerDesarrolladores/>

   <Routes>
   <Route path='/' element={ <Home/>   }/>
  
  <Route path='/desarrolladores' element={    <>
{//desarrolladores && desarrolladores.map es para comprobar si los datos existen
  desarrolladores.desarrolladores && desarrolladores.desarrolladores.map( des =>   
    <Desarrolladores  key={des.nombre}
      nombre={des.nombre}
      dni={des.dni}
      lu={des.lu}
    ></Desarrolladores>  
      )

    }

</> 
}/>
   </Routes>



    </Fragment>*/
    <div>
      <Error/>
    </div>
  )
}

export default App;
