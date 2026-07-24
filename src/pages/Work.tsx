import { Link } from "react-router-dom";
import { pastWork } from "../data";
import { Reveal } from "../components/Reveal";

export function Work() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Past work</span>
          <h1>Selected titles and commissions</h1>
          <p className="lead">
            A look at books and publications we have produced for authors, schools, and
            organisations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="work-grid">
            {pastWork.map((work) => (
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
                    <span className="work-tag">
                      {work.type} · {work.year}
                    </span>
                    <h3>{work.title}</h3>
                    <p>{work.blurb}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-mist">
        <div className="container text-center" style={{ maxWidth: "36rem", marginInline: "auto" }}>
          <h2>Have a project like these?</h2>
          <p className="lead" style={{ margin: "1rem auto 1.5rem" }}>
            We would love to hear what you are writing or producing next.
          </p>
          <Link to="/book" className="btn btn-primary">
            Book a Service
          </Link>
        </div>
      </section>
    </>
  );
}
