import React from "react";
import "./App.css";
import stefano from "./assets/stefano-elorga.jpg";
import person from "./assets/programming.png";

export default function Portfolio() {
  return (
    <div className="container">
      <div className="presentation-container">
        <h1 className="presentation mrx5 fn-szx30">Stefano Elorga</h1>
        <p className="presentation">Front End Developer, Software Engineer</p>
      </div>

      <hr className="hr" />

      <div className="description-container">
        <div>
          <img src={stefano} alt="Stefano Elorga" className="stefano" />
        </div>

        <div className="description-text-container">
          <h1 className="description-text">
            Buscando crear nuevos proyectos y mi primera experiencia laboral.
          </h1>

          <p className="description-text-p mr-leftx15">
            Con ganas de aprender y usar mis habilidades técnicas para trabajar
            en proyectos maravillosos en compañías grandes. Encantando con el
            desarrallo de aplicaciones E-commerce, juegos móviles, redes
            sociales y la tecnología de punta.
          </p>

          <div className="buttons-container">
            <button
              className="buttons hoverResume"
              href="https://drive.google.com/file/d/1w3a_GVaOZtPC4OIUq1YyeCYrHy4VD-Mk/view?usp=share_link"
            >
              Resume
            </button>
            <a
              className="webs hoverWebs"
              href="https://www.linkedin.com/in/stefanoelorga/"
            >
              Linkedin
            </a>
            <a
              className="webs hoverWebs"
              href="https://github.com/StefanoElorga"
            >
              Github
            </a>
            <p className="webs gmail">stefanoelorga22@gmail.com</p>
          </div>
        </div>
      </div>

      <hr className="hr" />

      <div className="experience-container">
        <div>
          <h1 className="description-text">El desarrollo es mi pasión 🤝🏼</h1>
          <p className="description-text-p">
            Desarrollador con 1+ de experiencia. Dedicado a hacer código de
            calidad en tiempo rápido.
          </p>
        </div>
        <div>
          <img src={person} alt="programming" className="programming-person" />
        </div>
      </div>
      <hr className="hr" />
      <div className="skills-container">
        <h1 className="description-text">Mejores habilidades</h1>

        <div className="bubbles-skills-container">
          <div className="bubble">
            <h1 className="title-skills">Front End</h1>
            <p className="skills">
              React - React Native - Redux - JavaScript - CSS - SASS - HTML
            </p>
          </div>

          <div className="bubble">
            <h1 className="title-skills">Back End</h1>
            <p className="skills">Node - Express - PostgreSQL - Sequelize</p>
          </div>

          <div className="bubble">
            <h1 className="title-skills">Automatización</h1>
            <p className="skills">Git - GitHub - Deployment - Postman</p>
          </div>

          <div className="bubble">
            <h1 className="title-skills">Metodologías Ágiles</h1>
            <p className="skills">
              SCRUM - Persistente - Proactivo - Desarrollo colaborativo
            </p>
          </div>
        </div>
      </div>

      <hr className="hr" />

      <div className="projects-container">
        <h1 className="description-text">Proyectos y Experiencia</h1>

        <div className="bubble-project">
          <div className="position-location-container">
            <h1 className="position">Full Stack Developer // Henry</h1>
            <p className="location">Buenos Aires Argentina</p>
          </div>

          <div>
            <p className="date">Jul 2021 hasta Dic 2021</p>
            <ul className="ul">
              <li className="li">
                Trabajé junto a un equipo de 5 personas donde desarrollamos una
                aplicación móvil que fomenta el uso de las bicicletas,
                recompensando al usuario por cada KM recorrido.
              </li>
              <li className="li">
                Aumenté el tiempo de respuesta del back-end en un 50% a través
                de mejores consultas en PostgreSQL con Sequelize, logrando una
                mejor experiencia de usuario.
              </li>
              <li className="li">
                Disminuí el tiempo de carga en un 40% en el front-end mediante
                técnicas como la carga diferida, la reducción de las llamadas al
                servidor, la reducción del tamaño de las imágenes y más.
              </li>
              <li className="li">
                Diseñé la interfaz de usuario y la experiencia con estilos
                modernos, simples y hermosos.
              </li>
              <li className="li">
                Disminuí el tiempo de carga del sitio web en un 20% mediante la
                optimización de los estados en los componentes de React usando
                Redux, logrando un código más modular.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
