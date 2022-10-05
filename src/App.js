

import Desarrolladores from './Desarrolladores';
import Home from './Home';



import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  
  return (
  
<BrowserRouter>


   <Routes>
   <Route path='/' element={ <Home/>   }/>
  
  <Route path='/desarrolladores' element={    <> 

{//desarrolladores && desarrolladores.map es para comprobar si los datos existen
  desarrolladores.desarrolladores && desarrolladores.desarrolladores.map( des =>   
    <Desarrolladores key={des.nombre}
      nombre={des.nombre}
    dni={des.dni}
    lu={des.lu}
    ></Desarrolladores>  
      )
    }
</> 
}/>

  


   </Routes>







</BrowserRouter>




   

  );
}

export default App;
