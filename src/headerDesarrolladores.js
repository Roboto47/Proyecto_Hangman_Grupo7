
import React from "react";
import './componentes/App.css';
import logo from './asset/imagenes/logo.png';
import soga from './asset/imagenes/soga.png';
import mate from './asset/imagenes/mate.png';
import loguito from './asset/imagenes/loguito.png';
import { render } from "@testing-library/react";

function headerDesarrolladores() {

    render()

    return(
<header>
        <section className="icono">

        <img  src={mate} alt="" width="70" />
        <img  src={loguito} alt="" width="300" />
      
        </section>
      
        <section className="logo">
          <img  src={logo} alt="" width="400" height={150}/>
          <img  src={soga} alt="" width="45" />
        </section>

        </header>
    )

}

export default headerDesarrolladores;