import React from "react";
import './estilos/Home.css';
import logo from '../asset/imagenes/logo.png';
import soga from '../asset/imagenes/soga.png';
import jugar from '../asset/imagenes/jugar.png';
import mate from '../asset/imagenes/mate.png';
import Boton from './BotonHome.js';
import loguito from '../asset/imagenes/loguito.png';


export default function Home (){




  return ( <div>

<section className="icono">
<img  src={mate} alt="" width="70" />
<img  src={loguito} alt="" width="300" />
</section>
      <div >
          <div>
          <section className="logohome">
  <img  src={logo} alt="" width="500" height={190}/>
  <img  src={sogaLogo} alt="" width="45" /> 
  </section>
          <section className="botones">
              <Boton/>
          </section>
          </div>
          
      </div>

      <section className="derechos">

      <h4> © 2022 Mate Cebado Games Inc. | All rights reserved. </h4>
      <img  src={mate} alt="error" width={43}/>
      </section>

      <div className="redes2">
      <img  src={twitter} alt="" width={60} height={50}/>
      <img  src={face} alt="" width={60} height={50}/>
      <img  src={discord} alt="" width={62} height={50} />

    </div>
     


</div>

      
  )
}