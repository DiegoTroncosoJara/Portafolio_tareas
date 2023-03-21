import React, {useState, useId} from 'react';
import Tarea from './Tarea';
import '../styles/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid'; // PAQUETE PARA GENERAR ID'S UNICOS.

function TareaFormulario(props) {
  const [input, setInput] = useState('');
  const idTarea = useId();


  const manejarCambio = e => {
    // Cada letra que se ingresa en el input
    setInput(e.target.value);
  };


  const manejarEnvio = e => {
    // Evita que se re-cargue la pagina 
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    console.log("tareaNueva: ", tareaNueva);
    props.onSubmit(tareaNueva);
  };

  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={ manejarCambio}
      />
      <button className='tarea-boton'>Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;