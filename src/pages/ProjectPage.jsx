import { Link, useParams } from "react-router";
import projects from "../data/projects";
import "./ProjectPage.css";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  const defaultStory = {
    challenge:
      "Der var tydelige behov for en mere konsistent og intentionel designproces, så produktet kunne blive lettere at forstå, bruge og videreudvikle.",
    challenge2:
      "Jeg fokuserede på at skabe en mere meningsfuld og brugervenlig oplevelse, hvor strukturen og funktionaliteten blev mere tydelige i praksis.",
    solution:
      "Jeg arbejdede med at skabe en mere tydelig og målrettet brugeroplevelse, hvor designet blev mere funktionelt, struktureret og lettere at navigere.",
    solution2:
      "Ved at forenkle og justere den visuelle og tekniske struktur, kunne jeg skabe en mere klar og engagerende oplevelse uden at gå på kompromis med funktionaliteten.",
    processTitle: "Fra diagnose til kvalificeret løsning",
    processParagraph:
      "Arbejdet indebar en klar proces, hvor jeg først identificerede de største udfordringer og derefter udviklede en mere kvalificeret løsning baseret på en tydelig forståelse af brugernes behov og det tekniske setup.",
    cards: [
      {
        number: "01",
        title: "Diagnose",
        text: "Først undersøgte jeg den eksisterende løsning for at finde de vigtigste barrierer i brugerflowet og den tekniske struktur.",
      },
      {
        number: "02",
        title: "Redesign",
        text: "Derefter arbejdede jeg med at forbedre flowet, tydeliggøre struktur og gøre interaktionerne mere intuitive for brugeren.",
      },
      {
        number: "03",
        title: "Kvalificering",
        text: "Til sidst kvalificerede jeg løsningen med fokus på bæredygtighed, skalerbarhed og bedre brugeroplevelse i praksis.",
      },
    ],
    optimizationTitle: "Små ændringer med tydeligt formål",
    optimizationParagraph1:
      "Fokus var ikke at ændre alt, men at gøre de helt rigtige forbedringer, der havde en tydelig effekt for brugernes forståelse og oplevelse af produktet.",
    optimizationParagraph2:
      "Information blev mere tydelig, interaktioner mere intuitive, og den samlede erfaring blev mere gennemskuelig uden at miste karakter eller funktionalitet.",
    reflectionTitle: "Optimering er mange ting",
    reflectionParagraph1:
      "Projektet viste, at optimering ikke kun handler om visuelle tweaks. Det handler også om at gøre et system mere forståeligt, mere konsekvent og mere brugbart i den virkelige hverdag.",
    reflectionParagraph2:
      "Det gav mulighed for en mere strømlinet, robust og meningsfuld løsning, der blev bedre at forholde sig til både som bruger og som udvikler.",
    checklist: [
      "Diagnostik før udvikling",
      "Smidig refaktorering",
      "Brugervenlig struktur",
      "Test og iterativ forbedring",
    ],
  };

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

  const story = project.story || defaultStory;

  return (
    <article className="page narrow project-page">
      <Link className="back-link" to="/projects">
        Tilbage til projekter
      </Link>

      <div className="project-case-study project-case-study--shared">
        <div className="project-case-study__hero">
          <div className="project-case-study__copy">
            <p className="project-kicker">
              {project.slug === "Mellemrum"
                ? "3. SEMESTER · PRODUKTOPMÆRKNING"
                : "Case study"}
            </p>
            <h1 className="project-case-study__title">{project.title}</h1>
            <p className="project-case-study__lead">{project.description}</p>

            <div className="project-case-study__meta">
              <div>
                <span>Rolle</span>
                <strong>{project.tags[0] || "Design"}</strong>
              </div>
              <div>
                <span>Samarbejde</span>
                <strong>Individuelt projekt</strong>
              </div>
              <div>
                <span>Fokus</span>
                <strong>{project.tags[1] || "Brand"}</strong>
              </div>
            </div>

            {project.links?.length > 0 && (
              <div className="project-case-study__actions">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    className="project-case-study__button"
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="project-case-study__visual">
            <div className="project-mockup-shell">
              <div className="project-mockup-window">
                <div className="project-mockup-window__topbar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="project-mockup-window__content">
                  <div className="project-mockup-screen">
                    <img src={project.image} alt={`${project.title} mockup`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-story">
        <div className="project-story__split">
          <div className="project-story__column">
            <span className="project-case-study__number">01</span>
            <h2>Udfordringen</h2>
            <p>{story.challenge}</p>
            <p>{story.challenge2}</p>
          </div>

          <div className="project-story__column">
            <span className="project-case-study__number">02</span>
            <h2>Løsningen</h2>
            <p>{story.solution}</p>
            <p>{story.solution2}</p>
          </div>
        </div>

        <div className="project-story__process">
          <p className="project-mini-label">PROCESSEN</p>
          <h2>{story.processTitle}</h2>
          <p>{story.processParagraph}</p>

          <div className="project-story__cards">
            {(story.cards || defaultStory.cards).map((card) => (
              <article key={card.title} className="project-story__card">
                <span>{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="project-story__optimization">
          <div className="project-story__compare">
            <div className="comparison-card comparison-card--before">
              <div className="comparison-card__label">Før</div>
              <div className="comparison-card__mockup">
                <div className="comparison-card__screen">
                  <span>{project.title}</span>
                </div>
              </div>
            </div>

            <div className="comparison-card comparison-card--after">
              <div className="comparison-card__label">Efter</div>
              <div className="comparison-card__mockup">
                <div className="comparison-card__screen comparison-card__screen--alt">
                  <span>{project.title}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-story__text-block">
            <p className="project-mini-label">OPTIMERINGEN</p>
            <h2>{story.optimizationTitle}</h2>
            <p>{story.optimizationParagraph1}</p>
            <p>{story.optimizationParagraph2}</p>
          </div>
        </div>

        <div className="project-story__reflection">
          <div className="project-story__reflection-copy">
            <p className="project-mini-label">REFLEKSION</p>
            <h2>{story.reflectionTitle}</h2>
            <p>{story.reflectionParagraph1}</p>
            <p>{story.reflectionParagraph2}</p>
          </div>

          <div className="project-story__checklist">
            <h3>Det tager jeg med videre</h3>
            <ul>
              {(story.checklist || defaultStory.checklist).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectPage;
