import React, { useState } from 'react'


export default function Cargos(){
    const listaCargos =[{id:"1", talle: "L", modelo: "WF15"}];
    
    const [cargos, setCargos] = useState([]);
    setCargos (cargos)



  return(
    <section>
    {setCargos.map( (cargos) => (
        <div>{cargos.nombre} </div>
    ))}
    </section>
   )

 }

