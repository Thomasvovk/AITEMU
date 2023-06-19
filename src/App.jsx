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
import TopMetacritic from "./pages/TopMetacriticPage/TopMetacriticPage";
import Platforms from "./pages/PlatformsPage/PlatformsPage";
import Publishers from "./pages/PublishersPage/PublishersPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";

import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc41ojshQEP581fdmt-xymueGGGJoo5UU",
  authDomain: "aitemu-a54fc.firebaseapp.com",
  projectId: "aitemu-a54fc",
  storageBucket: "aitemu-a54fc.appspot.com",
  messagingSenderId: "715989601495",
  appId: "1:715989601495:web:ee22e4e8b19bd20f49b492",
  measurementId: "G-K6PGFYENX8",
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/new-releases" element={<NewReleasesPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="/top-metacritic" element={<TopMetacritic />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
