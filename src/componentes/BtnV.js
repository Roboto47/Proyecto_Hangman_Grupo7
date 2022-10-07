import { Link } from "react-router-dom";
import React from "react";
import './css/Style.css';

export default function BtnV(){
    return(
        <button className="contenedorbotonvolver">
            <Link to= "/">    <p> VOLVER </p>  </Link>
        </button>
    );

}




