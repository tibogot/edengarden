import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = gsap.utils.toArray<HTMLElement>(".scroll-card");

    // Horizontal Scroll Animation without pin
    const horizontalScrollAnimation = gsap.to(container, {
      x: () =>
        -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Individual card rotation animations
    cards.forEach((card, index) => {
      gsap.to(card, {
        rotation: index % 2 === 0 ? -15 : 15, // Alternate rotation direction
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    return () => {
      horizontalScrollAnimation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const cards = [
    {
      id: 1,
      title: "Bar, drinks, liquors",
      description: "Experience ultimate comfort and elegance",
      image: "https://picsum.photos/800/600?random=1",
    },
    {
      id: 2,
      title: "Traditional Food",
      description: "Escape to serene mountain landscapes",
      image: "https://picsum.photos/800/600?random=2",
    },
    {
      id: 3,
      title: "Shawarma",
      description: "Tropical getaway with crystal clear waters",
      image: "https://picsum.photos/800/600?random=3",
    },
    {
      id: 4,
      title: "Weddings",
      description: "Modern living in the heart of the city",
      image: "https://picsum.photos/800/600?random=4",
    },
    {
      id: 5,
      title: "Football",
      description: "Reconnect with nature in a cozy woodland setting",
      image: "https://picsum.photos/800/600?random=5",
    },
    {
      id: 6,
      title: "Comedy Shows",
      description: "Unique experience in a breathtaking desert landscape",
      image: "https://picsum.photos/800/600?random=6",
    },
  ];

  return (
    <div
      ref={triggerRef}
      className="relative w-full overflow-hidden bg-lime-50/50"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={containerRef}
          className="flex h-full w-max items-center gap-40"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="scroll-card mx-8 flex h-full w-[400px] flex-shrink-0 items-center justify-center"
              style={{
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (Math.random() * 5)}deg)`,
              }}
            >
              <div className="h-full max-h-[650px] w-full max-w-[500px] overflow-hidden">
                <div className="h-3/4 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
