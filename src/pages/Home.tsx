import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HorizontalScrollCards2 from "../components/ScrollCards2";
import NightHome from "../components/NightHome";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const scaleImgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Existing clip-path animations
    const images = gsap.utils.toArray<HTMLImageElement>(
      ".service-image:not(#scaleimg .service-image)",
    );

    images.forEach((image) => {
      gsap.set(image, {
        clipPath: "inset(0 100% 100% 0)",
      });

      gsap.to(image, {
        clipPath: "inset(0 0% 0% 0)",
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
          // markers: true,
        },
      });
    });

    // Scale animation with clip path reveal
    const scaleSection = scaleImgRef.current;
    const scaleImg = scaleSection?.querySelector(".scale-image");

    if (scaleSection && scaleImg) {
      // Initial clip-path state
      gsap.set(scaleImg, {
        clipPath: "inset(0 100% 100% 0)",
      });

      // First timeline for clip-path reveal (before pinning)
      gsap.to(scaleImg, {
        clipPath: "inset(0 0% 0% 0)",
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: scaleImg,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
      });

      // Second timeline for pinning and scaling
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scaleSection,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
        },
      });

      // First animation: Scale the image
      tl.to(scaleImg, {
        width: "110vw",
        height: "110vh",
        maxWidth: "none",
        duration: 1,
      });

      // Second animation: Reveal text
      tl.to(
        ".imgscaletxt",
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
        },
        "-=0.5", // Overlapping animation for smoother transition
      );
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="h-[93svh] w-full overflow-hidden pt-[var(--navbar-height)]">
        <div className="relative flex h-full items-center justify-center bg-[url('https://images.unsplash.com/photo-1630305106122-80b9ace010c7?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
          <div className="absolute bottom-0 left-1/2 w-[90vw] -translate-x-1/2 md:w-[75vw]">
            <img src="/logo.svg" alt="Logo" className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="flex flex-col bg-lime-50/50 px-4 pt-12 md:px-8 md:pt-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl">
            <span className="font-PPRegular">Experience Paradise </span>
            <br className="md:hidden" />
            <span className="font-PPRegular">in </span>
            <span className="font-PPItalic">every sip </span>
            <br />
            <span className="font-PPRegular">and bite</span>
          </h1>
          <p className="font-NHD mt-4 max-w-2xl py-4 text-lg text-stone-500 md:py-8 md:text-xl">
            Welcome to Eden Park & Garden, your ultimate destination for
            entertainment and leisure in Abuja. Enjoy live music, delicious
            traditional food, and exciting activities in a serene environment.
          </p>
        </div>
      </section>

      <HorizontalScrollCards2 />

      {/* Garden Section with sticky positioning */}
      <div className="relative">
        <div className="sticky top-0 h-screen w-full">
          <div className="relative h-full bg-[url('https://images.unsplash.com/photo-1719305296935-74551196e1fe?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8">
              <h1 className="font-PPItalic pt-10 text-6xl text-white md:pt-20 md:text-9xl">
                The Garden
              </h1>
            </div>
          </div>
        </div>

        {/* Content that will slide over the garden */}
        <div className="relative">
          {/* Services Section with clip-path animation */}
          <section
            ref={servicesRef}
            className="space-y-50 bg-lime-50 px-4 py-10 md:px-8 md:py-20"
          >
            {/* Card 1 - Small, Left */}
            <div className="flex w-full flex-col md:flex-row md:justify-start">
              <div className="flex w-full flex-col md:w-1/2 md:flex-row md:overflow-hidden">
                <div className="relative h-64 w-full md:h-98">
                  <img
                    src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Cozy Bar"
                    className="service-image absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-4 p-4 md:gap-8">
                  <h2 className="font-PPItalic text-4xl text-gray-800 md:text-6xl">
                    The Bar
                  </h2>
                  <p className="font-NHD text-lg text-stone-500">
                    Hillbrook Estate & Farm is a luxury coastal property and
                    working farm situated just north of Whangamata on New
                    Zealand's Coromandel coast.
                  </p>
                  <div className="flex justify-start">
                    <Link
                      to="/about"
                      className="font-NHD flex items-center gap-2 text-lg text-gray-800 transition-all"
                    >
                      See all
                      <ArrowRight className="-rotate-45" size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Large, Center */}
            <div className="flex w-full flex-col md:flex-row md:justify-center">
              <div className="flex w-full flex-col md:w-2/3 md:flex-row md:overflow-hidden">
                <div className="relative h-64 w-full md:h-150">
                  <img
                    src="https://images.unsplash.com/photo-1589759118394-f5cfe6178fd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Cocktail Lounge"
                    className="service-image absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start gap-4 p-4 md:gap-8">
                  <h2 className="font-PPItalic text-4xl text-gray-800 md:text-6xl">
                    The Pools
                  </h2>
                  <p className="font-NHD text-lg text-stone-500">
                    Hillbrook Estate & Farm is a luxury coastal property and
                    working farm situated just north of Whangamata on New
                    Zealand's Coromandel coast. Available for exclusive rental,
                    our estate is the perfect setting for your next luxury
                    escape.
                  </p>
                  <div className="flex justify-start">
                    <Link
                      to="/about"
                      className="font-NHD flex items-center gap-2 text-lg text-gray-800 transition-all"
                    >
                      See all
                      <ArrowRight className="-rotate-45" size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Medium, Right */}
            <div className="flex w-full flex-col md:flex-row md:justify-start">
              <div className="flex w-full flex-col md:w-1/2 md:flex-row md:overflow-hidden">
                <div className="relative h-64 w-full md:h-98">
                  <img
                    src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Cozy Bar"
                    className="service-image absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-4 p-4 md:gap-8">
                  <h2 className="font-PPItalic text-4xl text-gray-800 md:text-6xl">
                    The Field
                  </h2>
                  <p className="font-NHD text-lg text-stone-500">
                    Hillbrook Estate & Farm is a luxury coastal property and
                    working farm situated just north of Whangamata on New
                    Zealand's Coromandel coast.
                  </p>
                  <div className="flex justify-start">
                    <Link
                      to="/about"
                      className="font-NHD flex items-center gap-2 text-lg text-gray-800 transition-all"
                    >
                      See all
                      <ArrowRight className="-rotate-45" size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Large, Center */}
            {/* <div className="flex w-full flex-col md:flex-row md:justify-center">
              <div className="w-full flex-col md:w-2/3 md:flex-row md:overflow-hidden">
                <div className="relative h-64 w-full md:h-150">
                  <img
                    src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Wine Collection"
                    className="service-image absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex w-full flex-col justify-start gap-4 p-4 md:w-1/2 md:gap-8 md:py-8">
                  <h2 className="font-PPItalic text-4xl text-gray-800 md:text-6xl">
                    The Shows
                  </h2>
                  <p className="font-NHD text-lg text-stone-500">
                    Hillbrook Estate & Farm is a luxury coastal property and
                    working farm situated just north of Whangamata on New
                    Zealand's Coromandel coast. Available for exclusive rental,
                    our estate is the perfect setting for your next luxury
                    escape.
                  </p>
                  <div className="flex justify-start">
                    <Link
                      to="/about"
                      className="font-NHD flex items-center gap-2 text-lg text-gray-800 transition-all"
                    >
                      See all
                      <ArrowRight className="-rotate-45" size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
        </div>
      </div>

      {/* Scale Image Section */}
      <div ref={scaleImgRef} className="relative h-screen w-full">
        <div className="absolute inset-0 flex items-center justify-center bg-lime-50">
          <img
            src="https://images.unsplash.com/photo-1590111524106-2525130672ec?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Scaling Image"
            className="scale-image h-[50vh] w-[50vw] object-cover"
          />
        </div>
        <div className="imgscaletxt absolute inset-0 flex flex-col justify-end p-4 opacity-0 blur-2xl md:p-8">
          {/* <p className="font-NHD w-full text-lg text-white md:w-1/3 md:text-xl">
            Hillbrook Estate & Farm is a luxury coastal property and working
            farm situated just north of Whangamata on New Zealand's Coromandel
            coast. Available for exclusive rental, our estate is the perfect
            setting for your next luxury escape.
          </p>
          <div className="flex justify-start">
            <Link
              to="/about"
              className="font-NHD flex items-center gap-2 pt-4 text-lg text-white transition-all"
            >
              See all
              <ArrowRight className="-rotate-45" size={24} />
            </Link>
          </div> */}
          <h1 className="font-PPItalic pt-10 text-6xl text-white md:pt-20 md:text-9xl">
            The Night Life
          </h1>
        </div>
      </div>

      {/* Night Life Section with sticky positioning */}
      <div className="relative">
        {/* <div className="sticky top-0 h-screen w-full">
          <div className="relative h-full bg-[url('https://images.unsplash.com/photo-1590111524106-2525130672ec?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8">
              <p className="font-NHD w-full text-lg text-white md:w-1/3 md:text-xl">
                Hillbrook Estate & Farm is a luxury coastal property and working
                farm situated just north of Whangamata on New Zealand's
                Coromandel coast. Available for exclusive rental, our estate is
                the perfect setting for your next luxury escape.
              </p>
              <div className="flex justify-start">
                <Link
                  to="/about"
                  className="font-NHD flex items-center gap-2 pt-4 text-lg text-white transition-all"
                >
                  See all
                  <ArrowRight className="-rotate-45" size={24} />
                </Link>
              </div>
              <h1 className="font-PPItalic pt-10 text-6xl text-white md:pt-20 md:text-9xl">
                The Night Life
              </h1>
            </div>
          </div>
        </div> */}

        {/* Content that will slide over the night life section */}
        <div className="relative">
          <NightHome />
          <section className="h-200 bg-blue-500" id="night"></section>
        </div>
      </div>
    </>
  );
};

export default Home;
