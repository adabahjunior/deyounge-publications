import { useMemo, useState } from "react";
import type { FlipPage } from "../data";

type FlipBookProps = {
  title: string;
  author: string;
  cover: string;
  pages: readonly FlipPage[];
};

export function FlipBook({ title, author, cover, pages }: FlipBookProps) {
  const sheets = useMemo(() => {
    const list: { front: FlipPage | "cover" | "end"; back: FlipPage | "blank" | "end" }[] = [
      { front: "cover", back: pages[0] ?? "blank" },
    ];

    for (let i = 1; i < pages.length; i += 2) {
      list.push({
        front: pages[i],
        back: pages[i + 1] ?? "end",
      });
    }

    if (pages.length % 2 === 0) {
      list.push({ front: "end", back: "blank" });
    }

    return list;
  }, [pages]);

  const [flipped, setFlipped] = useState(0);
  const maxFlip = sheets.length;

  function prev() {
    setFlipped((n) => Math.max(0, n - 1));
  }

  function next() {
    setFlipped((n) => Math.min(maxFlip, n + 1));
  }

  return (
    <div className="flipbook-wrap">
      <div className="flipbook-stage" style={{ perspective: "2000px" }}>
        <div className="flipbook">
          {sheets.map((sheet, index) => {
            const isFlipped = index < flipped;
            return (
              <div
                key={index}
                className={`flip-sheet${isFlipped ? " flipped" : ""}`}
                style={{ zIndex: isFlipped ? index : sheets.length - index }}
              >
                <div className="flip-face flip-front">
                  {sheet.front === "cover" ? (
                    <div className="flip-cover">
                      <img src={cover} alt="" />
                      <div className="flip-cover-meta">
                        <strong>{title}</strong>
                        <span>{author}</span>
                      </div>
                    </div>
                  ) : sheet.front === "end" ? (
                    <div className="flip-page end-page">
                      <p className="script" style={{ fontSize: "2.5rem" }}>
                        Life
                      </p>
                      <p>Thank you for reading with Deyounge Publications.</p>
                    </div>
                  ) : (
                    <PageContent page={sheet.front} number={index === 0 ? 1 : index * 2} />
                  )}
                </div>
                <div className="flip-face flip-back">
                  {sheet.back === "blank" ? (
                    <div className="flip-page blank-page" />
                  ) : sheet.back === "end" ? (
                    <div className="flip-page end-page">
                      <p className="script" style={{ fontSize: "2.5rem" }}>
                        Life
                      </p>
                      <p>Thank you for reading with Deyounge Publications.</p>
                    </div>
                  ) : (
                    <PageContent
                      page={sheet.back}
                      number={index === 0 ? 2 : index * 2 + 1}
                    />
                  )}
                </div>
              </div>
            );
          })}
          <div className="flipbook-base" aria-hidden="true" />
        </div>
      </div>

      <div className="flipbook-controls">
        <button type="button" className="btn btn-outline" onClick={prev} disabled={flipped === 0}>
          ← Previous
        </button>
        <span className="flipbook-progress">
          Spread {Math.min(flipped + 1, maxFlip + 1)} / {maxFlip + 1}
        </span>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={next}
          disabled={flipped >= maxFlip}
        >
          Next →
        </button>
      </div>
      <p className="flipbook-hint">Demo flip book — turn the pages to read on-site.</p>
    </div>
  );
}

function PageContent({ page, number }: { page: FlipPage; number: number }) {
  return (
    <div className="flip-page">
      {page.title && <h3>{page.title}</h3>}
      <p>{page.body}</p>
      <span className="page-num">{number}</span>
    </div>
  );
}
