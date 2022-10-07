

import Desarrolladores from './componentes/Desarrolladores';
import Home from './componentes/Home';



import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  
  return (
  
<BrowserRouter>


   <Routes>
   <Route path='/' element={ <Home/>   }/>
  
  <Route path='/desarrolladores' element={    <Desarrolladores/>     }/>

  


   </Routes>







</BrowserRouter>




   

  );
}

export default App;
