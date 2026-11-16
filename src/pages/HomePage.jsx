import { Link } from "react-router";
import projects from "../data/projects";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="hero-intro">
          <div className="hero-copy">
            <h1 className="hero-heading">Hejsa</h1>
            <p className="hero-text">
              Jeg hedder Celina og velkommen til min portfolio.
            </p>
          </div>
          <img
            className="hero-image"
            src="billeder/mig.1.svg"
            alt="Illustration af Celina"
          />
        </div>
        <div className="actions">
          <Link className="button" to="/projects">
            Se projekter
          </Link>
          <Link className="button secondary" to="/contact">
            Kontakt mig
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
