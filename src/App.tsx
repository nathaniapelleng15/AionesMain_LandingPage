import React from "react";
import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Hero.tsx";
import { Services } from "./components/Services.tsx";
import { HowItWorks } from "./components/HowItWorks.tsx";
import { Security } from "./components/Security.tsx";
import { Contact } from "./components/Contact.tsx";
import { CTA } from "./components/CTA.tsx";
import { Footer } from "./components/Footer.tsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4a4566] selection:bg-[#dbffff] selection:text-[#2a1570]">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <Security />
        <Contact />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
