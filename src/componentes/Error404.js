import React from 'react';
import './Error.css'
import BtnH from './BtnH';


function Error (){
    return(
        <div className='error'>     
        <div className='container'>    
            <h1> ( ´･･)ﾉ(._.`) </h1>
            <p> 
                Disculpa, tu página no ha sido encontrada
            </p>
            <button>
                <BtnH/>
            </button>
        </div>
        </div>
    )
}

export default Error;