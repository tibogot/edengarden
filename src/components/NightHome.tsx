import { useRef, useEffect } from "react";

const NightHome = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      id: 1,
      src: "https://picsum.photos/800/600?random=1",
      alt: "Night Vibes",
      rotation: -8,
      left: "10%",
      top: "15%",
      speed: -300,
    },
    {
      id: 2,
      src: "https://picsum.photos/800/600?random=2",
      alt: "Live Music",
      rotation: 5,
      left: "60%",
      top: "10%",
      speed: -500,
    },
    {
      id: 3,
      src: "https://picsum.photos/800/600?random=3",
      alt: "Dance Floor",
      rotation: -4,
      left: "35%",
      top: "30%",
      speed: -200,
    },
    {
      id: 4,
      src: "https://picsum.photos/800/600?random=4",
      alt: "DJ Set",
      rotation: 6,
      left: "75%",
      top: "35%",
      speed: -400,
    },
    {
      id: 5,
      src: "https://picsum.photos/800/600?random=5",
      alt: "Late Night",
      rotation: -7,
      left: "15%",
      top: "50%",
      speed: -350,
    },
    {
      id: 6,
      src: "https://picsum.photos/800/600?random=6",
      alt: "Club Lights",
      rotation: 3,
      left: "50%",
      top: "60%",
      speed: -250,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = scrolled + sectionRect.top;
      const progress = (scrolled - sectionTop) / (window.innerHeight * 2);

      section.style.setProperty("--scroll", progress.toString());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-[200vh] w-full overflow-hidden bg-black"
    >
      {images.map((img) => (
        <div
          key={img.id}
          className="parallax-card absolute bg-white p-3 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            left: img.left,
            top: img.top,
            transform: `rotate(${img.rotation}deg) translateY(calc(var(--scroll, 0) * ${img.speed}px))`,
            width: "300px",
            transition: "transform 0.1s linear",
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-[250px] w-full object-cover"
          />
          <div className="font-NHD py-3 text-center text-sm">{img.alt}</div>
        </div>
      ))}
    </div>
  );
};

export default NightHome;
