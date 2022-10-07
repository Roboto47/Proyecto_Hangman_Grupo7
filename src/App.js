import Home from './Home';
import './componentes/css/Style.css';
import Homes from './componentes/Home';
import { Juego } from './componentes/Juego';
import Desarrolladores from './componentes/Desarrollador';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/juego" element={<Juego />} />
        <Route path="/desarrolladores" element={<Desarrolladores />} />
      </Routes>
     
    </div>
  );
}

export default App;

