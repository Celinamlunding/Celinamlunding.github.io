import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="page narrow about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">Om mig</p>
          <h1>Hvem er jeg?</h1>
          <p className="lead">
            Skriv kort om din faglige retning, dine interesser og hvad du gerne
            vil blive bedre til. Hold teksten konkret og personlig.
          </p>
        </div>

        <div
          className="about-collage"
          aria-label="Billeder og illustrationer om mig"
        >
          <div className="collage-card collage-large">
            <img src="/billeder/poster.svg" alt="Collage billede 1" />
          </div>
          <div className="collage-card collage-small-top">
            <img src="/billeder/mig-blurry.svg" alt="Collage billede 2" />
          </div>
          <div className="collage-card collage-small-bottom">
            <img src="/billeder/ctrl.logo.svg" alt="Collage billede 3" />
          </div>
          <div className="collage-card collage-wide">
            <img src="/billeder/mig.1.svg" alt="Collage billede 4" />
          </div>
        </div>
      </section>

      <section className="info-list" aria-label="Om mig detaljer">
        <div>
          <h2>Jeg arbejder med</h2>
          <p>
            React, HTML, CSS, JavaScript, designproces og digitale produkter.
          </p>
        </div>
        <div>
          <h2>Jeg er nysgerrig på</h2>
          <p>
            Brugeroplevelser, visuel identitet og hvordan kode bliver til noget
            brugbart.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
