import { stats } from "../data/Portfoliodata";
import "./Hero.css";

export default function Hero({ onScrollTo }) {
  return (
    <section id="about" className="hero">
      <div className="hero__grid" />
      <div className="hero__glow" />

      <div className="hero__content">
        {/* Status badge */}
        <div className="hero__status">
          <div className="hero__status-dot">
            <div className="hero__status-ring" />
            <div className="hero__status-core" />
          </div>
          <span className="hero__status-text">AVAILABLE FOR WORK · DUBAI</span>
        </div>

        {/* Name */}
        <h1 className="hero__name">Jaseeludheen P</h1>

        {/* Title */}
        <h2 className="hero__title">
          Full Stack Developer<span className="cursor">_</span>
        </h2>

        {/* Bio */}
        <p className="hero__bio">
          3 years building production-grade web applications with{" "}
          <span className="hero__bio-highlight">Python · Django · React</span>.
          I ship scalable APIs, containerised stacks, and automated pipelines — then make them look good.
        </p>

        {/* CTAs */}
        <div className="hero__cta">
          <button className="btn-primary" onClick={() => onScrollTo("projects")}>
            View My Work ↓
          </button>
          <button className="hero__btn-outline" onClick={() => onScrollTo("contact")}>
            Let's Talk →
          </button>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {stats.map(([number, label]) => (
            <div key={label}>
              <div className="hero__stat-number">{number}</div>
              <div className="hero__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}