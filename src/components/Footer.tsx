import { Link } from "react-router-dom";
import { company } from "../data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/logo.png" alt="" width={64} height={64} />
          <div>
            <strong>{company.name}</strong>
            <p>
              Publishing with care from {company.location}.{" "}
              <span className="script" style={{ fontSize: "1.4rem" }}>
                Life
              </span>{" "}
              on every page.
            </p>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/services">Services</Link>
          <Link to="/work">Past Work</Link>
          <Link to="/shop">Buy Books</Link>
          <Link to="/book">Book a Service</Link>
        </div>

        <div className="footer-col">
          <h4>Visit & Contact</h4>
          <p>{company.location}</p>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>{company.phone}</p>
          <p>{company.hours}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        <p>
          Real Books for <span className="script">Life</span>
        </p>
      </div>
    </footer>
  );
}
