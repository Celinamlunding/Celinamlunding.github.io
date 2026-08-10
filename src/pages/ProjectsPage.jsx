import { Link } from "react-router";
import projects from "../data/projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div className="page projects-page">
      <section className="section intro">
        <h1 className="project-heading">PROJEKER</h1>
      </section>

      <section className="project-grid" aria-label="Projektliste">
        {projects.map((project) => (
          <article className="project-card" key={project.slug}>
            <img src={project.image} alt={`Preview af ${project.title}`} />
            <div className="project-card-content">
              <p className="eyebrow">{project.year}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link to={`/projects/${project.slug}`}>Se projekt</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
