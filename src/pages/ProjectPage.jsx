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

      {project.slug !== "posters" && project.slug !== "Vuuh" && (
        <div className="project-hero-logo">
          <img src={project.image} alt={`${project.title} logo`} />
        </div>
      )}
      {project.slug === "posters" && (
        <img className="detail-image" src={project.image} alt="" />
      )}
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

      {project.slug === "Vuuh" && (
        <div className="project-gallery vuuh-gallery">
          <div className="vuuh-logo-header">
            <img src="/billeder/vuuh/vuuh-logo.svg" alt="Vuuh logo" />
          </div>

          <div className="vuuh-section vuuh-case-study">
            <div className="vuuh-visual-card vuuh-installation">
              <img
                src="/billeder/vuuh/installation-sucess.svg"
                alt="Succesfuld installation visning"
              />
            </div>
            <div className="vuuh-copy">
              <h2>Case study</h2>
              <p>
                Vuuh er designet som en enkel, tryg onboarding-oplevelse, der
                hjælper brugeren gennem installationen uden at føle sig
                overvældet. Fokus ligger på tydelige trin, visuel ro og klare
                succesbeviser i hver del af flowet.
              </p>
              <p>
                Når brugeren går igennem processen, bliver hver handling
                bekræftet med en lille visuel feedback, så det føles sikkert og
                kontrolleret. Det gør appen lettere at forstå, især når den skal
                guide nybegyndere gennem en mere teknisk opsætningsproces.
              </p>
            </div>
          </div>

          <div className="vuuh-section vuuh-step-by-step">
            <div className="vuuh-copy">
              <h2>Step-by-step</h2>
              <p>
                Flowet er opdelt i små, håndterbare steps, så brugeren kan følge
                processen uden at miste overblikket. Hvert trin er visuelt
                afgrænset og understøttet af en enkel statusfortælling.
              </p>
              <p>
                Designet gør det nemt at forstå, hvad der sker nu, hvad der
                kommer næste, og hvor langt man er i installationen.
              </p>
            </div>
            <div className="vuuh-checklist-grid">
              <img
                src="/billeder/vuuh/checklist-1.svg"
                alt="Checklist step 1"
              />
              <img
                src="/billeder/vuuh/checklist-2.svg"
                alt="Checklist step 2"
              />
              <img
                src="/billeder/vuuh/checklist-3.svg"
                alt="Checklist step 3"
              />
            </div>
          </div>

          <div className="vuuh-section vuuh-modal-section">
            <div className="vuuh-visual-card vuuh-modal-card">
              <img src="/billeder/vuuh/dialog-modal.svg" alt="Dialog modal" />
            </div>
            <div className="vuuh-copy">
              <h2>Modal</h2>
              <p>
                Modalen er lavet til at virke afslappet og tydelig i samme
                bevægelse. Den sender en klar besked uden at afbryde brugerens
                flow for meget og skaber ro i den ellers tekniske proces.
              </p>
              <p>
                Den bruger samme visuelle tone som resten af appen og giver
                brugeren en konsistent forståelse af, hvad der sker lige nu.
              </p>
            </div>
          </div>

          <div className="vuuh-section vuuh-success-section">
            <div className="vuuh-copy">
              <h2>Succes</h2>
              <p>
                Den sidste del af flowet er rettet mod en positiv afslutning.
                Når installationen er færdig, bliver det tydeligt, at brugeren
                er kommet igennem processen med succes.
              </p>
              <p>
                Den grønne successtatus skaber en tydelig afrunding og gør
                oplevelsen mere motiverende og tillidsfuld.
              </p>
            </div>
            <div className="vuuh-visual-card vuuh-success-card">
              <img
                src="/billeder/vuuh/connection-succes.svg"
                alt="Succesvisning efter tilslutning"
              />
            </div>
          </div>

          <div className="vuuh-section vuuh-compare">
            <div className="vuuh-compare-column">
              <h3>Før</h3>
              <div className="vuuh-compare-card">
                <img src="/billeder/vuuh/checklist-1.svg" alt="Før-visning" />
              </div>
            </div>
            <div className="vuuh-compare-column">
              <h3>Efter</h3>
              <div className="vuuh-compare-card">
                <img
                  src="/billeder/vuuh/connection-succes.svg"
                  alt="Efter-visning"
                />
              </div>
            </div>
          </div>
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
            <img src="/twogather/done.svg" alt="Story illustration 1" />
            <img src="/twogather/eventdeltag.svg" alt="Story illustration 2" />
            <img src="/twogather/tilmeldt.svg" alt="Story illustration 3" />
          </div>
        </div>
      )}
    </article>
  );
}

export default ProjectPage;
