import { useLanguage } from "../language-context";
import icon from "../assets/icon_transparent.png";
function Hero() {
  const { t } = useLanguage();
  return (
    <div className="hero h-[full] md:h-full bg-[#e2f1e7] relative overflow-hidden">
      <div className="flex flex-col mt-[9rem]">
        <div className="flex justify-start items-center mx-[3rem] md:mx-[7rem]">
          <div className="pt-0 relative z-10">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-[#004243] font-bold pt-3">
              {t("hero.headline")}
            </h1>
            <h3 className="text-3xl sm:text-3xl md:text-5xl lg:text-4xl text-[#004243] pt-3">
              {t("hero.tagline")}
            </h3>
          </div>
        </div>
        <div className="flex mx-7 md:mx-[7rem] items-center">
          <div className="flex justify-center items-center h-full">
            <div className="pb-7">
              <h1 className="text-[12rem] md:text-[11rem] text-[#004243] text-start">
                &#123;
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full mx-7 text-[#004243] relative z-10">
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

          <div className="absolute bottom-[-7rem] right-[-20rem] w-[40rem] h-[36rem] md:w-[43rem] md:h-[40rem] lg:w-[45rem] lg:h-[45rem] z-0">
            <img src={icon} alt="lab_icon" className="opacity-70 h-svh w-svh" />
          </div>
        </div>

        <div
          id="about"
          className="relative z-10 text-center text-[#004243] px-4"
        >
          <div className="flex flex-col items-center mt-16 animate-bounce">
            <p className="text-sm font-light tracking-widest mb-2">
              {t("hero.scroll")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
