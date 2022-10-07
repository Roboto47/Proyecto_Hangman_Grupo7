

import Desarrolladores from './Desarrolladores';
import Home from './Home';
import desarrolladores from './desarrolladores.json'
import headerDesarrolladores from './headerDesarrolladores';
import footerDesarrolladores from './footerDesarrolladores';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  
  return (
  
<BrowserRouter>


   <Routes>
   <Route path='/' element={ <Home/>   }/>
  
  <Route path='/desarrolladores' element={    <> 
<headerDesarrolladores/>

{//desarrolladores && desarrolladores.map es para comprobar si los datos existen
  desarrolladores.desarrolladores && desarrolladores.desarrolladores.map( des =>   
    <Desarrolladores style="display:inline-block;" key={des.nombre}
    img={des.img} 
    nombre={des.nombre}
    rol={des.rol}
    dni={des.dni}
    lu={des.lu}
    gitLink={des.gitLink}
    edad={des.edad}
    intereses={des.intereses}
    >
    
    </Desarrolladores>  
      )
    }

<footerDesarrolladores/>

</> 
}/>

  


   </Routes>







</BrowserRouter>




   

  );
}

export default App;
