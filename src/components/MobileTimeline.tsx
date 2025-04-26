import { useEffect, useState, useRef } from "react";

interface TimelineItem {
  title: string;
  year: string;
  description: string;
}

export function MobileTimeline() {
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
      lineRef.current.style.height = "0%";
      setTimeout(() => {
        if (lineRef.current) {
          lineRef.current.style.transition = "height 1.5s ease-in-out";
          lineRef.current.style.height = "100%";
        }
      }, 100);
    }
  }, [isVisible]);
  const timelineItems: TimelineItem[] = [
    {
      title: "Conception",
      year: "2023",
      description:
        "Idea of an association for CS students suggested by Ms. Pascale Quester",
    },
    {
      title: "IT Student Association",
      year: "2024",
      description:
        "Formed and recruited Gen 1 in Feb 2024, focusing on doing projects.\nRepresented Swinburne Vietnam CS at ACS accreditation",
    },
    {
      title: "Swinburne IT Lab",
      year: "2024",
      description:
        "Represented Swinburne Vietnam CS at ExDays and Conception Day. We participated in FPT ResFes 2024 and Akathon Jan 2024",
    },
    {
      title: "ITea Lab Community",
      year: "2025",
      description:
        "Re-branded as CS community. Organised workshops and began recruiting Gen 2",
    },
    {
      title: "Future Roadmap",
      year: "Present",
      description:
        "Become semi-independent, collaborating with outside firms while representing CS students at Swinburne Vietnam",
    },
  ];

  return (
    <div className="py-8 px-4">
      <div className="relative">
        {/* Vertical timeline line */}
        <div
          ref={lineRef}
          className="absolute left-4 top-0 w-1 bg-[#74A173]/30"
          style={{
            transformOrigin: "top",
            height: "0%",
          }}
        />

        {/* Timeline items */}
        <div className="relative ml-12">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="mb-10 relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                transitionDelay: `${index * 200 + 800}ms`,
              }}
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-10 top-2 w-5 h-5 rounded-full bg-[#74A173] z-10 shadow-lg"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${index * 200 + 600}ms`,
                }}
              />

              {/* Year marker */}
              <div
                className="text-[#74A173] font-bold text-sm mb-1"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 0.5s ease",
                  transitionDelay: `${index * 200 + 700}ms`,
                }}
              >
                {item.year}
              </div>

              {/* Content */}
              <div
                className="bg-white p-4 rounded-lg shadow-md"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${index * 200 + 900}ms`,
                }}
              >
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
