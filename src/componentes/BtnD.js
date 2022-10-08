import { Link } from "react-router-dom";
import React from 'react';
import './App.css'
function BtnD(){
    return(
        <div>
            <Link to= "/desarrolladores">
            <button class="botoneshome " >
                <span>
                    EQUIPO
                </span>   
                </button>
            </Link>
        </div>
    );

}
export default BtnD;

