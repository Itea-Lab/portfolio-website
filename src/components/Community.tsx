import { useState, useEffect } from "react";
import { ArrowRight, Github, Calendar } from "lucide-react";
import event_img from "../assets/480222510_122116886204697575_5941039690238715950_n.jpg";
import project_img from "../assets/481682077_1017997677053113_5498224049031879829_n.jpg";
import ws_img1 from "../assets/git_github_workshop.png";
import ws_img2 from "../assets/docker_workshop.png";
import { useLanguage } from "../language-context";
import { Link } from "react-router-dom";

export default function Community() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const events = [
    {
      name: "Git & Github Workshop",
      date: "2023-10-01",
      image: ws_img1,
    },
    {
      name: "Docker Workshop",
      date: "2023-10-15",
      image: ws_img2,
    }
  ]
  const items = [
    {
      key: "events",
      icon: Calendar,
      image: event_img,
      alt: "Tech events and workshops",
      url: "https://www.facebook.com/ITeaLabTeam",
    },
    {
      key: "opensource",
      icon: Github,
      image: project_img,
      alt: "Open source projects",
      url: "https://github.com/Itea-Lab",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("community");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="community" className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center text-[#004243] mb-6 pt-20 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("community.activities")}
        </h2>

        <p
          className={`text-lg text-center max-w-3xl mx-auto mb-16 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("community.intro")}
        </p>

        <div
          className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {items.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <div
                key={item.key}
                className="bg-white hover:bg-[#E7F3EA] p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-60 w-full mb-6 rounded-md overflow-hidden group">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#E7F3EA] rounded-full flex items-center justify-center mr-4">
                    <ItemIcon size={20} className="text-[#004243]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#004243]">
                    {t(`community.${item.key}.title`)}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  {t(`community.${item.key}.text`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-[10rem] pt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <div
              key={event.name}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <img
                src={event.image}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{event.name}</p>
              </div>
            </div>
          ))}
          <div className="flex aspect-square overflow-hidden rounded-lg group"></div>
        </div>
      </div>
    </section>
  );
}
