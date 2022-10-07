import { Link } from "react-router-dom";
import React from 'react';
import './Error.css'

function BtnH(){
    return(
        <div className="button">
            <Link to= "/" className="white">REGRESAR</Link>
        </div>
    );

}
export default BtnH;