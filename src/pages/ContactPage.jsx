import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="page narrow contact-page">
      <h1>Hvor du finder mig</h1>

      <div className="contact-card">
        <div className="contact-card-image">
          <img src="public/billeder/mig-blurry.svg" alt="billede af mig" />
        </div>

        <div className="contact-card-content">
          <h2>Kontakt</h2>
          <p>
            Du er velkommen til at skrive til mig, hvis du vil samarbejde om et
            projekt eller høre mere om mig og mit arbejde.
          </p>

          <ul className="contact-list">
            <li>
              <a href="celinaml@outlook.dk">celinaml@outlook.dk</a>
            </li>
            <li>
              <a
                href="https://github.com/celinamlunding"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="tel:+4512345678">+45 60 24 85 56</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
