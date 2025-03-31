const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <section className="h-[100svh] w-full overflow-hidden pt-[var(--navbar-height)]">
        <div className="relative flex h-full items-center justify-center bg-[url('/footerbg-tiny.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Footer Content */}
          <div className="absolute top-0 w-full px-4 py-10 md:px-8 md:py-20">
            <div className="flex flex-col gap-10 md:flex-row md:justify-between">
              {/* Navigation Links (New Version) */}
              <div className="font-NHD">
                <h3 className="mb-2 font-semibold tracking-wider uppercase">
                  Navigation
                </h3>
                <div className="space-y-2 text-sm md:text-base">
                  <a href="/" className="block hover:text-lime-200">
                    Home
                  </a>
                  <a href="/about" className="block hover:text-lime-200">
                    About
                  </a>
                  <a href="/contact" className="block hover:text-lime-200">
                    Contact
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="font-NHD">
                <h3 className="mb-2 font-semibold tracking-wider uppercase">
                  Address
                </h3>
                <p className="max-w-xs text-sm md:text-base">
                  Eden Park & Garden
                  <br />
                  123 Paradise Street
                  <br />
                  Abuja, Nigeria
                  <br />
                  <span className="mt-2 block">Phone: +234 123 456 7890</span>
                  <span className="block">Email: info@edenpark.com</span>
                </p>
              </div>

              {/* Opening Hours */}
              <div className="font-NHD">
                <h3 className="mb-2 font-semibold tracking-wider uppercase">
                  Opening Hours
                </h3>
                <div className="space-y-2 text-sm md:text-base">
                  <p>Monday - Friday: 10am - 10pm</p>
                  <p>Saturday: 11am - 11pm</p>
                  <p>Sunday: 11am - 9pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo SVG */}
          <div className="absolute bottom-0 left-1/2 w-[85vw] -translate-x-1/2 md:w-[65vw]">
            <img src="/logo.svg" alt="Logo" className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* Navigation Links (Previous Version - Commented Out) */}
      {/* 
      <section className="h-[100svh] w-full overflow-hidden pt-[var(--navbar-height)]">
        <div className="relative flex h-full items-center justify-center bg-[url('/footerbg-tiny.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute top-0 w-full px-4 py-10 md:px-8 md:py-20">
            <div className="flex flex-col gap-10 md:flex-row md:justify-between">
              <div className="font-NHD flex w-full flex-col space-y-4 text-2xl md:w-1/3 md:text-3xl">
                <a href="/" className="w-full border-b-1 py-2 hover:text-lime-200">
                  Home
                </a>
                <a href="/about" className="border-b-1 py-2 hover:text-lime-200">
                  About
                </a>
                <a href="/contact" className="border-b-1 py-2 hover:text-lime-200">
                  Contact
                </a>
                <a href="/menu" className="border-b-1 py-2 hover:text-lime-200">
                  Menu
                </a>
              </div>

              <div className="font-NHD">
                <h3 className="mb-2 font-semibold tracking-wider uppercase">
                  Address
                </h3>
                <p className="max-w-xs text-sm md:text-base">
                  Eden Park & Garden
                  <br />
                  123 Paradise Street
                  <br />
                  Abuja, Nigeria
                  <br />
                  <span className="mt-2 block">Phone: +234 123 456 7890</span>
                  <span className="block">Email: info@edenpark.com</span>
                </p>
              </div>

              <div className="font-NHD">
                <h3 className="mb-2 font-semibold tracking-wider uppercase">
                  Opening Hours
                </h3>
                <div className="space-y-2 text-sm md:text-base">
                  <p>Monday - Friday: 10am - 10pm</p>
                  <p>Saturday: 11am - 11pm</p>
                  <p>Sunday: 11am - 9pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 w-[85vw] -translate-x-1/2 md:w-[65vw]">
            <img src="/logo.svg" alt="Logo" className="h-auto w-full" />
          </div>
        </div>
      </section> 
      */}
    </footer>
  );
};

export default Footer;
