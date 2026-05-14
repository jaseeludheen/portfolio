import { useState } from "react";
import { projects, filters } from "../data/Portfoliodata";
import Section from "./Section";
import "./Projects.css";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  return (
    <section id="projects" className="projects">
      <Section>
        <div className="projects__header">
          <div>
            <div className="tag-badge">PORTFOLIO</div>
            <h2 className="projects__title">Selected Projects</h2>
          </div>

          <div className="projects__filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${
                  activeFilter === f ? "filter-btn--active" : "filter-btn--inactive"
                }`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="card"
              style={{ borderTop: `2px solid ${p.color}22` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTopColor = p.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTopColor = `${p.color}22`;
              }}
            >
              <div className="card__top">
                <div className="card__icon">{p.icon}</div>
                <span
                  className="pill"
                  style={{
                    background: `${p.color}18`,
                    color: p.color,
                    border: `1px solid ${p.color}30`,
                  }}
                >
                  {p.tag}
                </span>
              </div>

              <h3 className="card__title">{p.title}</h3>
              <p className="card__desc">{p.desc}</p>

              <div className="card__stack">
                {p.stack.map((s) => (
                  <span key={s} className="card__badge">
                    {s}
                  </span>
                ))}
              </div>


              <div className="card__footer">
                <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card__link"
                    style={{ color: p.color }}
                >
                    View on GitHub →
                </a>

                <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card__link"
                    style={{ color: p.color }}
                >
                    Live Demo →
                </a>
              </div>

              

            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}