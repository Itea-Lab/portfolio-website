import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "../language-context";
import Language_Selector from "./Language_Selector";
import MobileMenu from "./Mobile_Menu";
import { Github, Facebook, Linkedin, Mail} from "lucide-react";
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
                className={`h-15 w-auto transition-opacity duration-300 ${
                  scrolled ? "" : "opacity-0"
                }`}
              />
              <span
                className={`font-bold text-xl transition-opacity duration-300 ${
                  scrolled ? "text-[#004243]" : "opacity-0"
                }`}
              >
                ITea Lab
              </span>
            </Link>
          </div>

          <nav
            className={`hidden md:flex items-center text-[#44a3a2] ${
              scrolled
                ? "divide-x divide-[transparent]"
                : "divide-x divide-[#44a3a2]"
            }`}
          >
            <a
              href="#about"
              className="text-lg px-4 font-medium hover:text-[#004243] transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#community"
              className="text-lg px-4 font-medium hover:text-[#004243] transition-colors"
            >
              COMMUNITY
            </a>
            <a
              href="#joinUs"
              className="text-lg px-4 font-bold hover:text-[#004243] transition-colors"
            >
              JOIN US
            </a>
          </nav>
          {/* <label
            className="md:hidden flex items-center burger"
            htmlFor="burger"
          >
            <input
              type="checkbox"
              id="burger"
              onClick={toggleMenu}
              checked={isMenuOpen}
              aria-label="toogle menu"
            ></input>
            <span></span>
            <span></span>
            <span></span>
          </label> */}
          {/* <div className="md:hidden flex items-center relative z-[1000]">
            <label
              className="p-1 rounded-full hover:bg-gray-100 burger"
              htmlFor="burger"
            >
              <input
                type="checkbox"
                id="burger"
                onClick={toggleMenu}
                checked={isMenuOpen}
                onChange={() => {}}
                aria-label="toggle menu"
              ></input>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div> */}
        </div>
        <Language_Selector scrolled={scrolled} />
      </header>
      <div className="md:hidden fixed top-10 right-12 z-[60]">
        <label
          className="p-1 rounded-full hover:bg-gray-100 burger"
          htmlFor="burger"
        >
          <input
            type="checkbox"
            id="burger"
            onClick={toggleMenu}
            checked={isMenuOpen}
            onChange={() => {}}
            aria-label="toggle menu"
          ></input>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onToggle={toggleMenu}
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="w-full bg-[#e7f3ea] relative overflow-hidden">
        {/* Curved top border effect */}
        <div className="w-full h-[3rem] bg-[#F9FAFB] rounded-b-[100%] transform translate-y-0"></div>

        <div className="container mx-auto px-7 py-8 flex flex-col md:flex-row justify-around items-start relative z-10">
          {/* Left section - Brand */}
          <div className="mb-6 md:mb-0 px-4 md:px-8 flex-grow md:flex-grow-0">
            <h2 className="text-4xl font-bold text-[#004243]">ITea Lab</h2>
            <p className="text-[#004243] mt-2">{t("hero.tagline")}</p>
            <div className="flex space-x-4 mt-6 text-[#004243]">
              <Link to="#" className="hover:text-[#006a6c] transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link to="#" className="hover:text-[#006a6c] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="hover:text-[#006a6c] transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link to="#" className="hover:text-[#006a6c] transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          {/* Middle section - Explore  */}
          <div className="mb-6 md:mb-0 text-[#004243] px-4 md:px-8 flex-grow md:flex-grow-0">
            <h3 className="text-2xl font-bold mb-4">Explore</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <a href="#about" className="hover:text-[#006a6c]">
                  About
                </a>
              </div>
              <div className="flex items-center">
                <a href="#community" className="hover:text-[#006a6c]">
                  Community
                </a>
              </div>
              <div className="flex items-center">
                <a href="#joinUs" className="hover:text-[#006a6c]">
                  Join Us
                </a>
              </div>
            </div>
          </div>
          {/* Middle section - Community  */}
          <div className="mb-6 md:mb-0 text-[#004243] px-4 md:px-8 flex-grow md:flex-grow-0">
            <h3 className="text-2xl font-bold mb-4">Community</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <a href="#about" className="hover:text-[#006a6c]">
                  Github
                </a>
              </div>
              <div className="flex items-center">
                <a href="#community" className="hover:text-[#006a6c]">
                  Facebook
                </a>
              </div>
              <div className="flex items-center">
                <a href="#joinUs" className="hover:text-[#006a6c]">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          {/* Right section - Contact */}
          <div className="mb-6 md:mb-0 text-[#004243] px-4 md:px-8 flex-grow md:flex-grow-0">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Link
                  to="mailto:contact.itealab@gmail.com"
                  className="hover:text-[#006a6c]"
                >
                  contact.itealab@gmail.com
                </Link>
              </div>
              <div className="flex items-center">
                <p className="hover:text-[#006a6c] w-[70%] md:w-[80%]">
                  A35 Bach Dang street, ward 14, Tan Binh district, Ho Chi Minh
                  city, Vietnam
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0rem] right-[-7rem] md:bottom-[] md:right-[-11rem] lg:bottom-[0rem] lg:right-[-10rem] w-[20rem] h-[15rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[15rem] z-0">
            <img src={icon} className="opacity-70" alt="lab_icon"></img>
          </div>
        </div>
        {/* <div className="mx-auto py-3 w-[83%] md:w-[88%] flex flex-row justify-start items-center border-t border-mint-200 transition-opacity duration-700">
          <p className="text-[#004243]">© 2025 ITea Lab Team.</p>
        </div> */}
      </footer>
    </>
  );
}
