import { useState, type FormEvent } from "react";
import { company, services } from "../data";
import { Reveal } from "../components/Reveal";

export function BookService() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Book a service</span>
          <h1>Let’s start your next publication</h1>
          <p className="lead">
            Tell us what you need — publishing, editing, design, or print — and we will
            follow up from Tarkwa.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container booking-layout">
          <Reveal>
            <aside className="booking-aside">
              <h2>How booking works</h2>
              <p>
                Send a short brief with your preferred service and timeline. Our team
                reviews your request and replies with next steps, pricing guidance, and
                availability.
              </p>
              <dl className="contact-details">
                <div>
                  <dt>Location</dt>
                  <dd>{company.location}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>{company.phone}</dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>{company.hours}</dd>
                </div>
              </dl>
            </aside>
          </Reveal>

          <Reveal>
            {submitted ? (
              <div className="form-success" role="status">
                <strong>Request received</strong>
                Thank you. We will get back to you shortly to confirm details and next
                steps. For urgent projects, email us at {company.email}.
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-row two">
                  <div className="field">
                    <label htmlFor="name">Full name</label>
                    <input id="name" name="name" required autoComplete="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-row two">
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" />
                  </div>
                  <div className="field">
                    <label htmlFor="service">Service</label>
                    <select id="service" name="service" required defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="timeline">Preferred timeline</label>
                  <select id="timeline" name="timeline" defaultValue="flexible">
                    <option value="urgent">Within 2 weeks</option>
                    <option value="month">Within a month</option>
                    <option value="quarter">1–3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Genre, page count, audience, or anything we should know…"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit booking request
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
