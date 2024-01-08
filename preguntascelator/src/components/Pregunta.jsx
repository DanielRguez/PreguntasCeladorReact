const Pregunta = ({pregunta}) => {
    const {id, enunciado, respuesta1, respuesta2, respuesta3, respuesta4, respuestacorrecta, favorita} = pregunta;
    return (
        <div className="card" style={{width: "18rem"}} >
            <button type="button" className="align-baseline btn-close " aria-label="Close"></button>
            <div className="card-body">               
                <h5 className="card-title">Pregunta nº{id}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{enunciado}</h6>
                <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                <input type="radio" className="btn-check" name="btn-respuesta" id="vbtn-radio1" autoComplete="off"></input>
                <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">{respuesta1}</label>
                <input type="radio" className="btn-check" name="btn-respuesta" id="vbtn-radio2" autoComplete="off"></input>
                <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">{respuesta2}</label>
                <input type="radio" className="btn-check" name="btn-respuesta" id="vbtn-radio3" autoComplete="off"></input>
                <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">{respuesta3}</label>
                <input type="radio" className="btn-check" name="btn-respuesta" id="vbtn-radio4" autoComplete="off"></input>
                <label className="btn btn-outline-danger" htmlFor="vbtn-radio4">{respuesta4}</label>
                </div>
            </div>
        </div>
    )
}

export default Pregunta;