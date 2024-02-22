import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Reglage from "./pages/Reglage";
import Communaute from "./pages/Communaute";
import Layout from "./components/Layout";
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Profil" element={<Profil />} />
          <Route path="Reglage" element={<Reglage />} />
          <Route path="Communaute" element={<Communaute />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
