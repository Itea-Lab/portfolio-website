import { useLanguage } from "../language-context";
import { useState, useEffect } from "react";
import { Code, GitBranch, Globe, GraduationCap } from "lucide-react";

export default function WorkStyle() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const items = [
    { key: "research", icon: Code },
    { key: "agile", icon: GitBranch },
    { key: "remote", icon: Globe },
    { key: "growth", icon: GraduationCap },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("workstyle");
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
    <section id="workstyle" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-[#f4fff8] rounded-full opacity-70 z-0"></div>
      <div className="absolute left-0 bottom-1/4 w-48 h-48 bg-[#f4fff8] rounded-full opacity-70 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className={`text-3xl font-bold text-center text-[#004243] mb-6 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("workStyle.title")}
        </h2>

        <p
          className={`text-lg text-center max-w-3xl mx-auto mb-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("workStyle.intro")}
        </p>

        <div
          className={`grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {items.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <div
                key={item.key}
                className="flex flex-col items-center text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-[#74a173]/80 rounded-full flex items-center justify-center mb-6 hover:scale-110 hover:shadow-lg transition-all duration-500">
                  <ItemIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#004243]">
                  {t(`workStyle.${item.key}.title`)}
                </h3>
                <p className="text-gray-700">
                  {t(`workStyle.${item.key}.text`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
