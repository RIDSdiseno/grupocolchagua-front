import "../styles/hero-postulaciones.css";
import logoColchagua from "../assets/logo/logo-colchagua-2.png";

export default function HeroPostulaciones() {
  return (
    <section className="hp-hero" aria-label="Hero postulaciones">
      <div className="hp-hero__overlay" aria-hidden="true" />

      <div className="hp-hero__inner">
        <div className="hp-hero__copy">
          <img
            className="hp-hero__logo"
            src={logoColchagua}
            alt="Grupo Colchagua Santa Cruz"
          />

          <div className="hp-hero__content">
            <span className="hp-hero__kicker">Grupo Colchagua</span>

            <h1 className="hp-hero__title">
              Postula hoy y encuentra tu proximo trabajo
            </h1>

            <p className="hp-hero__tagline">
              Tu trabajo ideal esta a un{" "}
              <span className="hp-hero__glow">CLICK</span>
            </p>
          </div>
        </div>

        <div className="hp-hero__visual hp-hero__right">
          <video
            src="/videos/download.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hp-hero__people hero-video"
          >
            Tu navegador no soporta video HTML5.
          </video>

          <a href="#ofertas" className="hp-hero__btn btn-postular">
            Postular
          </a>
        </div>
      </div>
    </section>
  );
}
