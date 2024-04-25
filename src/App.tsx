import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Reglage from "./pages/Reglage";
import Communaute from "./pages/Communaute";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="Profil" element={<Profil />} />
          <Route path="Reglage" element={<Reglage />} />
          <Route path="Communaute" element={<Communaute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
