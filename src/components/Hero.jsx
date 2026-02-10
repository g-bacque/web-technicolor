import "./Hero.css";
import heroVideo from "../assets/videos/hero-video.mp4";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Video de fondo */}
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay suave para legibilidad */}
      <div className="overlay" />

      {/* Contenido */}
      <div className="hero-content">
        <a
          href="https://open.spotify.com/intl-es/artist/0GIbiBPGIPRLLD5vU4Wl2s?si=nfHbujQQSdKA8mBTgcqwSQ"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          ESCUCHAR
        </a>
      </div>
    </section>
  );
}