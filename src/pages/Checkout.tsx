import { useEffect, useState, type FormEvent } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getBook } from "../data";
import { useLibrary } from "../LibraryContext";

export function Checkout() {
  const { bookId } = useParams();
  const book = bookId ? getBook(bookId) : undefined;
  const { isUnlocked, unlockBook, showToast } = useLibrary();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [step, setStep] = useState<"form" | "processing" | "done">("form");

  useEffect(() => {
    if (book && isUnlocked(book.id)) {
      navigate(`/read/${book.id}`, { replace: true });
    }
  }, [book, isUnlocked, navigate]);

  if (!book) {
    return <Navigate to="/shop" replace />;
  }

  function handlePay(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setProcessing(true);
    setStep("processing");

    window.setTimeout(() => {
      unlockBook(book!.id);
      setStep("done");
      showToast(`MoMo payment successful — “${book!.title}” unlocked.`);
      window.setTimeout(() => {
        navigate(`/read/${book!.id}`);
      }, 900);
    }, 1600);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Demo checkout</span>
          <h1>Pay with MoMo</h1>
          <p className="lead">
            This is a demo Mobile Money flow. No real charges are made. After payment,
            your flip book unlocks for on-site reading.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container checkout-layout">
          <aside className="checkout-summary">
            <img src={book.cover} alt="" className="checkout-cover" />
            <div>
              <h2>{book.title}</h2>
              <p className="author">{book.author}</p>
              <p className="price">
                {book.currency} {book.price.toFixed(2)}
              </p>
              <p className="checkout-note">{book.description}</p>
              <Link to="/shop" className="btn btn-ghost">
                ← Back to shop
              </Link>
            </div>
          </aside>

          <div className="checkout-panel">
            {step === "processing" || processing ? (
              <div className="payment-status" role="status">
                <div className="payment-spinner" aria-hidden="true" />
                <strong>Waiting for MoMo approval…</strong>
                <p>Confirm the prompt on your phone to complete payment.</p>
              </div>
            ) : step === "done" ? (
              <div className="form-success" role="status">
                <strong>MoMo payment successful</strong>
                Opening your flip book…
              </div>
            ) : (
              <form className="form" onSubmit={handlePay}>
                <p className="demo-badge">Demo MoMo — use any Ghana number</p>

                <div className="field">
                  <label htmlFor="momoNetwork">Mobile Money network</label>
                  <select id="momoNetwork" name="momoNetwork" required defaultValue="mtn">
                    <option value="mtn">MTN MoMo</option>
                    <option value="vodafone">Telecel Cash</option>
                    <option value="airteltigo">AirtelTigo Money</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="momoName">Account name</label>
                  <input
                    id="momoName"
                    name="momoName"
                    required
                    placeholder="Ada Owusu"
                    autoComplete="name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="momoNumber">MoMo number</label>
                  <input
                    id="momoNumber"
                    name="momoNumber"
                    required
                    inputMode="tel"
                    placeholder="024 000 0000"
                    autoComplete="tel"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Receipt email (optional)</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Pay {book.currency} {book.price.toFixed(2)} with MoMo
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
