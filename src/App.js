

import Desarrolladores from './componentes/Desarrolladores';
import Home from './componentes/Home';
import JuegoAhorcadito from './componentes/JuegoAhorcado';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  
  return (
    <div>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego" element={<JuegoAhorcadito />} />
        <Route path="/desarrolladores" element={<Desarrolladores />} />     
      </Routes>     
    </div>
  );
}

export default App;
