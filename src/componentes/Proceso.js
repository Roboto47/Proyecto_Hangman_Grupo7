import Palabra from './components/Proceso.js';

function Proceso(){
    return(
        <section className='Palabras'>
            {
                Palabra && Palabra.map( palabra => {
                    return(
                        <section className="box" key={palabra.letras}>
                            {palabra.letras }
                            {palabra.pista }

                        </section>
                    )
                } )
            }

        </section>
    )
}

export default  Proceso