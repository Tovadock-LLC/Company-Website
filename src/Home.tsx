import NavBar from "./components/NavBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { AnimeTest } from "./AnimeTest";
import { WaterDropGrid } from "./WaterDropGrid";
import { HeroBanner } from "@/HeroBanner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900">
      {/* <WaterDropGrid /> */}
      <div className="xl:w-7xl">
        <main className="flex-1">
          <section
            className="h-screen w-full bg-cover pb-100"
            // style={{ backgroundImage: "url('/images/tovadock-background.webp')" }}
          >
            <NavBar />
            <HeroBanner />
            {/* <AnimeTest /> */}
            {/* <WaterDropGrid /> */}
            {/* <div className="px-8 pt-20 md:px-6">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Tovadock
                </h1>
                <p className="max-w-[700px] text-white md:text-xl dark:text-gray-400">
                  We deliver cutting-edge software solutions tailored to your
                  business needs. Let's transform your ideas into reality.
                </p>
              </div>
            </div>
          </div> */}
          </section>
          <section
            id="services"
            className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-slate-500"
          >
            <div className="px-8 md:px-6">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Contracting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Whether it's government or private contracts, we have you
                      covered.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Web Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Custom web applications built with the latest technologies
                      to meet your specific requirements.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Mobile App Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Native and cross-platform mobile applications for iOS and
                      Android devices.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section
            id="about"
            className="w-full bg-[#2b53a7] py-12 md:py-24 lg:py-32"
          >
            <div className="px-8 md:px-6">
              <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                    About Us
                  </h2>
                  <p className="mb-4 text-white dark:text-gray-400">
                    Tovadock was started in 2024 by two Army veterans, Jim
                    Knudstrup and Michael Smith. With over two decades of
                    combined experience in software engineering, we've helped
                    numerous clients achieve their goals.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="contact"
            className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800"
          >
            <div className="px-8 md:px-6">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h2>
              <p className="mb-4 text-center text-gray-500 dark:text-gray-400">
                Please contact us at{" "}
                <a href="mailto:tovadockllc@gmail.com">tovadockllc@gmail.com</a>{" "}
                with any business inquiries.
              </p>
            </div>
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
