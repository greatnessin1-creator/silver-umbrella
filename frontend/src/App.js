import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PromoBar } from "./components/landing/PromoBar";
import { Hero } from "./components/landing/Hero";
import { Mission } from "./components/landing/Mission";
import { FeaturedProducts } from "./components/landing/FeaturedProducts";
import { Benefits } from "./components/landing/Benefits";
import { SupportSection } from "./components/landing/SupportSection";
import { Testimonials } from "./components/landing/Testimonials";
import { BlogHighlights } from "./components/landing/BlogHighlights";
import { ContactForm } from "./components/landing/ContactForm";
import { Footer } from "./components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <PromoBar />
      <Hero />
      <Mission />
      <FeaturedProducts />
      <Benefits />
      <SupportSection />
      <Testimonials />
      <BlogHighlights />
      <ContactForm />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
