import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const NightHome = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      src: "https://picsum.photos/800/600?random=1",
      alt: "Night Vibes",
      rotation: -8,
      left: "5%",
      top: "20%",
      yPercent: -50,
      width: "min(300px, 30vw)", // Responsive width
    },
    {
      src: "https://picsum.photos/800/600?random=2",
      alt: "Live Music",
      rotation: 0,
      left: "65%",
      top: "25%",
      yPercent: -80,
      width: "min(350px, 25vw)",
    },
    {
      src: "https://picsum.photos/800/600?random=3",
      alt: "Dance Floor",
      rotation: -4,
      left: "25%",
      top: "40%",
      yPercent: -30,
      width: "min(300px, 35vw)",
    },
    {
      src: "https://picsum.photos/800/600?random=4",
      alt: "DJ Set",
      rotation: 6,
      left: "55%",
      top: "45%",
      yPercent: -60,
      width: "min(300px, 28vw)",
    },
    {
      src: "https://picsum.photos/800/600?random=5",
      alt: "Late Night",
      rotation: -7,
      left: "10%",
      top: "70%",
      yPercent: -40,
      width: "min(350px, 32vw)",
    },
    {
      src: "https://picsum.photos/800/600?random=6",
      alt: "Late Night",
      rotation: -7,
      left: "70%",
      top: "80%",
      yPercent: -40,
      width: "min(320px, 24vw)",
    },
  ];

  useGSAP(() => {
    // Desktop parallax
    const desktopCards = gsap.utils.toArray<HTMLElement>(".desktop-card");
    desktopCards.forEach((card, i) => {
      gsap.to(card, {
        yPercent: images[i].yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    // Mobile parallax
    const mobileCards = gsap.utils.toArray<HTMLElement>(".mobile-card");
    mobileCards.forEach((card) => {
      gsap.to(card, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[150vh] w-full overflow-hidden bg-black"
      style={{
        height: "max(150vh, fit-content)",
      }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-[1600px] px-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="desktop-card absolute bg-white p-3 shadow-xl transition-transform hover:scale-[1.02]"
              style={{
                left: img.left,
                top: img.top,
                // transform: `rotate(${img.rotation}deg)`,
                width: img.width,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="font-NHD py-3 text-center text-sm">{img.alt}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="mx-auto flex min-h-[150vh] w-full flex-col gap-4 px-4 py-12">
          <div className="flex flex-col gap-6 pb-20">
            {images.map((img, index) => (
              <div
                key={index}
                className="mobile-card mx-auto w-[85%] bg-white p-2 shadow-xl"
                style={{
                  transform: `rotate(${index % 2 === 0 ? 2 : -2}deg)`,
                  maxWidth: "280px",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="font-NHD py-2 text-center text-xs">
                  {img.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightHome;
