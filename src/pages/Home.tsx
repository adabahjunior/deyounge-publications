import { Link } from "react-router-dom";
import { pastWork, services } from "../data";
import { Reveal } from "../components/Reveal";

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container-wide hero-inner">
          <div className="hero-copy">
            <div className="hero-brand">
              <img src="/logo.png" alt="Deyounge Publications Limited logo" />
              <div className="hero-brand-label">
                <strong>Deyounge Publications</strong>
                <span>Limited · Tarkwa, Ghana</span>
              </div>
            </div>
            <h1>
              Real Books for <span className="script">Life</span>
            </h1>
            <p className="lead">
              We publish, design, and print work that lasts — for authors, schools, and
              organisations across Ghana.
            </p>
            <div className="btn-group">
              <Link to="/book" className="btn btn-primary">
                Book a Service
              </Link>
              <Link to="/shop" className="btn btn-outline">
                Buy Books
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-plane">
              <div className="hero-orbit" />
              <div className="hero-visual-content">
                <p>From manuscript to bookshelf, crafted in Tarkwa.</p>
                <span>Publishing · Editing · Print</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">What we do</span>
              <h2>Publishing services built around your story</h2>
              <p>
                Whether you are finishing a first manuscript or producing materials for a
                school or organisation, we keep the process clear and the craft high.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {services.slice(0, 4).map((service, i) => (
              <Reveal key={service.id}>
                <div className="service-row">
                  <span className="service-num">0{i + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <Link to="/services" className="btn btn-ghost">
                    Learn more →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-2">
            <Link to="/services" className="btn btn-secondary">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-mist">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Past work</span>
              <h2>Books and projects we are proud of</h2>
              <p>
                A selection of titles and commissions that reflect our range — literary,
                educational, and institutional.
              </p>
            </div>
          </Reveal>

          <div className="work-grid">
            {pastWork.slice(0, 3).map((work) => (
              <Reveal key={work.id}>
                <article className="work-item">
                  <div className="work-cover-frame">
                    <img
                      src={work.cover}
                      alt={`Cover of ${work.title}`}
                      className="work-cover-img"
                    />
                  </div>
                  <div className="work-meta">
                    <span className="work-tag">{work.type}</span>
                    <h3>{work.title}</h3>
                    <p>{work.blurb}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-2">
            <Link to="/work" className="btn btn-outline">
              See more past work
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-strip">
          <Reveal>
            <div>
              <span className="eyebrow">Based in Tarkwa</span>
              <h2>A publishing house rooted in the Western Region</h2>
              <p>
                Deyounge Publications Limited partners with writers, educators, churches,
                and businesses to turn ideas into books people keep. From our base in
                Tarkwa, we serve clients across Ghana with careful editing, thoughtful
                design, and dependable print.
              </p>
              <div className="btn-group mt-2">
                <Link to="/book" className="btn btn-primary">
                  Start a project
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <blockquote className="about-highlight">
              <p>
                “Every title we touch should feel worthy of the reader’s time — clear,
                durable, and true to its purpose.”
              </p>
              <span>— Deyounge Publications</span>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container cta-band">
          <Reveal>
            <div>
              <h2>Ready to publish — or pick up a book?</h2>
              <p>
                Book a service for your next project, or browse titles available from our
                catalogue.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="btn-group">
              <Link to="/book" className="btn btn-primary">
                Book a Service
              </Link>
              <Link to="/shop" className="btn btn-outline" style={{ borderColor: "white", color: "white" }}>
                Shop Books
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
