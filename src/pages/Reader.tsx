import { Link, Navigate, useParams } from "react-router-dom";
import { getBook } from "../data";
import { useLibrary } from "../LibraryContext";
import { FlipBook } from "../components/FlipBook";

export function Reader() {
  const { bookId } = useParams();
  const book = bookId ? getBook(bookId) : undefined;
  const { isUnlocked } = useLibrary();

  if (!book) {
    return <Navigate to="/shop" replace />;
  }

  if (!isUnlocked(book.id)) {
    return (
      <section className="section">
        <div className="container text-center" style={{ maxWidth: "32rem" }}>
          <span className="eyebrow">Locked</span>
          <h1 style={{ margin: "0.75rem 0 1rem" }}>Purchase to unlock this flip book</h1>
          <p className="lead" style={{ margin: "0 auto 1.5rem" }}>
            “{book.title}” is available after demo checkout. Complete payment to read
            on-site.
          </p>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <Link to={`/checkout/${book.id}`} className="btn btn-primary">
              Buy & unlock
            </Link>
            <Link to="/shop" className="btn btn-outline">
              Back to shop
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Your library</span>
          <h1>{book.title}</h1>
          <p className="lead">
            Unlocked flip book by {book.author}. Use the controls below to turn pages.
          </p>
        </div>
      </section>

      <section className="section section-mist">
        <div className="container">
          <FlipBook
            title={book.title}
            author={book.author}
            cover={book.cover}
            pages={book.pages}
          />
          <div className="mt-2 text-center">
            <Link to="/shop" className="btn btn-outline">
              Back to shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
