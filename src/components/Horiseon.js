import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";

const Horiseon = () => {

  return (
    <ProjectItem>

      <div className="project-title" id="horiseonwebsite">Horiseon Website</div>
      <div className="project-overview"><div className="left">
        <div className="project-img-container">
          <img src={staticFolder() + "/img/firstSite.jpg"} alt="Img of first site" />
        </div>
        <div className="project-buttons">
          <a target="_blank" href="https://github.com/bokigolic/urban-octo-telegram" rel="noreferrer">GitHub</a>
          <a target="_blank" href="https://bokigolic.github.io/urban-octo-telegram/" rel="noreferrer">Live View</a>
        </div>
      </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">HTML</li>
              <li className="project-tools__item">CSS</li>
              <li className="project-tools__item">JavaScript</li> </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">This is a web application that uses ReactJS to create your custom burger, you can choose ingredients and see how your burger will look like and how much will it cost,  The burger animation is done through CSS for faster perfomance. Than you can proceed to checkout and once you submited, it is stored in a database using Firebase. This allows to login and view your orders anytime in the future. </p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default Horiseon;

