import React from "react";

import './css/Style.css'
import ivan from './img/desarrolladores/ivan.jpeg'
import eze from './img/desarrolladores/eze.jpeg'
import caro from './img/desarrolladores/caro.jpeg'
import henry from './img/desarrolladores/henry.jpeg'
import vale from './img/desarrolladores/vale.jpeg'
import mate from './img/mate.png'
import loguito from './img/loguito.png'
import logo from './img/logo.png'
import face from './img/face.png'
import twitter from './img/twitter.png'
import discord from './img/discord.png'
import sogaLogo from './img/sogaLogo.png'



 function Desarrolladores (props){

    return ( <div>

    
  
<section className="icono">

<img  src={mate} alt="" width="70" />
<img  src={loguito} alt="" width="300" />

</section>
<section className="logohome">
    <img  src={logo} alt="" width="500" height={190}/>
    <img  src={sogaLogo} alt="" width="45" />   
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
              <img  src={eze} alt="" width="150"/>
                <h3> <strong> Ezequiel Alejandro Garcia</strong> </h3>
                <h2> <strong> Programador   </strong>  </h2>
                <p><strong> DNI:41401187</strong> </p>
                <p><strong> LU:TUV000415 </strong> </p>
            </section>
  
              <section className="informacion"> 
                 < img  src={caro} alt="" width="150"/>
                <h3> <strong>  Carolina Maria de los Angeles Cortez </strong> </h3>
                <h2> <strong> Programadora </strong>   </h2>
                <p><strong> DNI:44812374 </strong></p>
                <p><strong> LU:TUV000415 </strong> </p>
              </section>
          </div>
      
       <div className="seccion2">
              <section className="informacion"> 
                  <img  src={henry} alt="" width="150"/>
                  <h3> <strong> Hernan Enrique Arias</strong> </h3>
                  <h2> <strong> Programador  </strong> </h2>
                  <p> <strong>DNI:36225750 </strong></p>
                  <p><strong> LU:TUV000004  </strong></p>
              </section>
              <section className="informacion"> 
                 < img  src={vale} alt="" width="150"/>
                 <h3> <strong> Valeria Caballero</strong></h3>
                 <h2> <strong> Programadora   </strong></h2>
                 <p><strong> DNI:37304786 </strong> </p>
                 
                 <p><strong> LU:37304786</strong>  </p>
              </section>
        </div>


        <div>


            <v/>

        </div>


        <div className="redes">
        <img  src={twitter} alt="" width={100} height={80}/>
        <img  src={face} alt="" width={100} height={80}/>
        <img  src={discord} alt="" width={100} height={80} />

      </div>
      <section className="derechos">

<h4> © 2022 Mate Cebado Games Inc. | All rights reserved. </h4>
                        
<img  src={mate} alt="error" width={43}/>
</section>



        </div>
    )
}
export default Desarrolladores;
