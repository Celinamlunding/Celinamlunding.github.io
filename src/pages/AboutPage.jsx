import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-heading">OM MIG</h1>

      <div className="about-section">
        <img src="svg/bog.svg" alt="" />
        <img src="svg/guitar.svg" alt="" />
        <img src="svg/headphones.svg" alt="" />
        <img src="svg/kaffe.svg" alt="" />
        <img src="svg/kamera.svg" alt="" />
        <img src="svg/phone.svg" alt="" />
      </div>
      <div className="about-additional-section">
        <div className="about-additional-content">
          <div className="about-additional-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="about-images">
            <img src="collage/korea.JPG" alt="Book" />
            <img src="collage/byen.jpg" alt="Music" />
            <img src="collage/MIG.png" alt="Portrait" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
