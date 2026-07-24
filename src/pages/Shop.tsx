import { Link } from "react-router-dom";
import { books } from "../data";
import { Reveal } from "../components/Reveal";
import { useLibrary } from "../LibraryContext";

export function Shop() {
  const { isUnlocked } = useLibrary();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Shop</span>
          <h1>Books from our catalogue</h1>
          <p className="lead">
            Buy a title with our demo checkout. After payment, the flip book unlocks so
            you can read it on this site.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="shop-grid">
            {books.map((book) => {
              const unlocked = isUnlocked(book.id);
              return (
                <Reveal key={book.id}>
                  <article className="book-item">
                    <Link to={unlocked ? `/read/${book.id}` : `/checkout/${book.id}`} className="book-cover-link">
                      <img
                        src={book.cover}
                        alt={`Cover of ${book.title}`}
                        className="book-cover-img"
                      />
                      {unlocked && <span className="unlocked-badge">Unlocked</span>}
                    </Link>
                    <div className="book-info">
                      <h3>{book.title}</h3>
                      <p className="author">{book.author}</p>
                      <p
                        style={{
                          color: "var(--muted)",
                          fontSize: "0.92rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {book.description}
                      </p>
                      <p className="price">
                        {book.currency} {book.price.toFixed(2)}
                      </p>
                      <div className="book-actions">
                        {unlocked ? (
                          <Link to={`/read/${book.id}`} className="btn btn-secondary">
                            Read flip book
                          </Link>
                        ) : (
                          <Link to={`/checkout/${book.id}`} className="btn btn-primary">
                            Buy book
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
