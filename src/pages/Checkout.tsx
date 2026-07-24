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
      showToast(`Payment successful — “${book!.title}” unlocked.`);
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
          <h1>Complete your purchase</h1>
          <p className="lead">
            This is a demo payment flow. No real charges are made. After “payment,” your
            flip book unlocks for on-site reading.
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
                <strong>Processing demo payment…</strong>
                <p>Confirming your order and unlocking the flip book.</p>
              </div>
            ) : step === "done" ? (
              <div className="form-success" role="status">
                <strong>Payment successful</strong>
                Opening your flip book…
              </div>
            ) : (
              <form className="form" onSubmit={handlePay}>
                <p className="demo-badge">Demo mode — use any card details</p>

                <div className="field">
                  <label htmlFor="cardName">Name on card</label>
                  <input
                    id="cardName"
                    name="cardName"
                    required
                    placeholder="Ada Owusu"
                    autoComplete="cc-name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="cardNumber">Card number</label>
                  <input
                    id="cardNumber"
                    name="cardNumber"
                    required
                    inputMode="numeric"
                    placeholder="4242 4242 4242 4242"
                    autoComplete="cc-number"
                  />
                </div>

                <div className="form-row two">
                  <div className="field">
                    <label htmlFor="expiry">Expiry</label>
                    <input
                      id="expiry"
                      name="expiry"
                      required
                      placeholder="MM/YY"
                      autoComplete="cc-exp"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      id="cvc"
                      name="cvc"
                      required
                      inputMode="numeric"
                      placeholder="123"
                      autoComplete="cc-csc"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email">Receipt email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Pay {book.currency} {book.price.toFixed(2)}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
