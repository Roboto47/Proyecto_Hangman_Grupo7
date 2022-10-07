import Desarrolladores from "./Desarrolladores";
import React, {Fragment} from 'react'
import HeaderDesarrolladores from "./headerDesarrolladores";
import FooterDesarrolladores from "./footerDesarrolladores";

function Desarrollador(){
    return(
        <Fragment>
            <HeaderDesarrolladores/>
            <Desarrolladores/>
            <FooterDesarrolladores/>
        </Fragment>
    )
}
export default Desarrollador;