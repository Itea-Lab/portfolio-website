import { useEffect, useState } from "react";
import { useLanguage } from "../language-context";
import { ChevronDown } from "lucide-react";
import icon from "../assets/icon_transparent.png";
// import icon2 from "../assets/clipart_leaf.svg"
function Hero() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero h-screen bg-[#e2f1e7] relative overflow-x-hidden overflow-y-hidden overflow-hidden">
      <div className="flex flex-col mt-[9rem]">
        <div className="flex justify-start items-center mx-[3rem] md:mx-[7rem]">
          <div className="pt-0 relative z-10">
            <h1
              className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-[#004243] font-bold pt-3 leading-tight mb-1 transition-opacity duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {t("hero.headline")}
            </h1>
            <h1
              className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-[#44a3a2] font-bold pt-0 transition-opacity duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {t("hero.headline2")}
            </h1>
            <h3
              className={`text-3xl sm:text-3xl md:text-5xl lg:text-4xl text-[#004243] pt-3 transition-opacity duration-700 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {t("hero.tagline")}
            </h3>
          </div>
        </div>
        <div className="flex mx-7 md:mx-[7rem] items-center">
          <div className="flex justify-center items-center h-full">
            <div className="pb-7">
              <h1
                className={`text-[12rem] md:text-[11rem] text-[#004243] text-start transition-opacity duration-700 delay-300 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                &#123;
              </h1>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center h-full mx-7 text-[#004243] relative z-10 transition-opacity duration-700 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-start pt-3 ">
              Data Science
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-start pt-3">
              Internet of Things
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-start pt-3">
              Artificial Intelligence
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-start pt-3">
              Software Development
            </h1>
          </div>

          <div className="absolute bottom-[-7rem] right-[-20rem] w-[45rem] h-[36rem] md:w-[43rem] md:h-[40rem] lg:w-[45rem] lg:h-[45rem] z-0">
            <img
              src={icon}
              alt="lab_icon"
              className="opacity-30 md:opacity-50 lg:opacity-70 h-svh w-svh"
            />
          </div>
        </div>
        <button
          onClick={scrollToContent}
          className={`flex flex-col items-center mt-6 animate-bounce transition-opacity duration-700 delay-900 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Scroll down"
        >
          <p className="text-sm font-light tracking-widest mb-2">
            {t("hero.scroll")}
          </p>
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
