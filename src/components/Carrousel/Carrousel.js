import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imagen from "../Intro/Imagen.png"
import imagen2 from "../Intro/IMG2.jpg"
import imagen3 from "../Intro/DSC01926-scaled.jpg"
import imagen4 from "../Intro/DSC02058-scaled.jpg"
import imagen5 from "../Intro/mom-sheldon-4-scaled.jpg"
import Carrousel from "./Carrousel.css"
function UncontrolledExample() {
    return (
      <Carousel>
        <Carousel.Item>
          <img 
            className="Imagen1"
            src={imagen4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Imagen2"
            src={imagen2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Imagen3"
            src={imagen3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default UncontrolledExample;