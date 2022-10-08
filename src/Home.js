import React from "react";
import './componentes/css/style.css'
import logo from './componentes/img/logo.png'
import Btn from "./Btn";
import sogaLogo from './componentes/img/sogaLogo.png';



  function Home (){
    
    return ( <div>
        <div >
            <div>
            <section className="logohome">
    <img  src={logo} alt="" width="500" height={190}/>
    <img  src={sogaLogo} alt="" width="45" /> 
    </section>
            <section className="botones">
                <Btn/>
            </section>
            </div>
            
        </div>

</div>

        
    )
}
export default Home;