
import React, {Fragment} from "react";
import desarrolladores from './desarrolladores.json'
import './componentes/Desarrollador.css'


function Desarrolladores(){
  return(
<Fragment>
      {
      desarrolladores.map( desarrollador => {
        return(
          <div className='box'>
            <div className="contenedor">
              <img src = {desarrollador.image}/>
            <div className="cuerpo">
            <div className="nombre">
            {desarrollador.nombre}
            </div>
              <div className="eselultimolojuro">
               <div  className="datos">
               {desarrollador.intereses}
               </div>
               <div className="datos">
               {desarrollador.dni}
               </div>
               <div className="datos">
               {desarrollador.lu}
               </div>
              </div>
            </div>
            </div>
          </div>
        )

      }) 
    }
    </Fragment>
  )
}
export default Desarrolladores;
