import { useState } from "react";
import "./AboutPage.css";

const portraits = [
  "/billeder/om-mig/IMG_0535.jpg",
  "/billeder/om-mig/IMG_0543.jpg",
  "/billeder/om-mig/IMG_0557.jpg",
  "/billeder/om-mig/IMG_0878_Original.jpg",
  "/billeder/om-mig/IMG_8631.jpg",
  "/billeder/om-mig/IMG_1699.jpg",
];

function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? portraits.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === portraits.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-photo-collage" aria-label="Celina collage">
          <div className="polaroid polaroid-single">
            <img
              src="/billeder/om-mig/polaroid.svg"
              alt="Celina polaroid frame"
              className="polaroid-frame"
            />
          </div>
        </div>

        <h1 className="about-heading">CELINA</h1>
      </div>

      <section className="about-story" aria-label="Om Celina">
        <div className="about-copy">
          <p>
            Jeg brænder for alt hvor jeg kan få lov til at være kreativ og
            tillære mig nye evner. Jeg har en stor interesse indenfor for
            markedsføring, grafisk design og content creation. Selvom jeg elsker
            at fordybe mig og sidde intensivt med opgaver, foretrækker jeg at
            arbejde i teams, da jeg syntes de forskellige perspektiver, ideer og
            sparring man får er mega fedt.
          </p>
          <p>
            Jeg kommer originalt fra en lille by i Sønderjylland, men har prøvet
            at bo lidt forskellige steder, heriblandt Aalborg og nu Aarhus. Til
            dagligt studierer jeg, samt arbejder deltid ved siden af. Ellers
            bruger jeg meget af min tid på at tilbringe tid med mine venner,
            spille musik, tage til koncerter og være ude at rejse, når
            muligheden er der. Her centrerer jeg meget af min tid på at tage
            billeder og videoer, da jeg elsker at fange øjeblikke i momentet, så
            jeg kan have dem som minder forevigt.
          </p>
        </div>

        <div className="about-carousel-section" aria-label="Billedekarusel">
          <div className="about-carousel">
            <button
              type="button"
              className="about-carousel__button"
              onClick={goToPrevious}
              aria-label="Se tidligere billede"
            >
              ‹
            </button>

            <img
              src={portraits[activeIndex]}
              alt={`Celina portræt ${activeIndex + 1}`}
              className="about-carousel__image"
            />

            <button
              type="button"
              className="about-carousel__button"
              onClick={goToNext}
              aria-label="Se næste billede"
            >
              ›
            </button>
          </div>

          <div className="about-carousel__thumbs" aria-label="Vælg billede">
            {portraits.map((portrait, index) => (
              <button
                key={portrait}
                type="button"
                className={`about-carousel__thumb ${
                  index === activeIndex ? "is-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Vis billede ${index + 1}`}
              >
                <img src={portrait} alt={`Miniature ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
