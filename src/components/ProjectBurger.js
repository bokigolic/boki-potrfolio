import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";


const FashionWebsite = (props) => {
  return (
    <ProjectItem>

      <div className="project-title" id="projectburger">Fashion Website</div>
      <div className="project-overview"><div className="left">
        <div className="project-img-container">
          <img src={staticFolder() + "/img/fashion-site.jpg"} alt="" />
        </div>
        <div className="project-buttons">
          <a target="_blank" href="https://github.com/bokigolic/Fashion-website" rel="noreferrer">GitHub</a>
          <a target="_blank" href="https://majestic-rolypoly-6ce977.netlify.app/" rel="noreferrer">Live View</a>
        </div>
      </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">HTML</li>
              <li className="project-tools__item">CSS</li>
              <li className="project-tools__item">Bootstrap</li>

       
            </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">I used HTML and CSS to develop a website. It is important to note that I introduced certain animations using CSS to make the site look more dynamic. I also used Bootstrap. This web site is responsive and can be used on small devices. </p>
          </div>
        </div>
      </div>

    </ ProjectItem>
  );
};

export default FashionWebsite;