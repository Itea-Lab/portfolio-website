import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  title: string;
  year: string;
  description: string;
}

export function MobileTimeline() {

  const timelineItems: TimelineItem[] = [
    {
      title: "Conception",
      year: "2015",
      description:
        "The initial idea for a technology-focused student community was born from a small group of passionate computer science students.",
    },
    {
      title: "IT Student Association",
      year: "2017",
      description:
        "Formalized as an official student association with regular meetups, workshops, and small-scale projects.",
    },
    {
      title: "IT Lab",
      year: "2019",
      description:
        "Expanded into a dedicated physical space with equipment and resources for hands-on learning and project development.",
    },
    {
      title: "New IT Community",
      year: "2022",
      description:
        "Evolved beyond the university to include industry professionals, alumni, and community members with a focus on real-world impact.",
    },
    {
      title: "Future Roadmap",
      year: "2025",
      description:
        "Planning expansion to multiple locations, online learning platforms, and partnerships with tech companies for internship opportunities.",
    },
  ];

  return (
    <div className="py-8 px-4">
      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-4 top-0 w-1 bg-[#74A173]/30 h-full"
          style={{ transformOrigin: "top" }}
        />

        {/* Timeline items */}
        <div className="relative ml-12">
          {timelineItems.map((item, index) => (
            <div key={index} className="mb-10 relative">
              {/* Timeline dot */}
              <div className="absolute -left-10 top-2 w-5 h-5 rounded-full bg-[#74A173] z-10 shadow-lg" />

              {/* Year marker */}
              <div className="text-[#74A173] font-bold text-sm mb-1">
                {item.year}
              </div>

              {/* Content */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
