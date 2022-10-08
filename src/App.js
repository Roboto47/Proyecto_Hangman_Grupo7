import './componentes/css/style.css';
import Home from './componentes/Home';
import Juego  from './componentes/Juego';
import Desarrolladores from './componentes/Desarrollador';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego" element={<Juego />} />
        <Route path="/desarrolladores" element={<Desarrolladores />} />
      </Routes>
     
    </div>
  );
}

export default App;
