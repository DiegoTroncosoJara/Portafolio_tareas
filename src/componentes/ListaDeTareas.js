import React, {useState} from 'react';
import TareaFormulario from './Formulario';
import '../styles/ListaDeTareas.css';
import Tarea from './Tarea';


function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    // Verificar que la cadena no sea vacía
    if (tarea.texto.trim()) {
      // Se quita los espacios que estan al principio/final de la cadena
      tarea.texto = tarea.texto.trim();
      // Se agrega la tarea al principio de un arreglo
      // el operador '...' funciona para poner todos los objetos de ese arreglo 
      const tareasActualizadas = [tarea, ...tareas];
      // Actualizar estado
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea = {eliminarTarea}
            />
          )
        }

      </div>
    </>
  );
}

export default ListaDeTareas;