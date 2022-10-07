import Hangman from './Hangman.js';
import Home from './componentes/Home.js';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  
  return (
  
<BrowserRouter>


   <Routes>
   <Route path='/' element={ <Home/>   }/>
  <Route path='/hangman' element={    <Hangman/>     }/>


  


   </Routes>
</BrowserRouter>




   

  );
}

export default App;
