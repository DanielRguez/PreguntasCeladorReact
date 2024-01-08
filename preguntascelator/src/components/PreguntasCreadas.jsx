import Pregunta  from "./Pregunta";

const PreguntasCreadas = ({preguntas}) => {

    return (
        
        <div>
            <ul className="list-group">
            {
                preguntas.map( p => {
                    return (<Pregunta key={p.id} pregunta={p}></Pregunta>)
                })
            }
            </ul>
        </div>
    )
}

export default PreguntasCreadas;