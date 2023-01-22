import ProjectsIcon from "../../assets/projects-icon.png";

export default function HomeProjects() {
  return (
    <div className="HomeProjects">
      <div className="HomeProjectsContainer">
        <div className="HomeProjectsContainer__Subcontainer">
          <div className="HomeProjectsContainer__Subcontainer--Title">
            <img src={ProjectsIcon} alt="Icon"></img>
            <p>NUESTROS PROYECTOS</p>
          </div>
          <div className="Home-Projects1 ProjectsImage1"></div>
          <div className="Home-Projects1 ProjectsImage2"></div>
        </div>
        <div className="HomeProjectsContainer__Subcontainer">
          <div className="Mosaic">
            <div className="Home-Projects2 ProjectsImage3"></div>
            <div className="Home-Projects2 ProjectsImage4"></div>
            <div className="Home-Projects2 ProjectsImage5"></div>
            <div className="Home-Projects2 ProjectsImage6"></div>
          </div>
          <div className="Home-Projects1 ProjectsImage7"></div>
          <div className="Home-Projects1 ProjectsImage8"></div>
        </div>
      </div>
      <div className="HomeProjects__Bg"></div>
    </div>
  );
}
