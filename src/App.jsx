import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";
import NewReleasesPage from "./pages/NewReleasesPage/NewReleasesPage";
import GamePage from "./pages/GamePage/GamePage";
// import Content from "./components/Content/Content";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/new-releases" element={<NewReleasesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
