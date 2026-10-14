import "./AboutPage.css";

function AboutPage() {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="about-photo-grid" aria-label="Celina photo collage">
          <img
            className="about-photo about-photo-one"
            src="/billeder/om-mig/IMG_0535.jpg"
            alt="Celina portrait 1"
          />
          <img
            className="about-photo about-photo-two"
            src="/billeder/om-mig/IMG_0543.jpg"
            alt="Celina portrait 2"
          />
          <img
            className="about-photo about-photo-three"
            src="/billeder/om-mig/IMG_0557.jpg"
            alt="Celina portrait 3"
          />
          <img
            className="about-photo about-photo-four"
            src="/billeder/om-mig/IMG_0878_Original.jpg"
            alt="Celina portrait 4"
          />
          <img
            className="about-photo about-photo-five"
            src="/billeder/om-mig/IMG_8631.jpg"
            alt="Celina portrait 5"
          />
          <img
            className="about-photo about-photo-six"
            src="/billeder/om-mig/IMG_1699.jpg"
            alt="Celina portrait 6"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
