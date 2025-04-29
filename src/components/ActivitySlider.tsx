import type React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Code, Coffee, Users } from "lucide-react";
import workshop_img from "../assets/480222510_122116886204697575_5941039690238715950_n.jpg";
import project_img from "../assets/481682077_1017997677053113_5498224049031879829_n.jpg";
import bonding_img from "../assets/Screenshot 2025-04-27 221236.png"
import { useLanguage } from "../language-context";

export interface Activity {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface ActivitySliderProps {
  activities?: Activity[];
}

export function ActivitySlider({ activities }: ActivitySliderProps) {
  const [currentActivity, setCurrentActivity] = useState(0);
  const { t } = useLanguage();

  const defaultActivities: Activity[] = [
    {
      title: "Workshops",
      description:
        "Regular coding sessions, tech talks, and hands-on learning experiences for all skill levels.",
      image: workshop_img,
      icon: <Coffee className="h-5 w-5 text-white" />,
    },
    {
      title: "Team Bonding",
      description:
        "Fun activities and events that strengthen relationships and build a supportive community.",
      image: bonding_img,
      icon: <Users className="h-5 w-5 text-white" />,
    },
    {
      title: "Community Projects",
      description:
        "Collaborative initiatives that solve real-world problems and foster innovation.",
      image: project_img,
      icon: <Code className="h-5 w-5 text-white" />,
    },
  ];

  const displayActivities = activities || defaultActivities;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text*/}
      <div className="max-w-xl">
        <h2 className="text-3xl text-[#004243] md:text-4xl font-bold mb-4">
          {t("activity.title")}
        </h2>
        <div className="h-1 w-20 bg-[#74A173] mb-6"></div>
        <p className="text-lg text-muted-foreground mb-8">
          {t("activity.text")}
        </p>
        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() =>
              setCurrentActivity((prev) =>
                prev === 0 ? displayActivities.length - 1 : prev - 1
              )
            }
            className="rounded-full p-2 border border-[#74a173] text-[#74a173] hover:bg-[#74a173]/10 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() =>
              setCurrentActivity((prev) =>
                prev === displayActivities.length - 1 ? 0 : prev + 1
              )
            }
            className="rounded-full p-2 border border-[#74a173] text-[#74a173] hover:bg-[#74a173]/10 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Image Slide*/}
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
        {displayActivities.map((activity, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentActivity === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <img
                src={activity.image || "/placeholder.svg"}
                alt={activity.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-10 w-10 rounded-full bg-[#749C73]/95 flex items-center justify-center">
                    {activity.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {activity.title}
                  </h3>
                </div>
                <p className="text-white/90 max-w-md">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators*/}
        <div className="absolute bottom-6 right-6 flex space-x-2">
          {displayActivities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentActivity(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentActivity === index ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
