import { useState, useEffect } from "react";
import { ActivitySlider } from "./ActivitySlider";
import ws_img1 from "../assets/git_github_workshop.png";
import ws_img2 from "../assets/docker_workshop.png";
import { useLanguage } from "../language-context";


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
      <div className="container mx-auto px-20">
        <ActivitySlider/>
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
