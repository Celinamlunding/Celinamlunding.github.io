import { Link, useParams } from "react-router";
import projects from "../data/projects";
import "./ProjectPage.css";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  return (
    <article className="page narrow project-page">
      <Link className="back-link" to="/projects">
        Tilbage til projekter
      </Link>

      <img className="detail-image" src={project.image} alt="" />
      <p className="eyebrow">{project.year}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.description}</p>

      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {project.slug === "ctrl" && (
        <div className="project-gallery">
          <div className="project-gallery-row">
            <img
              className="project-illustration"
              src="/billeder/ctrl.svg"
              alt="Illustration til CTRL-projektet"
            />
            <img
              className="project-illustration"
              src="/billeder/ctrl.2..svg"
              alt="Anden illustration til CTRL-projektet"
            />
            <p>
              Her er resultatet af hvordan profilen endte med at se ud. Første
              billede viser hvordan brugeren først ser profilen. Det andet
              billede viser de taggede billeder, som kunder har oploadet.
            </p>
          </div>
          <div className="project-gallery-row project-gallery-row--bottom">
            <img src="/billeder/story.1.svg" alt="Story illustration 1" />
            <img src="/billeder/story.2.svg" alt="Story illustration 2" />
            <img src="/billeder/story.3.svg" alt="Story illustration 3" />
          </div>
          <p>
            Her er eksempler på hvordan markedsføringen af brandet kunne se ud.
            .
          </p>
        </div>
      )}
      {project.slug === "2Gather" && (
        <div className="project-gallery">
          <div className="project-gallery-row">
            <img
              className="project-illustration"
              src="/twogather/forside.svg"
              alt="Illustration til CTRL-projektet"
            />
            <p>Dette er den personlige forside af appen 2Gather.</p>
            <img
              className="project-illustration"
              src="/twogather/profile.svg"
              alt="Anden illustration til CTRL-projektet"
            />
            <p>Her ses profilen for en bruger i appen 2Gather.</p>
          </div>
          <div className="project-gallery-row project-gallery-row--bottom">
            <img src="/twogather/eventcard.svg" alt="Story illustration 1" />
            <img src="/twogather/eventdeltag.svg" alt="Story illustration 2" />
            <img src="/twogather/tilmeldt.svg" alt="Story illustration 3" />
          </div>
        </div>
      )}
    </article>
  );
}

export default ProjectPage;
