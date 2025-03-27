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

    const horizontalScrollAnimation = gsap.to(container, {
      x: () =>
        -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${container.offsetWidth * 0.5}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: true,
        anticipatePin: 1,
        // invalidateOnRefresh: true,
      },
    });

    return () => {
      horizontalScrollAnimation.kill();
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
    <div ref={triggerRef} className="w-full overflow-hidden">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={containerRef}
          className="flex h-full w-max items-center gap-40"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex h-full w-[400px] flex-shrink-0 items-center justify-center ${index === 0 ? "ml-0" : "ml-4"}`}
            >
              <div className="h-full max-h-[650px] w-full max-w-[500px] overflow-hidden">
                <div className="h-3/4 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="py-4">
                  <h2 className="font-NHD text-2xl">{card.title}</h2>
                  <p className="text-gray-600">{card.description}</p>
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
