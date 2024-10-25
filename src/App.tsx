import NavBar from "./components/NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./App.css";

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Tovadock
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
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
          <div className='px-4 md:px-6'>
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
        <section id='about' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='px-4 md:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
              <div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4'>
                  About Us
                </h2>
                <p className='text-gray-500 dark:text-gray-400 mb-4'>
                  TechSolutions is a team of passionate software developers
                  dedicated to creating innovative solutions for businesses of
                  all sizes. With over a decade of experience, we've helped
                  numerous clients achieve their digital transformation goals.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Our expertise spans across various industries, and we pride
                  ourselves on delivering high-quality, scalable, and
                  maintainable software solutions.
                </p>
              </div>
              <div className='flex justify-center'>
                <img
                  alt='Team at work'
                  className='aspect-video overflow-hidden rounded-xl object-cover object-center'
                  height='500'
                  src='/placeholder.svg?height=500&width=800'
                  width='800'
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id='contact'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <div className='px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12'>
              Contact Us
            </h2>
          </div>
        </section>
      </main>
      <footer className='w-full py-6 bg-gray-100 dark:bg-gray-800'>
        <div className='px-4 md:px-6'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <div className='flex items-center space-x-2'>
              <span className='font-bold'>Tovadock</span>
            </div>
            <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
              © 2023 Tovadock. All rights reserved.
            </p>
            <nav className='flex gap-4 sm:gap-6'>
              <a
                className='text-sm hover:underline underline-offset-4'
                href='#'
              >
                Terms of Service
              </a>
              <a
                className='text-sm hover:underline underline-offset-4'
                href='#'
              >
                Privacy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
