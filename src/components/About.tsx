import { useLanguage } from "../language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 bg-[linear-gradient(to_bottom_right,_#E3E8DD,_#F6F3EE_50%,_#FFFFFF_100%)] relative overflow-hidden"
    >
      <div className="bg-[url(../src/assets/clipart_leaf.png)] bg-no-repeat left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-80 h-80 z-0 opacity-20"></div>
      <div className="container mx-auto px-4 pt-20">
        <div className="text-center mb-0">
          <h2 className="text-[#004243] text-3xl md:text-4xl font-bold mb-4">
            {t("aboutUs.title")}
          </h2>
          <div className="h-1 w-20 bg-[#74A173] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">{t("aboutUs.content")}</p>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-2xl text-[#004243] font-bold mb-6 pt-20">
            {t("vision.title")}
          </h2>
          <p className="text-lg max-w-3xl mx-auto">{t("vision.text")}</p>
        </div>
      </div>
    </section>
  );
}
