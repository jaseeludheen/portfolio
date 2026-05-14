import { useState } from "react";
import Section from "./Section";
import "./Contact.css";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
  e.preventDefault();
  setSending(true);
  setError(false);

  try {
    const res = await fetch(import.meta.env.VITE_FORMSPREE_URL, {  
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSent(true);
    } else {
      setError(true);
    }
  } catch {
    setError(true);
  } finally {
    setSending(false);
  }
}

  return (
    <section id="contact" className="contact">
      <Section>
        <div className="contact__inner">
          <div className="tag-badge">GET IN TOUCH</div>
          <h2 className="contact__heading">
            Let's build something<br />
            <span className="contact__heading-accent">great together.</span>
          </h2>
          <p className="contact__sub">
            Available for full-time roles and freelance projects. Based in Dubai — remote-first, open to relocation.
          </p>

          {/* Quick contact pills */}
          <div className="contact__pills">
            <a
              href="mailto:jaseeludheenputhooli@gmail.com"
              className="social-link"
              style={{ width: "auto", padding: "0 16px", gap: 8, fontSize: 13, color: "#94a3b8", textDecoration: "none" }}
            >
              ✉ jaseeludheenputhooli@gmail.com
            </a>
            <a
              href="tel:+971528340366"
              className="social-link"
              style={{ width: "auto", padding: "0 16px", gap: 8, fontSize: 13, color: "#94a3b8", textDecoration: "none" }}
            >
              📞 +971 52 834 0366
            </a>
          </div>

          {/* Form / Success */}
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <p className="contact__success-title">Message sent!</p>
              <p className="contact__success-sub">I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-row">
                <input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <textarea
                rows={5}
                placeholder="Tell me about the project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button type="submit" className="btn-primary contact__submit" disabled={sending}>
                    {sending ? "Sending..." : "Send Message →"}
              </button>
              {error && (
                <p style={{ color: "#ef4444", fontSize: 14 }}>
                    Something went wrong. Please try again.
                </p>
               )}
            </form>
          )}
        </div>
      </Section>
    </section>
  );
}