import "./css/style.css"
import React, {Fragment} from 'react'
import face from './img/face.png';
import twitter from './img/twitter.png';
import discord from './img/discord.png';
import mate from './img/mate.png';

function Footer (){
    return(
    <Fragment>
                <section className="derechos">

<h4> © 2022 Mate Cebado Games Inc. | All rights reserved. </h4>
<img  src={mate} alt="error" width={43}/>
</section>

<div className="redes2">
   <img  src={twitter} alt="" width={60} height={50}/>
   <img  src={face} alt="" width={60} height={50}/>
   <img  src={discord} alt="" width={62} height={50} />
</div>
    </Fragment>
    )
}

export default Footer;