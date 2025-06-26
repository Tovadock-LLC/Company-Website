import NavBar from "./components/NavBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "./App.css";
import { Link } from "react-router-dom";
import { AnimeTest } from "./AnimeTest";
import { WaterDropGrid } from "./WaterDropGrid";

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen '>
      <main className='flex-1'>
        <section
          className="w-full pb-100 bg-cover h-screen"
          style={{ backgroundImage: "url('/images/tovadock-background.webp')" }}
        >
          <NavBar />
          <AnimeTest />
          <WaterDropGrid />
          <div className='px-8 pt-20 md:px-6'>
            <div className='flex flex-col space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Tovadock
                </h1>
                <p className='max-w-[700px] text-white md:text-xl dark:text-gray-400'>
                  We deliver cutting-edge software solutions tailored to your
                  business needs. Let's transform your ideas into reality.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id='services'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-slate-500'
        >
          <div className='px-8 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12'>
              Our Services
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
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
          id='about'
          className='w-full py-12 md:py-24 lg:py-32 bg-[#2b53a7]'
        >
          <div className='px-8 md:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
              <div>
                <h2 className='text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4'>
                  About Us
                </h2>
                <p className='text-white dark:text-gray-400 mb-4'>
                  Tovadock was started in 2024 by two Army veterans, Jim
                  Knudstrup and Michael Smith. With over two decades of combined
                  experience in software engineering, we've helped numerous
                  clients achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id='contact'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <div className='px-8 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12'>
              Contact Us
            </h2>
            <p className='text-gray-500 dark:text-gray-400 mb-4 text-center'>
              Please contact us at{" "}
              <a href='mailto:tovadockllc@gmail.com'>tovadockllc@gmail.com</a>{" "}
              with any business inquiries.
            </p>
          </div>
        </section>
      </main>
      <footer className='w-full py-6 bg-gray-100 dark:bg-gray-800'>
        <div className='px-8 md:px-6'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
              © 2024 Tovadock. All rights reserved.
            </p>
            <nav className='flex gap-4 sm:gap-6'>
              <Link
                className='text-sm hover:underline underline-offset-4'
                to={"/terms"}
              >
                Terms of Service
              </Link>
              <Link
                className='text-sm hover:underline underline-offset-4'
                to={"/privacy-policy"}
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
