import "./Hero.css";

function Hero({ title, subtitle, ctaText, image }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h2 className="hero-title">{title}</h2>
          <p className="hero-subtitle">{subtitle}</p>
          <button className="hero-btn" type="button">
            {ctaText}
          </button>
        </div>

        <div className="hero-image-wrap">
          <img className="hero-image" src={image} alt={title} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
