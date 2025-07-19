import { Link } from "react-router-dom";

import { NavBar } from "@/components/NavBar";
import { HeroBanner } from "@/elements/hero/HeroBanner";
import { Services } from "@/elements/Services";
import { About } from "@/elements/About";
import { Contact } from "@/Contact";
import { ContentWrapper } from "@/components/helpers/ContentWrapper";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="w-full flex-1">
        <NavBar />
        <section id="hero-banner" className="w-full xl:h-[94vh]">
          <HeroBanner />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="bg-primary w-full py-6">
        <ContentWrapper>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-white">
              © 2024 Tovadock. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                className="text-sm text-white underline-offset-4 hover:underline"
                to={"/terms"}
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm text-white underline-offset-4 hover:underline"
                to={"/privacy-policy"}
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </ContentWrapper>
      </footer>
    </div>
  );
}
