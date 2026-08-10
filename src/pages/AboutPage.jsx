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
              Hej, og velkommen til mig og min portfolie:) Jeg hedder Celina, og
              er en 22 årig multimediedesigner. Jeg brænder for alt hvor jeg kan
              være kreativ i form af billede/video redigering, hjemmeside/app
              design, samt kreering af brandidentiteter. Jeg elsker at fodybe
              mig i ting, og er meget perfektionistisk. Det betyder at jeg
              aldrig gør noget halvt, og at det endelig resultat altid bliver
              godt. Selvom jeg godt kan lide at forybe mig i ting og arbejde
              selvstændig, elsker jeg også at arbejde i teams og få mange og
              forskellige perspektiver ind på en case, og lave noget fedt
              sammen.{" "}
            </p>
            <p>
              Hvad jeg kan: Da jeg stadig er i gang med studie, får jeg hele
              tiden nye kompentencer, så jeg er derfor meget adaptiv i forhold
              til arbejdsopgaver.{" "}
            </p>
            <p>
              Programmer jeg er van til at arbejde med: Figma Adobe Photoshop
              Adobe Lightroom Adobe Premire Pro Capcut
            </p>
            <p>
              Personligt: Jeg kommer originalt fra en lille by i Sønderjylland,
              men har prøvet at bo lidt forskellige steder, heriblandt Aalborg
              og nu Aarhus. Til dagligt studierer jeg, samt arbejder deltid ved
              siden af. Ellers bruger jeg meget af min tid på at tilbringe tid
              med mine venner, spille guitar, tage til koncerter og være ude at
              rejse, når muligheden er der. Her tager jeg mange billeder og
              videoer, da jeg elsker at fange øjeblikke i momentet, så man kan
              have dem som fysiske minder forevigt.
            </p>
            <p></p>
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
