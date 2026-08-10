import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">KONTAKT</h1>

      <div className="contact-section">
        <div className="contact-card">
          <div className="contact-card-content"></div>
        </div>
      </div>

      <div className="additional-section">
        <div className="additional-content">
          <div className="additional-image">
            <img src="billeder/mig-blurry.svg" alt="billede af mig" />
          </div>
          <div className="additional-text">
            <ul className="contact-list">
              <li>
                <a href="mailto:celinaml@outlook.dk">celinaml@outlook.dk</a>
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
    </div>
  );
}

export default ContactPage;
