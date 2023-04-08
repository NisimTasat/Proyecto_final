import React from "react";
import "./Intro.css";
import imagen from "./Imagen.png"
import CustomButton from "../Button/CustomButton";
import UncontrolledExample from "../Carrousel/Carrousel";



const Intro = ({ titulo }) => {
    return (
    <div className="contenedorImagen">
       {/* <img src ={imagen} className ="imagen" alt="Foto Perfil"/> */}
        <p>Hola Soy Nisim Tasat  </p>
    <h1> {titulo} </h1>
    
    <CustomButton color="red" texto= "Boton Intro"/>
    <CustomButton color="blue" texto= "Boton 2"/>

    



    </div>
)} 
export default Intro;