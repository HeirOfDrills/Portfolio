import glass from "../images/glass.png";

function HomePage() {
  return (
    <main>
      <section id="about" className="">
        <div className="info-card accent-border group ">
          <div className="info-img accent-border item">
            <img
              src={glass}
              alt="Stylized Purple-Toned headshot of Trevor Glascock: A Software Engineer."
            />
          </div>
          <div className="info-body item-double">
            <div className="info-title ">
              <h2 className="">About Trevor</h2>
            </div>
            <div className="info-text ">
              <p className="">I am a Software Engineer.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
