import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "../language-context";
import Language_Selector from "./Language_Selector";
import MobileMenu from "./Mobile_Menu";
import icon from "../assets/icon_transparent.png";

export default function Layout() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // console.log("isMenuOpen:", isMenuOpen);
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-sm shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container px-7 mx-auto md:px-[6rem] py-4 flex justify-between items-center">
          <div className="flex flex-row items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={icon}
                alt="ITea Lab Logo"
                className={`h-15 w-auto ${scrolled ? "" : "opacity-0"}`}
              />
              <span
                className={`font-bold text-xl ${
                  scrolled ? "text-[#004243]" : "hidden"
                }`}
              >
                ITea Lab
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-[#004243]">
            <a
              href="#about"
              className="text-lg font-medium hover:text-black transition-colors"
            >
              ABOUT
            </a>
            <Link
              to="/projects"
              className="text-lg font-medium hover:text-black transition-colors"
            >
              PROJECTS
            </Link>
            <Link
              to="#join_lab"
              className="text-lg font-bold hover:text-black transition-colors"
            >
              JOIN US
            </Link>
          </nav>
          <label
            className="md:hidden flex items-center burger"
            htmlFor="burger"
          >
            <input type="checkbox" id="burger" onClick={toggleMenu} checked={isMenuOpen}></input>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <Language_Selector scrolled={scrolled} />
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onToggle={toggleMenu}/>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="w-full bg-[#e7f3ea] relative overflow-hidden">
        {/* Curved top border effect */}
        <div className="w-full h-[3rem] bg-white rounded-b-[100%] transform translate-y-0"></div>

        <div className="container mx-auto px-7 py-8 flex flex-col md:flex-row justify-around items-start relative z-10">
          {/* Left section - Brand */}
          <div className="mb-6 md:mb-0 px-4 md:px-8 flex-grow md:flex-grow-0">
            <h2 className="text-4xl font-bold text-[#004243]">ITea Lab</h2>
            <p className="text-[#004243] mt-2">{t("hero.tagline")}</p>
            <div className="mt-12">
              <p className="text-[#004243]">© 2025 ITea Lab Team.</p>
            </div>
          </div>

          {/* Right section - Contact */}
          <div className="text-[#004243] px-4 md:px-8 flex-grow md:flex-grow-0">
            <h3 className="text-2xl font-bold mb-4">Contact us</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <a
                  href="mailto:contact.itealab@gmail.com"
                  className="hover:text-[#006a6c]"
                >
                  contact.itealab@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://linkedin.com/company/itealab"
                  className="hover:text-[#006a6c]"
                >
                  ITea Lab
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://facebook.com/itealab"
                  className="hover:text-[#006a6c]"
                >
                  ITea Lab
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0rem] right-[-7rem] md:bottom-[] md:right-[-11rem] lg:bottom-[0rem] lg:right-[-10rem] w-[20rem] h-[15rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[15rem] z-0">
            <img src={icon} className="opacity-70"></img>
          </div>
        </div>
      </footer>
    </>
  );
}
