/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DeathSanitization from "./pages/services/DeathSanitization";
import TraumaSanitization from "./pages/services/TraumaSanitization";
import OdorSanitization from "./pages/services/OdorSanitization";
import ForebyggandeHygienbehandling from "./pages/services/ForebyggandeHygienbehandling";
import TechnicalCleaningB2B from "./pages/services/TechnicalCleaningB2B";
import HardToReachDisinfection from "./pages/services/HardToReachDisinfection";
import Socialsanering from "./pages/services/Socialsanering";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import PersonligaTillhörigheter from "./pages/Personligatillhörigheter";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/tjanster" element={<Services />} />
        <Route path="/tjanster/sanering-dodstall" element={<DeathSanitization />} />
        <Route path="/tjanster/traumasanering" element={<TraumaSanitization />} />
        <Route path="/tjanster/luktsanering" element={<OdorSanitization />} />
        <Route
          path="/tjanster/forebyggande-hygienbehandling"
          element={<ForebyggandeHygienbehandling />}
        />
        <Route path="/tjanster/technical-cleaning-b2b" element={<TechnicalCleaningB2B />} />
        <Route path="/tjanster/svaratkomliga-ytor" element={<HardToReachDisinfection />} />
        <Route path="/tjanster/socialsanering" element={<Socialsanering />} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/hantering-av-personliga-tillhorigeter" element={<PersonligaTillhörigheter />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
        <Route path="/allmanna-villkor" element={<TermsAndConditions />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}
