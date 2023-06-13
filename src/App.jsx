import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import Content from "./components/Content/Content";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/library" element={<LibraryPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
