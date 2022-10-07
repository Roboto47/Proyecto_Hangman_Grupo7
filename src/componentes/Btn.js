import React from 'react';
import { Link } from "react-router-dom";
import './css/Style.css'
export default function Btn(){
  return (
    <section className='contenedorbotonhomes'>
 
    <button className='botoneshome'>
   
    <CustomLink to="/juego">Jugar</CustomLink>
    </button>
  
  
    <button className='botoneshome'>
    <CustomLink to="/desarrolladores">Equipo</CustomLink>
    </button>

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