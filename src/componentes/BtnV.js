import { Link } from "react-router-dom";
import React from "react";
import './css/BotonVolver.css';
function BtnV(){
    return(
        <div className="botonVolver">
         <Link to= "/">  <p> VOLVER </p>  </Link>
        </div>
    );

}
export default BtnV;




