import logo from "../../src/images/tovadock-icon-white-nb.png";

export default function NavBar() {
  return (
    <header className='px-8 top-0 z-50 w-full bg-white/0'>
      <div className='flex h-14 items-center'>
        <a href='/' className='flex items-center space-x-2'>
          <span className='font-bold text-white'>
            <img src={logo} width={50} height={50} />
          </span>
        </a>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <a
            className='text-base text-white font-medium hover:underline underline-offset-4'
            href='#services'
          >
            Services
          </a>
          <a
            className='text-base text-white font-medium hover:underline underline-offset-4'
            href='#about'
          >
            About
          </a>
          <a
            className='text-base text-white font-medium hover:underline underline-offset-4'
            href='#contact'
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
