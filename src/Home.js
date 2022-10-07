import React from "react";
import './componentes/css/style.css'
import logo from './componentes/img/logo.png'
import Btn from "./Btn";
import mate from './componentes/img/mate.png';
import loguito from './componentes/img/loguito.png';
import face from './componentes/img/face.png';
import twitter from './componentes/img/twitter.png';
import discord from './componentes/img/discord.png';
import sogaLogo from './componentes/img/sogaLogo.png';



  function Home (){




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
export default Home;