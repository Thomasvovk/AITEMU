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
        <Route
          path="/"
          element={
            <Content>
              <HomePage />
            </Content>
          }
        />

        <Route
          path="/library"
          element={
            <Content title="Library">
              <LibraryPage />
            </Content>
          }
        />
        <Route
          path="/favourite"
          element={
            <Content title="Favourites">
              <FavouritePage />
            </Content>
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
