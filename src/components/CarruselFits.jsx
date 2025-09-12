import React, { useState } from 'react';
import '../styles/CarruselFits.css';

import oficina from '../assets/oficina casual3.jpg';
import oficinacasual from '../assets/oficina casual2.webp';
import oficinacasual3 from '../assets/oficina casual1.jpg';
import palazo from '../assets/palazo.png';
import pantalon from '../assets/Pantalón ancho.jpeg';
import polerabroncon from '../assets/polerabronco.jpg';

const CarruselFits = ({ agregarAlCarrito }) => {
  const slides = [
    {
      titulo: "Palazzo",
      subtitulo: "NUEVOS FITS",
      descripcion: "Alargan y estilizan visualmente nuestra figura. De pierna ancha desde la cadera hasta el final.",
      imagen: palazo,
      marcaAgua: "palazo",
      precio: 120
    },
    {
      titulo: "Oficina Casual",
      subtitulo: "NUEVOS FITS",
      descripcion: "Pantalón ajustado que realza la figura. Perfecto para un look moderno y casual.",
      imagen: oficina,
      marcaAgua: "skinny",
      precio: 90
    },
    {
      titulo: "Pantalón Ancho",
      subtitulo: "NUEVOS FITS",
      descripcion: "Comodidad y estilo en un solo diseño, con pierna amplia desde la cintura.",
      imagen: pantalon,
      marcaAgua: "wide leg",
      precio: 100
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleComprar = (slide) => {
    agregarAlCarrito(slide);
  };

  return (
    <section className="nuevo-fit-carrusel">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="nuevo-fit-texto">
              <h3 className="subtitulo">{slide.subtitulo}</h3>
              <h1 className="titulo">{slide.titulo}</h1>
              <p className="descripcion">{slide.descripcion}</p>
              <p className="precio" style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 12 }}>
                ${slide.precio}
              </p>
              <button
                className="boton-comprar"
                onClick={() => handleComprar(slide)}
              >
                COMPRA AQUÍ
              </button>
            </div>
            <div className="nuevo-fit-imagen">
              <img src={slide.imagen} alt={slide.titulo} />
              <span className="marca-agua">{slide.marcaAgua}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>Anterior</button>
      <button className="next" onClick={nextSlide}>Siguiente</button>
    </section>
  );
};

export default CarruselFits;