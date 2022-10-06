import React from "react";
import './componentes/App.css';
import twitter from './asset/imagenes/twitter.png';
import face from './asset/imagenes/face.png';
import discord from './asset/imagenes/discord.png';
import logo from './asset/imagenes/logo.png';
import soga from './asset/imagenes/soga.png';
import mate from './asset/imagenes/mate.png';
import loguito from './asset/imagenes/loguito.png';

function footerDesarrolladores(){

    return(
        <footer>
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
    
    

</footer>

    )

}
export default footerDesarrolladores;