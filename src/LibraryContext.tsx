import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

const STORAGE_KEY = "dpn-unlocked-books";

type LibraryContextValue = {
  unlockedIds: string[];
  isUnlocked: (bookId: string) => boolean;
  unlockBook: (bookId: string) => void;
  toast: string | null;
  showToast: (message: string) => void;
  clearToast: () => void;
};

const LibraryContext = createContext<LibraryContextValue | null>(null);

function loadUnlocked(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    setUnlockedIds(loadUnlocked());
  }, []);

  const clearToast = useCallback(() => setToast(null), []);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3200);
  }, []);

  const isUnlocked = useCallback(
    (bookId: string) => unlockedIds.includes(bookId),
    [unlockedIds],
  );

  const unlockBook = useCallback((bookId: string) => {
    setUnlockedIds((prev) => {
      if (prev.includes(bookId)) return prev;
      const next = [...prev, bookId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return (
    <LibraryContext.Provider
      value={{ unlockedIds, isUnlocked, unlockBook, toast, showToast, clearToast }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const ctx = useContext(LibraryContext);
  if (!ctx) throw new Error("useLibrary must be used within LibraryProvider");
  return ctx;
}
