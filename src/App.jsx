import { useEffect, useState } from "react";
import VantaBackground from "./VantaBackground.jsx";
import Dashboard from "./Dashboard.jsx";
import Icon from "./icons.jsx";
import { ShopifySection, FullStackSection } from "./DevShowcase.jsx";
import {
  profile, orbit, typed, about, services, skills, adsProcess, seoProcess, results, marquee, funnel,
  experience, projects, education, languages, why, faqs, creative,
} from "./data.js";

const links = ["about", "skills", "shopify", "fullstack", "analytics", "projects", "creative", "experience", "contact"];

function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(w.slice(0, text.length + 1));
        if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(w.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI((i + 1) % words.length); }
      }
    }, del ? 28 : 55);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return <span className="typed">{text}<i className="caret" /></span>;
}

function Process({ data }) {
  return (
    <article className="panel reveal">
      <h4>{data.title}</h4>
      <ol className="steps">
        {data.steps.map(([t, d], i) => <li key={t}><strong>{i + 1}. {t}.</strong> {d}</li>)}
      </ol>
      <p className="tracks-label">What I track</p>
      <ul className="chips">{data.tracks.map((t) => <li key={t}>{t}</li>)}</ul>
    </article>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = Object.fromEntries(new FormData(form));
    if (f.botcheck) return;
    const subject = `Portfolio enquiry: ${f.service}`;
    const body = `${f.message}\n\nName: ${f.name}\nEmail: ${f.email}\nService: ${f.service}`;
    if (!profile.formKey) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: profile.formKey, subject, name: f.name, email: f.email, message: body }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Could not send");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <form className="panel form reveal" onSubmit={onSubmit}>
      <div className="row">
        <label>Your name<input name="name" required autoComplete="name" /></label>
        <label>Your email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <label>What do you need?
        <select name="service" defaultValue={services[0].title}>
          {services.map((s) => <option key={s.title}>{s.title}</option>)}
          <option>Something else</option>
        </select>
      </label>
      <label>Tell me about your project
        <textarea name="message" rows="5" required placeholder="Your business, your goal and your budget range." />
      </label>
      <input type="text" name="botcheck" className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <button className="btn primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      <p className="note" role="status">
        {status === "sent" && "Thank you. Your message was sent and I will reply soon."}
        {status === "mailto" && "Your email app should open with the message ready to send."}
        {status === "error" && `Message not sent: ${error}. Please email ${profile.email} directly.`}
      </p>
    </form>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && (en.target.classList.add("in"), io.unobserve(en.target))),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    const onScroll = () => {
      const h = document.documentElement;
      h.style.setProperty("--progress", `${(h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100}%`);
    };
    const onMove = (e) => {
      const card = e.target.closest?.(".panel");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    onScroll();
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <>
      <VantaBackground />
      <div className="progress" aria-hidden="true" />

      <header className="nav">
        <a href="#home" className="brand" onClick={close}><img src="/logo.png" alt="Siham logo" /></a>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        <nav className={open ? "links show" : "links"}>
          {links.map((l) => <a key={l} href={`#${l}`} onClick={close}>{l === "fullstack" ? "Full stack" : l === "creative" ? "Design and video" : l[0].toUpperCase() + l.slice(1)}</a>)}
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <p className="hello a1">Hello, I am</p>
            <h1 className="a2">{profile.name}</h1>
            <ul className="roles a3">
              {profile.roles.map((r) => <li key={r.title}><Icon k={r.icon} />{r.title}</li>)}
            </ul>
            <p className="doing a4">I work on <Typewriter words={typed} /></p>
            <p className="lead a5">{profile.intro}</p>
            <div className="actions a6">
              <a className="btn primary" href="#contact">Hire me</a>
              <a className="btn" href={profile.cv} download={profile.cvName}>Download CV</a>
              <a className="btn" href="#creative">Design and video work</a>
            </div>
            <div className="socials a6">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}><Icon k={s.icon} /></a>
              ))}
            </div>
          </div>

          <div className="photo-wrap">
            <div className="ring" aria-hidden="true" />
            <div className="photo"><img src="/siham.png" alt="Portrait of Moudud Ahamed Siham" /></div>
            <div className="orbit" aria-hidden="true">
              {orbit.map((k, i) => (
                <div key={k} className="orb" style={{ "--a": `${(360 / orbit.length) * i}deg` }}><span><Icon k={k} /></span></div>
              ))}
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="Technologies and platforms">
          <div className="track">
            {[...marquee, ...marquee].map((m, i) => <span key={m.n + i}><Icon k={m.i} />{m.n}</span>)}
          </div>
        </div>

        <section id="about" className="section">
          <h3 className="reveal">About me</h3>
          <div className="panel prose reveal">{about.map((p) => <p key={p}>{p}</p>)}</div>
        </section>

        <section id="services" className="section">
          <h3 className="reveal">What I can do for you</h3>
          <div className="grid">
            {services.map((s, i) => (
              <article key={s.title} className="panel reveal" style={{ "--d": `${(i % 3) * 90}ms` }}>
                <span className="ico"><Icon k={s.icon} /></span>
                <h4>{s.title}</h4><p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h3 className="reveal">Skills</h3>
          <div className="grid two">
            {skills.map((g) => (
              <article key={g.group} className="panel reveal">
                <h4 className="gh"><span className="ico sm"><Icon k={g.icon} /></span>{g.group}</h4>
                <ul className="tiles">
                  {g.items.map((it, i) => (
                    <li key={it.n} style={{ "--i": i }}><Icon k={it.i} /><span>{it.n}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <ShopifySection />
        <FullStackSection />

        <section id="analytics" className="section">
          <h3 className="reveal">Marketing analytics</h3>
          <p className="intro reveal">Google Ads, SEO and leads in one view. This is how I report results to clients.</p>
          <div className="reveal"><Dashboard /></div>
        </section>

        <section id="growth" className="section">
          <h3 className="reveal">My Google Ads and SEO method</h3>
          <div className="grid two"><Process data={adsProcess} /><Process data={seoProcess} /></div>
          {results.length > 0 && (
            <>
              <h3 className="sub-h reveal">Results</h3>
              <div className="grid">
                {results.map((r) => (
                  <article key={r.title + r.metric} className="panel result reveal">
                    <p className="big">{r.value}</p><h4>{r.metric}</h4><p>{r.title}. {r.note}</p>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

        <section className="section">
          <h3 className="reveal">From stranger to customer</h3>
          <p className="intro reveal">A simple funnel I use to decide which channel to use at each step.</p>
          <div className="funnel">
            {funnel.map((f, i) => (
              <article key={f.stage} className="panel reveal" style={{ "--d": `${i * 120}ms` }}>
                <h4>{f.stage}</h4><p className="meta">{f.text}</p><p>{f.channels}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h3 className="reveal">Latest projects</h3>
          <div className="grid two">
            {projects.map((p) => (
              <article key={p.title} className="panel project reveal">
                <div className="shot"><img src={p.image} alt={`${p.title} website screenshot`} loading="lazy" /></div>
                <h4>{p.title}</h4><p>{p.text}</p>
                <ul className="stack-icons">{p.stack.map((k) => <li key={k}><Icon k={k} /></li>)}</ul>
                <a className="btn small" href={p.url} target="_blank" rel="noreferrer">View live site</a>
              </article>
            ))}
          </div>
        </section>

        <section id="creative" className="section creative">
          <h3 className="reveal"><span className="ico sm"><Icon k="video" /></span>Design and video portfolio</h3>
          <p className="intro reveal">{creative.intro}</p>

          <div className="grid">
            {creative.categories.map((c, i) => (
              <article key={c.title} className="panel reveal" style={{ "--d": `${i * 90}ms` }}>
                <span className="ico"><Icon k={c.icon} /></span>
                <h4>{c.title}</h4><p>{c.text}</p>
                <ul className="chips">{c.tools.map((t) => <li key={t}>{t}</li>)}</ul>
              </article>
            ))}
          </div>

          <div className="portfolio-links reveal">
            {creative.links.map((l) => {
              const has = Boolean(l.url);
              const href = has ? l.url : `mailto:${profile.email}?subject=${encodeURIComponent(l.label + " request")}`;
              return (
                <a key={l.label} className={has ? "btn primary big" : "btn big"} href={href} {...(has ? { target: "_blank", rel: "noreferrer" } : {})}>
                  <Icon k={l.icon} /> {has ? l.label : `Request ${l.label.toLowerCase()}`}
                </a>
              );
            })}
          </div>

          {creative.works.length > 0 && (
            <div className="works">
              {creative.works.map((w, i) => (
                <a key={w.title} href={w.url} target="_blank" rel="noreferrer" className="work reveal" style={{ "--d": `${(i % 3) * 90}ms` }}>
                  <img src={w.image} alt={w.title} loading="lazy" />
                  <span className="badge-type">{w.type}</span>
                  {w.type === "Video" && <span className="play"><Icon k="video" /></span>}
                  <strong>{w.title}</strong>
                </a>
              ))}
            </div>
          )}
        </section>

        <section id="experience" className="section">
          <h3 className="reveal">Experience and education</h3>
          <div className="grid two">
            <div className="stack">
              {experience.map((e) => (
                <article key={e.role + e.company} className="panel reveal">
                  <h4>{e.role}</h4><p className="meta">{e.company}, {e.period}</p><p>{e.text}</p>
                </article>
              ))}
            </div>
            <div className="stack">
              {education.map((e) => (
                <article key={e.title} className="panel reveal">
                  <h4>{e.title}</h4><p className="meta">{e.place}</p><p>{e.note}</p>
                </article>
              ))}
              <article className="panel reveal"><h4>Languages</h4><p>{languages}</p></article>
            </div>
          </div>
        </section>

        <section className="section">
          <h3 className="reveal">Why work with me</h3>
          <div className="grid two">
            {why.map((w, i) => (
              <article key={w.title} className="panel reveal" style={{ "--d": `${i * 80}ms` }}>
                <h4>{w.title}</h4><p>{w.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section">
          <h3 className="reveal">Questions clients ask</h3>
          <div className="faq reveal">
            {faqs.map((f) => <details key={f.q} className="panel"><summary>{f.q}</summary><p>{f.a}</p></details>)}
          </div>
        </section>

        <section id="contact" className="section">
          <h3 className="reveal">Contact me</h3>
          <div className="grid contact-grid">
            <div className="reveal">
              <p className="lead">Tell me about your brand and your goal. I will reply by email or phone.</p>
              <ul className="info">
                <li><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
                <li><span>Phone</span><a href={`tel:${profile.phoneLink}`}>{profile.phone}</a></li>
                <li><span>Location</span>{profile.location}</li>
              </ul>
              <div className="socials">
                {profile.socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}><Icon k={s.icon} /></a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
