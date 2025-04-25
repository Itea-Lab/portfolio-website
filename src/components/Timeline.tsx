import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  title: string;
  year: string;
  description: string;
  position: "top" | "bottom";
}

export function Timeline() {

  const timelineItems: TimelineItem[] = [
    {
      title: "Conception",
      year: "2015",
      description:
        "The initial idea for a technology-focused student community was born from a small group of passionate computer science students.",
      position: "top",
    },
    {
      title: "IT Student Association",
      year: "2017",
      description:
        "Formalized as an official student association with regular meetups, workshops, and small-scale projects.",
      position: "bottom",
    },
    {
      title: "IT Lab",
      year: "2019",
      description:
        "Expanded into a dedicated physical space with equipment and resources for hands-on learning and project development.",
      position: "top",
    },
    {
      title: "New IT Community",
      year: "2022",
      description:
        "Evolved beyond the university to include industry professionals, alumni, and community members with a focus on real-world impact.",
      position: "bottom",
    },
    {
      title: "Future Roadmap",
      year: "2025",
      description:
        "Planning expansion to multiple locations, online learning platforms, and partnerships with tech companies for internship opportunities.",
      position: "top",
    },
  ];

  return (
    <div className="py-16 px-4 max-w-5xl mx-auto h-full">

      <div className="relative">
        {/* Main timeline line */}
        <div
          className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-0 w-1 md:w-full md:h-1 bg-[#74A173]/30 h-full"
          style={{ transformOrigin: "center" }}
        />

        {/* Timeline items */}
        <div className="relative">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`mb-12 md:mb-0 md:absolute ${
                item.position === "top"
                  ? "md:top-0 md:transform md:-translate-y-full md:pb-8"
                  : "md:bottom-0 md:transform md:translate-y-full md:pt-8"
              }`}
              style={{
                left: `${(index / (timelineItems.length - 1)) * 90}%`,
              }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute ${
                  item.position === "top"
                    ? "md:bottom-0 md:transform md:translate-y-1/2"
                    : "md:top-0 md:transform md:-translate-y-1/2"
                } transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#74A173] z-10 shadow-lg`}
              />

              {/* Content container with different layouts for top/bottom */}
              <div
                className={`md:w-60 bg-white p-4 rounded-lg shadow-md ${
                  item.position === "top"
                    ? "md:transform md:translate-x-[-45%]"
                    : "md:transform md:translate-x-[-45%]"
                }`}
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
