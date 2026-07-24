import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LibraryProvider, useLibrary } from "./LibraryContext";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Work } from "./pages/Work";
import { Shop } from "./pages/Shop";
import { BookService } from "./pages/BookService";
import { Checkout } from "./pages/Checkout";
import { Reader } from "./pages/Reader";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Toast() {
  const { toast, clearToast } = useLibrary();
  if (!toast) return null;
  return (
    <div className="toast" role="status" onClick={clearToast}>
      {toast}
    </div>
  );
}

function AppShell() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/book" element={<BookService />} />
          <Route path="/checkout/:bookId" element={<Checkout />} />
          <Route path="/read/:bookId" element={<Reader />} />
        </Routes>
      </main>
      <Footer />
      <Toast />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LibraryProvider>
        <AppShell />
      </LibraryProvider>
    </BrowserRouter>
  );
}
