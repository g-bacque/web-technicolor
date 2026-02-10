import "./Bio.css";
import bioPhoto from "../assets/images/bio-photo.png";

export default function Bio() {
  return (
    <section className="bio" id="bio">
      <div
        className="bio-background"
        style={{ backgroundImage: `url(${bioPhoto})` }}
      >
        <div className="bio-text-overlay">
          <h2>Quiénes somos</h2>
          <p>
            Somos Technicolor Club, una banda de disco-pop formada en 2024. Nuestro sonido fusiona el groove bailable con armonías sofisticadas, creando una experiencia sonora fresca y envolvente.
          </p>
        </div>
      </div>
    </section>
  );
}
