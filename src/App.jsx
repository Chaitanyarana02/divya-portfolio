import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./pages/Layout";
import MusicVideo from "./components/MusicVideo";
import MixMedia from "./components/MixMedia";
import Experimental from "./components/Experimental";
import FilmPhotography from "./components/FilmPhotography";
import ScrollToTop from "./components/ui-components/ScrollToTop";
import Function from "./components/Function";

const Home = lazy(() => import("./components/Home"));

export default function App() {
  return (
    <Suspense fallback={<div></div>}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/music-video" element={<MusicVideo />} />
          <Route path="/mix-media" element={<MixMedia />} />
          <Route path="/experimental" element={<Experimental />} />
          <Route path="/film-photography" element={<FilmPhotography />} />
          <Route path="/function" element={<Function />} />
        </Route>
        
      </Routes>
    </Suspense>
  );
}
