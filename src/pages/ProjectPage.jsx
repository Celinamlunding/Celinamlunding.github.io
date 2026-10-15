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
        <div className="project-story__process">
          <h2>{story.processTitle}</h2>

          {story.processLink && (
            <a
              className="project-story__process-link"
              href={story.processLink.href}
              target="_blank"
              rel="noreferrer"
            >
              {story.processLink.label}
            </a>
          )}

          <p>{story.processParagraph}</p>

          {story.findings?.length > 0 && (
            <ul className="project-story__findings">
              {story.findings.map((item) => (
                <li key={item.title}>
                  <span className="project-story__finding-title">
                    {item.title}.
                  </span>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
          )}

          {story.processParagraph2 && (
            <p className="project-story__process-supporting">
              {story.processParagraph2}
            </p>
          )}
        </div>

        <div className="project-story__split">
          <div className="project-story__column">
            <span className="project-case-study__number">01</span>
            <h2>Udfordringen</h2>
            <p>{story.challenge}</p>
            <p>{story.challenge2}</p>
            {story.challenge3 && <p>{story.challenge3}</p>}

            {project.slug === "Re Rouge" && (
              <a
                className="project-story__cta-button"
                href="https://www.figma.com/proto/NPfFnMTZQaMlIFLg7Qmzqq/RE-ROUGE?node-id=405-488&viewport=482%2C163%2C0.18&t=dEH1qWbPMtk2dMG7-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=405%3A488&show-proto-sidebar=1"
                target="_blank"
                rel="noreferrer"
              >
                Se og prøv indleveringsflow
              </a>
            )}
          </div>

          {project.slug === "Mellemrum" ? (
            <div className="project-story__column project-story__column--visual">
              <span className="project-case-study__number">02</span>
              <h2>Løsningen</h2>
              <div className="mellemrum-image-grid">
                <img
                  src={`${import.meta.env.BASE_URL}billeder/mellemrum/ugyldig.png`}
                  alt="Mellemrum ugyldig tilmelding"
                />
                <img
                  src={`${import.meta.env.BASE_URL}billeder/mellemrum/allerede-tilmeldt.png`}
                  alt="Mellemrum allerede tilmeldt"
                />
              </div>
            </div>
          ) : project.slug === "Vuuh" ? (
            <div className="project-story__column project-story__column--visual">
              <span className="project-case-study__number">02</span>
              <h2>Løsningen</h2>
              <div className="vuuh-solution-gallery">
                <img
                  src={`${import.meta.env.BASE_URL}billeder/vuuh/checklist-1.svg`}
                  alt="Vuuh checklist design 1"
                />
                <img
                  src={`${import.meta.env.BASE_URL}billeder/vuuh/checklist-2.svg`}
                  alt="Vuuh checklist design 2"
                />
                <img
                  src={`${import.meta.env.BASE_URL}billeder/vuuh/checklist-3.svg`}
                  alt="Vuuh checklist design 3"
                />
              </div>
            </div>
          ) : project.slug === "Re Rouge" ? (
            <div className="project-story__column project-story__column--visual">
              <span className="project-case-study__number">02</span>
              <h2>Løsningen</h2>
              <div className="vuuh-solution-gallery">
                <img
                  src={`${import.meta.env.BASE_URL}billeder/la%20rouge/s%C3%A6lge-t%C3%B8j.png`}
                  alt="La Rouge sælge tøj billede"
                />
              </div>
            </div>
          ) : (
            <div className="project-story__column">
              <span className="project-case-study__number">02</span>
              <h2>Løsningen</h2>
              <p>{story.solution}</p>
              <p>{story.solution2}</p>
            </div>
          )}
        </div>

        {project.slug === "Vuuh" && (
          <div className="project-story__before-after">
            <p className="project-mini-label">FØR &amp; EFTER</p>
            <h2>Før og efter</h2>
            <div className="project-story__before-after-grid">
              <img
                src={`${import.meta.env.BASE_URL}billeder/vuuh/F%C3%B8r.png`}
                alt="Vuuh før redesign"
              />
              <img
                src={`${import.meta.env.BASE_URL}billeder/vuuh/efter.png`}
                alt="Vuuh efter redesign"
              />
            </div>
          </div>
        )}

        {project.slug === "Mellemrum" && (
          <div className="project-story__image-text-block">
            <div className="project-story__image-text-copy">
              <p className="project-mini-label">STRUKTUR</p>
              <h2>{story.structureTitle}</h2>
              <p>{story.structureParagraph}</p>
            </div>

            <div className="project-story__image-wrap">
              <img
                src={`${import.meta.env.BASE_URL}billeder/mellemrum/mappe-struktur.png`}
                alt="Mellemrum kodearkitektur"
              />
            </div>
          </div>
        )}

        {project.slug === "Re Rouge" && (
          <div className="project-story__process project-story__process--secondary">
            <h2>Re-Rōuge - House of Brand</h2>

            <a
              className="project-story__branddeck-button"
              href="https://www.figma.com/design/NPfFnMTZQaMlIFLg7Qmzqq/RE-ROUGE?node-id=1487-1323"
              target="_blank"
              rel="noreferrer"
            >
              Se branddeck
            </a>

            <p>
              Re-Rōuges er bygget op på ordene affordable chic, og viser en mere
              tilgængelig vej ind i La Rōuges nuværende univers, uden at gå på
              kompromis med den gode kvalitet og stil.
            </p>
            <p>
              Konceptet for Re-Rōuge blev udviklet som en forlængelse af La
              Rōuges eksisterende hjemmeside, med de samme værdier, som bygger
              på kvalitet, selflove og det at være sig selv.
            </p>
            <p>
              Re-Rōuge´s visuelle udtryk udforsker mere den selvsikkerhed, og
              kant som La Rōuge også bygger på, men ikke helt viser. Dette kan
              tydeligt mærkes i den vinrøde farve der ses igennem Re Rōuges
              hjemmeside, samt i den læbestift inspireret font der bruges som
              accent typografi gennem siden. Tone of Voice følger generelt La
              Rōuge, da målgruppen for deres re-commerce forblev den samme.
            </p>
          </div>
        )}

        <div className="project-story__reflection">
          <div className="project-story__reflection-copy">
            <p className="project-mini-label">REFLEKSION</p>
            <h2>{story.reflectionTitle}</h2>
            <p>{story.reflectionParagraph1}</p>
            <p>{story.reflectionParagraph2}</p>
          </div>

          <div className="project-story__checklist">
            <h3>Værdiskabelse</h3>
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
