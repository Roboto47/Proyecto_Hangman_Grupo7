import React from 'react';
import { Link } from "react-router-dom";
import './css/BotonHome.css';


export default function Btn(){
  return (
    <section>
 
    
   
    <CustomLink to="/juego" className="botonHome" >JUGAR</CustomLink>
                                <br></br>
    <CustomLink to="/desarrolladores" className="botonHome">EQUIPO </CustomLink>
    

    </section>
  )
}

function CustomLink ({ to, children, ...props}){
    const path = window.location.pathname
    return (
    <div className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
     </div>
   )
 }