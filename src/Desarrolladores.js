
import React from "react";
import './App.css';
import avatar from './asset/imagenes/Avatar.png';
import ivan from './asset/imagenes/ivan.jpeg';
import eze from './asset/imagenes/eze.jpeg';
import caro from './asset/imagenes/caro.jpeg';
import henry from './asset/imagenes/henry.jpeg';
import vale from './asset/imagenes/vale.jpeg';
import twitter from './asset/imagenes/twitter.png';
import face from './asset/imagenes/face.png';
import discord from './asset/imagenes/discord.png';
import logo from './asset/imagenes/logo.png';
import soga from './asset/imagenes/soga.png';
import mate from './asset/imagenes/mate.png';
import loguito from './asset/imagenes/loguito.png';

 class Desarrolladores extends React.Component{


render (){


return  <div>

  <section className="icono">

  <img  src={mate} alt="" width="70" />
  <img  src={loguito} alt="" width="300" />

  </section>

  <section className="logo">
    <img  src={logo} alt="" width="400" height={150}/>
    <img  src={soga} alt="" width="45" />
  </section>

        <div className="seccion1">

              <section className="informacion"> 
                 <img  src={ivan} alt="" width="150"/>
                 <h3> <strong> Diaz Hector Ivan</strong></h3>
                 <h2> <strong> Programador</strong> </h2>
                 <p> <strong> DNI:37304786 </strong></p>
                 <p> <strong>LU:37304786 </strong> </p>
              </section>

          <section className="informacion"> 
            <img  src={eze} width="150"/>
              <h3> <strong> Ezequiel Alejandro Garcia</strong> </h3>
              <h2> <strong> Programador   </strong>  </h2>
              <p><strong> DNI:41401187</strong> </p>
              <p><strong> LU:TUV000415 </strong> </p>
          </section>

            <section className="informacion"> 
               < img  src={caro} width="150"/>
              <h3> <strong>  Carolina Maria de los Angeles Cortez </strong> </h3>
              <h2> <strong> Programadora </strong>   </h2>
              <p><strong> DNI:44812374 </strong></p>
              <p><strong> LU:TUV000415 </strong> </p>
            </section>
        </div>
    
     <div className="seccion2">
            <section className="informacion"> 
                <img  src={henry} width="150"/>
                <h3> <strong> Hernan Enrique Arias</strong> </h3>
                <h2> <strong> Programador  </strong> </h2>
                <p> <strong>DNI:36225750 </strong></p>
                <p><strong> LU:TUV000004  </strong></p>
            </section>
            <section className="informacion"> 
               < img  src={vale} width="150"/>
               <h3> <strong> Valeria Caballero</strong></h3>
               <h2> <strong> Programadora   </strong></h2>
               <p><strong> DNI:37304786 </strong> </p>
               <p><strong> LU:37304786</strong>  </p>
            </section>
      </div>
            <div className='contenedorboton'>
            <a href="/">  <button class="boton " >  <span>Volver</span>   </button>  </a>   
            </div>

      <div className="redes">
        <img  src={twitter} width={100} height={80}/>
        <img  src={face} width={100} height={80}/>
        <img  src={discord} width={100} height={80} />

      </div>

        <section className="derechos">
           <h4> © 2022 Mate Cebado Inc. | All rights reserved.  </h4>
           <img  src={mate} width={43}/>
        </section>
        
        
</div>
    
    
}

}
export default Desarrolladores;
