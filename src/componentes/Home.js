import React from "react";
import './css/Style.css'
import logo from './img/logo.png'
import Btn from "./Btn";
import mate from './img/mate.png';
import loguito from './img/loguito.png';
import face from './img/face.png'
import twitter from './img/twitter.png'
import discord from './img/discord.png'
import sogaLogo from './img/sogaLogo.png'



  function Homes (props){




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
                <Btn/>
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
export default Homes;