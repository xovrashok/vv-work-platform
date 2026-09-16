import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import PartnersPage from "./pages/PartnersPage";
import PartnerPage from "./pages/PartnerPage";
import ContactsPage from "./pages/ContactsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="partners/:slug" element={<PartnerPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
