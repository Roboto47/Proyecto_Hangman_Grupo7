import { Link } from "react-router-dom";
import React from "react";
import './css/style.css'
function BtnV(){
    return(
        <div className="contenedorbotonvolver">
        <div className="botonvolver">
         <Link to= "/">    <p> VOLVER </p>  </Link>
        </div>
        </div>
    );

}
export default BtnV;




