export default function NavBar() {
  return (
    <header className='sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex h-14 items-center'>
        <a href='/' className='flex items-center space-x-2'>
          <span className='font-bold'>Tovadock</span>
        </a>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <a
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#services'
          >
            Services
          </a>
          <a
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#about'
          >
            About
          </a>
          <a
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#contact'
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
