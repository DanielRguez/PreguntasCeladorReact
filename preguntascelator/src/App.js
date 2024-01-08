import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FormularioPregunta from './components/FormularioPregunta' ;  
import PreguntasCreadas from './components/PreguntasCreadas';

const preguntasIniciales = [];
let idActualPregunta= 1;


function App() {
  const [preguntas, setPreguntas] = useState(preguntasIniciales);

  const addQuestion = (nueva) =>{

    nueva.id = idActualPregunta;
    idActualPregunta++;
    setPreguntas([...preguntas, nueva]);
    //Fallo al dejar dos preguntas con los mismos datos
    //setPreguntas((prev) => ([...prev, nueva]));
  }

  const deleteQuestion = (nueva) => {

  }


  return (
    <div className="App">
    <FormularioPregunta 
      aniadePregunta={addQuestion}
      borraPregunta={deleteQuestion}
    ></FormularioPregunta> 
    <PreguntasCreadas preguntas={preguntas}></PreguntasCreadas>
    </div>
  );
}

export default App;
