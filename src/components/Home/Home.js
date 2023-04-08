import React from "react";
import Intro from "../Intro/Intro";
import "./Home.css";
import UncontrolledExample from "../Carrousel/Carrousel";


const Home =() => {
    return (
        <header>
            <UncontrolledExample> </UncontrolledExample>
            <Intro titulo= "New Arrivals" />
            <h3> ENVIOS A TODO EL PAIS</h3>
            
        </header>
);}

export default Home;