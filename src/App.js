

import Desarrolladores from './Desarrolladores';
import Home from './Home';



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
