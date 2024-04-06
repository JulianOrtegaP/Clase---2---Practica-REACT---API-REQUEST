import {  useEffect, useState } from "react";
import axios from "axios";

// UseState se usa para crear estados - variables
// el Lado izquierdo es el nombre de la variable y el lado derecho para cambiar el valor de la variable
// useEffect: Para tener efectos controlados



function App() {

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
    setContador()
  }

  const decrementar = () => {
    setContador(contador - 1);
  }


  // ** Efectos controlados y se ejecuta cada vez que el compononte se renderiza **

  // useEffect(() => {
    
  //   console.log("Hola mundo");

  // }, [])

  // useEffect(() => {
    
  //   console.log("el contador ha cambiado de valor");
    
  // }, [contador])

  const[cursos, setCursos] = useState([]);


// Funcion para traer los datos de la API

const getData=async()=>{

  try{

      const {data} = await axios.get(

        "https://api.npoint.io/e8698903c4eee0df84b1");

        // guardamos los datos en el estado setCursos
        // 

        setCursos(data);
      
  } catch(error){

    console.log("Error en getData", error.message)
}

};




useEffect(() => {
  getData()
}, [])

  return (
  <div className="container">

    <h1 className="text-center"> el contador esta en {contador} </h1>

    <button className="btn btn-success me-4" onClick={() => incrementar()}>Incrementar</button>  
    <button className="btn btn-danger" onClick={() => decrementar()}>Decrementar</button>  

    <table className="table table-striped mt-4 ">

      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>horas</th>
          <th>nombre</th>
          <th>profesor</th>
        </tr>
        </thead>

         <tbody>
              {/* <tr>
                <th>1</th>
                <th>120</th>
                <th>Algoritmia</th>
                <th>Jose</th>
                </tr> 

                <tr>
                <th>2</th>
                <th>60</th>
                <th>etica</th>
                <th>anacleto</th>
                </tr>     */} 

          {cursos.map((curso,i) => (
            <tr key ={i}>
              <th>{curso.id}</th>
              <th>{curso.horas}</th>
              <th>{curso.nombre}</th>
              <th>{curso.profesor}</th>
            </tr>
          ))}


        </tbody>   



    </table>

  </div> );

}

export default App;




//