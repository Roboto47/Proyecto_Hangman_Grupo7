import React from "react";
import './Home.css';
import logo from './asset/imagenes/logo.png';
import soga from './asset/imagenes/soga.png';
import jugar from './asset/imagenes/jugar.png';
import mate from './asset/imagenes/mate.png';
import loguito from './asset/imagenes/loguito.png';
import { Link } from "react-router-dom";
class Home extends React.Component{


render(){


return(



<div>

  <section className="icono">
<img  src={mate} alt="" width="70" />
  <img  src={loguito} alt="" width="300" />
  </section>

  <section className="logohome">
    <img  src={logo} alt="" width="500" height={190}/>
    <img  src={soga} alt="" width="45" />

    <div className='contenedorbotonhomes'>
            <a href="/">  <button class="botoneshome " >  <span>JUGAR</span>   </button>  </a>   
            <a href="/desarrolladores">  <button class="botoneshome " >  <span>Equipo</span>   </button>  </a>   
            </div>
    </section>
  
    <section className="derechoshome">
           <h4> © 2022 Mate Cebado Inc. | All rights reserved.  </h4>
           <img  src={mate} width={43}/>
        </section>
    

  
  </div>





 




)









}





}

export default Home;