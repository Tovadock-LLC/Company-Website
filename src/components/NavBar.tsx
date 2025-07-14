import logo from "@/images/tovadock-icon-white-nb.png";
import { ContentWrapper } from "@/components/helpers/ContentWrapper";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-sky-950 px-8">
      <ContentWrapper>
        <div className="flex h-14 items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-white">
              <img src={logo} width={50} height={50} />
            </span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-base font-medium text-white underline-offset-4 hover:underline"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-base font-medium text-white underline-offset-4 hover:underline"
              href="#about"
            >
              About
            </a>
            <a
              className="text-base font-medium text-white underline-offset-4 hover:underline"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </ContentWrapper>
    </header>
  );
}
