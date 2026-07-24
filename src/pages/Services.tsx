import { Link } from "react-router-dom";
import { services } from "../data";
import { Reveal } from "../components/Reveal";

export function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>How we help authors and organisations publish well</h1>
          <p className="lead">
            From first draft to finished copies, each service is designed to keep quality
            high and the path forward simple.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={service.id}>
                <article className="service-row">
                  <span className="service-num">0{i + 1}</span>
                  <div>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.detail}</p>
                  <Link to="/book" className="btn btn-ghost">
                    Book this →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container cta-band">
          <div>
            <h2>Tell us about your project</h2>
            <p>
              Share your manuscript, brief, or deadline — we will recommend the right mix
              of services.
            </p>
          </div>
          <Link to="/book" className="btn btn-primary">
            Book a Service
          </Link>
        </div>
      </section>
    </>
  );
}
