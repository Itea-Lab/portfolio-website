import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Newspaper } from "lucide-react";
import event1 from "../assets/491967930_1212895260554230_7405148341619204576_n.jpg";
import event2 from "../assets/491962257_122126469422697575_3551059179860040765_n.jpg";
import { useLanguage } from "../language-context";
export default function News() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const items = [
    {
      key: "events",
      icon: Newspaper,
      image: event1,
      date: "April 23, 2025",
      title: "Congratulations to our talent members!",
      content:
        "Nguyen Vinh Khang (ITea Lab Gen 1) and Truong Duc Sang (ITea Lab Gen 2) were featured in Thanh Nien newspaper for developing an AI tool that identifies online scam websites. This is part of the Chongluadao.vn project, founded by cybersecurity expert Mr. Ngo Minh Hieu. \n Lab would like to send our best wishes to them and hope them with a further success on their path.",
      alt: "ITea News image",
      url: "https://www.facebook.com/ITeaLabTeam",
    },
    {
      key: "events",
      icon: Newspaper,
      image: event2,
      date: "April 19, 2025",
      title: "Partnership Announcement",
      content:
        "ITea Lab is excited to partner with 3DIoT - the leading community with mutual passion, knowledge on IoT, especially in embedded technology. With ITea Lab’s strength in software development and operations, we are aiming to exchange knowledge, organize valuable workshops, and collaborate on projects together.",
      alt: "ITea News image",
      url: "https://www.facebook.com/ITeaLabTeam",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("news");
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
    <section className="py-20 bg-[#F9FAFB]" id="news">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl pt-20 md:text-4xl font-bold mb-4 text-center">
          ITea Lab News
        </h2>
        <div className="h-1 w-20 bg-[#74A173] mx-auto mb-6"></div>
        <p className="text-lg text-muted-foreground text-center mb-6">
          Stay updated with the latest happenings at our community.
        </p>

        <div
          className={`grid md:grid-cols-2 gap-8 max-w-7xl mx-auto transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {items.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <div
                key={item.key}
                className="bg-white hover:bg-[#74a173]/10 p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 hover:-translate-y-1"
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
                  <div className="w-10 h-10 bg-[#74a173]/20 rounded-full flex items-center justify-center mr-4">
                    <ItemIcon size={20} className="text-[#004243]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#004243]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">{item.content}</p>
                <Link
                  to={item.url}
                  className="inline-flex items-center text-md font-medium hover:text-[#74A173] hover:bg-transparent border-2 hover:border-[#74a173] transition-colors group bg-[#74a173] text-white px-3 py-1 rounded-full"
                >
                  {t(`community.${item.key}.link`)}
                  <ArrowRight
                    size={16}
                    className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
