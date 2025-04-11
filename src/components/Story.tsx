import { useLanguage } from "../language-context";
import image from "../assets/square_lab.png";

export default function Story() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">
            {t("aboutUs.title")}
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            {t("aboutUs.content")}
          </p>
        </div>
        {/* Work Style */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">
            {t("culture.workStyle.title")}
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            {t("culture.workStyle.text")}
          </p>
        </div>

        {/* Subsections */}
        <div className="space-y-24">
          {/* Technology */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative h-90 w-90">
                <img
                  src={image}
                  alt="Learning from mistakes"
                  className="object-cover rounded-lg absolute h-full w-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                {t("culture.mistake.title")}
              </h3>
              <p className="text-gray-700">{t("culture.mistake.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
