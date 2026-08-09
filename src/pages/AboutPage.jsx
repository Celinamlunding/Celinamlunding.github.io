import "./AboutPage.css";

function AboutPage() {
  const services = [
    { image: "/collage/IMG_0069.JPG" },
    { image: "/collage/IMG_6894.jpg" },
    { image: "/collage/MIG.png" },
  ];

  return (
    <div className="page about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <h1>Fanget på kamera</h1>
          <p className="lead">
            Jeg elsker at fange de specialle øjeblikke på kamerea, store som
            små.
          </p>
          <button className="button">Se mere</button>
        </div>

        <div className="about-grid" aria-label="Services med billeder">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} />
              <div className="service-overlay">
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
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
