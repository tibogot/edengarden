import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VelocityTicker = ({ baseVelocity = 0.05 }) => {
  const scrollerRef = useRef(null);
  const lastScrollY = useRef(0);
  const directionRef = useRef(1);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    let xPos = 0;
    const scroller = scrollerRef.current;

    const animate = () => {
      // Get current scroll position
      const scrollY = window.scrollY;

      // Determine scroll direction
      if (scrollY < lastScrollY.current) {
        directionRef.current = -1;
      } else if (scrollY > lastScrollY.current) {
        directionRef.current = 1;
      }
      lastScrollY.current = scrollY;

      // Calculate movement based on baseVelocity and scroll speed
      const scrollSpeed = Math.abs(scrollY - lastScrollY.current) * 0.01;
      const moveBy = (directionRef.current * baseVelocity + scrollSpeed) * 0.5;

      // Update position
      xPos += moveBy;

      // Wrap position
      if (xPos <= -25) {
        xPos = 0;
      } else if (xPos >= 0) {
        xPos = -25;
      }

      // Apply transform
      gsap.set(scroller, {
        x: `${xPos}%`,
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [baseVelocity]);

  const cards = [
    { id: 1, img: "https://picsum.photos/400/300?random=1", title: "Cozy Bar" },
    { id: 2, img: "https://picsum.photos/400/300?random=2", title: "Lounge" },
    {
      id: 3,
      img: "https://picsum.photos/400/300?random=3",
      title: "Cocktails",
    },
    {
      id: 4,
      img: "https://picsum.photos/400/300?random=4",
      title: "Luxury Stay",
    },
    {
      id: 5,
      img: "https://picsum.photos/400/300?random=5",
      title: "Rooftop Vibes",
    },
    {
      id: 6,
      img: "https://picsum.photos/400/300?random=6",
      title: "Live Music",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 py-10">
      <div
        ref={scrollerRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {cards.concat(cards).map((card, index) => (
          <div
            key={index}
            className="mx-4 w-64 flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-48 w-full object-cover"
            />
            <h2 className="p-4 text-lg font-semibold text-gray-800">
              {card.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VelocityTicker;
