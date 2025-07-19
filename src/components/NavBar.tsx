import logo from "@/images/tovadock-icon-white-nb.png";
import { ContentWrapper } from "@/components/helpers/ContentWrapper";

import { TDLogo } from "@/images/icons";

export const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white px-8 shadow-2xl">
      <ContentWrapper>
        <div className="flex h-14 items-center">
          <a href="/" className="flex items-center space-x-2">
            <TDLogo className="fill-primary size-10 pt-1" />
            <div className="text-primary text-4xl font-bold tracking-tighter">
              Tovadock
            </div>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-primary text-base font-medium underline-offset-4 hover:underline"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-primary text-base font-medium underline-offset-4 hover:underline"
              href="#about"
            >
              About
            </a>
            <a
              className="text-primary text-base font-medium underline-offset-4 hover:underline"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </ContentWrapper>
    </header>
  );
};
