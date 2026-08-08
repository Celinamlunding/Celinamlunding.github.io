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

      <div className="actions">
        {project.links.map((link) => (
          <a
            className="button secondary"
            href={link.href}
            key={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>

      {project.slug === "case-study" && (
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
          </div>
          <div className="project-gallery-row project-gallery-row--bottom">
            <img src="/billeder/story.1.svg" alt="Story illustration 1" />
            <img src="/billeder/story.2.svg" alt="Story illustration 2" />
            <img src="/billeder/story.3.svg" alt="Story illustration 3" />
          </div>
        </div>
      )}
    </article>
  );
}

export default ProjectPage;
