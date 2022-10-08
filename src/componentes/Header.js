import "./css/style.css"
import React, {Fragment} from 'react'
import loguito from './img/loguito.png';
import mate from './img/mate.png';

function Header (){
    return(
        <Fragment>
            <section className="icono">
                <img  src={mate} alt="" width="70" />
                <img  src={loguito} alt="" width="300" />
            </section>
        </Fragment>
    )
}

export default Header;