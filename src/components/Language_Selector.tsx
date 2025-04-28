import { useLanguage } from "../language-context";
interface LanguageSelectorProps {
  scrolled: boolean;
}
export default function Language_Selector({scrolled}: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`absolute left-4 top-full mt-4 z-50 transition-all duration-300 ${
        scrolled ? "opacity-100" : "opacity-70 hover:opacity-100"
      }`}
    >
      <div
        className={`flex flex-col bg-white rounded-full shadow-md overflow-hidden border ${
          scrolled ? "border-gray-200" : "border-white/30 backdrop-blur-sm"
        }`}
      >
        <button
          onClick={() => setLanguage("JP")}
          className={`w-10 h-10 flex items-center justify-center text-sm transition-colors ${
            language === "JP" ? "bg-[#004243] text-white" : "hover:bg-gray-100"
          }`}
        >
          JP
        </button>
        <div className="w-full h-px bg-gray-200"></div>
        <button
          onClick={() => setLanguage("EN")}
          className={`w-10 h-10 flex items-center justify-center text-sm transition-colors ${
            language === "EN" ? "bg-[#004243] text-white" : "hover:bg-gray-100"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}

