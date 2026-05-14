import { skills, techBadges } from "../data/Portfoliodata";
import Section from "./Section";
import "./Skills.css";

const LEVEL_LABEL = (pct) => {
  if (pct >= 90) return "Expert";
  if (pct >= 80) return "Advanced";
  if (pct >= 65) return "Proficient";
  return "Familiar";
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Section>
        <div className="tag-badge">EXPERTISE</div>
        <h2 className="skills-section__title">Technical Skills</h2>

        <div className="skills-section__grid">
          {skills.map((s) => (
            <div key={s.label} className="skill-item">
              <span className="skill-item__name">{s.label}</span>
              <span className="skill-item__level">{LEVEL_LABEL(s.level)}</span>
            </div>
          ))}
        </div>

        <div className="skills-section__extras">
          <div className="skills-section__extras-label">Also comfortable with</div>
          <div className="skills-section__badges">
            {techBadges.map((t) => (
              <span key={t} className="skills-section__badge">{t}</span>
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
}