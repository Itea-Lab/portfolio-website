import { useEffect, useState, useRef } from "react";

interface TimelineItem {
  title: string;
  year: string;
  description: string;
  position: "top" | "bottom";
}

export function Timeline() {
  const [isVisible, setIsVisible] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = lineRef.current;
      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible && lineRef.current) {
      lineRef.current.style.width = "0%";
      setTimeout(() => {
        if (lineRef.current) {
          lineRef.current.style.transition = "width 1.5s ease-in-out";
          lineRef.current.style.width = "100%";
        }
      }, 100);
    }
  }, [isVisible]);

  const timelineItems: TimelineItem[] = [
    {
      title: "Conception",
      year: "2023",
      description:
        "The idea of an association for CS students suggested by Ms.Pascale Quester",
      position: "top",
    },
    {
      title: "IT Student Association",
      year: "2024",
      description:
        "Formed and recruited Gen 1 in Feb 2024, focusing on doing projects.\nRepresented Swinburne Vietnam CS at ACS accreditation",
      position: "bottom",
    },
    {
      title: "Swinburne IT Lab",
      year: "2024",
      description:
        "Represented Swinburne Vietnam CS at ExDays and Conception Day. We participated in FPT ResFes 2024 and Akathon Jan 2024",
      position: "top",
    },
    {
      title: "ITea Lab Community",
      year: "2025",
      description:
        "Re-branded as CS community. Organised workshops and began recruiting Gen 2",
      position: "bottom",
    },
    {
      title: "Future Roadmap",
      year: "Present",
      description:
        "Become semi-independent, collaborating with outside firms while representing CS students at Swinburne Vietnam",
      position: "top",
    },
  ];

  return (
    <div className="py-16 px-4 max-w-5xl mx-auto">
      <div className="relative">
        {/* Main timeline line */}
        <div
          ref={lineRef}
          className="absolute left-0 top-1/2 w-0 h-1 bg-[#74A173]/30"
          style={{
            transformOrigin: "left",
            width: "0%",
          }}
        />

        {/* Timeline items */}
        <div className="relative h-64 md:h-32">
          {" "}
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="mb-12 md:mb-0 md:absolute"
              style={{
                left: `${(index / (timelineItems.length - 1)) * 90}%`,
                top:
                  item.position === "top"
                    ? "md:top-0 md:transform md:-translate-y-full md:pb-8"
                    : "md:bottom-0 md:transform md:translate-y-full md:pt-8",
                transform: "translateX(-10%)",
              }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute ${
                  item.position === "top"
                    ? "md:transform md:translate-x-[45%]"
                    : "md:transform md:translate-x-[-45%]"
                } w-5 h-5 rounded-full bg-[#74A173] mx-auto mb-2 mt-2 shadow-lg`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "scale(1) translateY(50px)"
                    : "scale(0) translateY(50px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${index * 200 + 800}ms`,
                }}
              />

              {/* Content container */}
              <div
                className={`w-56 bg-white p-4 rounded-lg shadow-md mx-auto ${
                  item.position === "top"
                    ? "md:bottom-0 md:transform md:translate-y-1/2"
                    : "md:top-0 md:transform md:-translate-y-[9.5rem]"
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0) translateX(-70px)"
                    : "translateY(20px) translateX(-70px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${index * 200 + 1000}ms`,
                }}
              >
                <div className="text-[#74A173] font-bold text-sm mb-1">
                  {item.year}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
