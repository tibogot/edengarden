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
      image:
        "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Traditional Food",
      description: "Escape to serene mountain landscapes",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Shawarma",
      description: "Tropical getaway with crystal clear waters",
      image:
        "https://images.unsplash.com/photo-1583665354191-634609954d54?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Weddings",
      description: "Modern living in the heart of the city",
      image:
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Football",
      description: "Reconnect with nature in a cozy woodland setting",
      image:
        "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
