import { Link, Outlet } from "react-router-dom";
import { useLanguage } from "../language-context";
import Language_Selector from "./Language_Selector";
import icon from '../assets/icon_transparent.png'

export default function Header() {
  const { t } = useLanguage();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-7 py-4 flex justify-between items-center">
          <div className="flex flex-row items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={icon} alt="ITea Lab Logo" className="h-15 w-auto" />
              <span className="font-bold text-xl">iTea Lab</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#about"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="#join_lab"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Join Us
            </Link>
          </nav>
        </div>
        <Language_Selector />
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex space-x-8 mb-4 md:mb-0">
              <Link
                to="#career"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                {t("nav.career")}
              </Link>
              <Link
                to="#graduates"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                {t("nav.newGraduates")}
              </Link>
            </nav>
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-gray-500">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
