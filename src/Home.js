import React from "react";
import './componentes/Home.css';
import './componentes/App.css'
import logo from './asset/imagenes/logo.png';
import soga from './asset/imagenes/soga.png';
import jugar from './asset/imagenes/jugar.png';
import mate from './asset/imagenes/mate.png';
import loguito from './asset/imagenes/loguito.png';
import BtnD from "./componentes/BtnD";

function Home(){
  return(



    <div>
    
      <section className="icono">
    <img  src={mate} alt="" width={70} />
      <img  src={loguito} alt="" width={300} />
      </section>
    
      <section className="logohome">
        <img  src={logo} alt="" width={500} height={190}/>
        <img  src={soga} alt="" width={45} />
    
        <div className='contenedorbotonhomes'>
                <button class="botoneshome " >  <span>JUGAR</span>   </button>  
                <BtnD/>
                </div>
        </section>
      
        <section className="derechoshome">
               <h4> © 2022 Mate Cebado Inc. | All rights reserved.  </h4>
               <img  src={mate} width={43}/>
            </section>
        
    
      
      </div>
    
    
    
    
    
     
    
    
    
    
    )
}

export default Home;