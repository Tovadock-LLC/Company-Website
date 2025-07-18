import { Link } from "react-router-dom";

import { NavBar } from "@/components/NavBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroBanner } from "@/elements/hero/HeroBanner";
import { Services } from "@/elements/Services";
import { About } from "@/elements/About";
import { Contact } from "@/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <main className="flex-1">
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
        <footer className="w-full py-6 dark:bg-gray-800">
          <div className="px-8 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                © 2024 Tovadock. All rights reserved.
              </p>
              <nav className="flex gap-4 sm:gap-6">
                <Link
                  className="text-sm underline-offset-4 hover:underline"
                  to={"/terms"}
                >
                  Terms of Service
                </Link>
                <Link
                  className="text-sm underline-offset-4 hover:underline"
                  to={"/privacy-policy"}
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
