import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import Content from "./components/Content/Content";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Content title="Top 10 of 2022">
              <HomePage />
            </Content>
          }
        />

        <Route path="/library" element={<LibraryPage />} />
        <Route path="/mylibrary" element={<MyLibraryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
