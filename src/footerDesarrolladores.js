import React from "react";
import './componentes/App.css';
import twitter from './componentes/img/twitter.png';
import face from './componentes/img/face.png';
import discord from './componentes/img/discord.png';
import mate from './componentes/img/mate.png';
import BtnH from "./componentes/BtnH";

function footerDesarrolladores(){

    return(
        <footer>
        <div className='contenedorboton'>
         <BtnH/>
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
    
    

</footer>

    )

}
export default footerDesarrolladores;