import { useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Flip);

const FlipSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;
    if (!container || cards.length === 0) return;

    gsap.set(container, {
      width: 200,
      height: 200,
      position: "relative",
      top: 20,
      left: 20,
    });
    cards.forEach((card, i) =>
      gsap.set(card, {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        x: i * 10,
        y: i * 10,
        zIndex: cards.length - i,
      }),
    );

    let isExpanded = false;
    container.addEventListener("click", () => {
      const state = Flip.getState(cards);
      isExpanded ? collapse() : expand();
      Flip.from(state, {
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
        absolute: true,
      });
      isExpanded = !isExpanded;
    });

    const expand = () => {
      gsap.set(container, {
        width: "100%",
        height: "auto",
        className: "flex flex-wrap justify-between gap-8 p-8",
      });
      cards.forEach((card) =>
        gsap.set(card, {
          position: "relative",
          width: 300,
          height: 300,
          x: 0,
          y: 0,
        }),
      );
    };

    const collapse = () => {
      gsap.set(container, {
        width: 200,
        height: 200,
        position: "absolute",
        top: 20,
        left: 20,
        className: "cursor-pointer",
      });
      cards.forEach((card, i) =>
        gsap.set(card, {
          position: "absolute",
          width: 200,
          height: 200,
          x: i * 10,
          y: i * 10,
          zIndex: cards.length - i,
        }),
      );
    };
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden">
      <div ref={containerRef} className="cursor-pointer">
        {["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"].map(
          (color, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="absolute"
              style={{ backgroundColor: color }}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default FlipSection;
