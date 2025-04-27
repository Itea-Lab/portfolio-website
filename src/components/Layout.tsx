import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "../language-context";
import Language_Selector from "./Language_Selector";
import MobileMenu from "./Mobile_Menu";
import { Github, Facebook, Linkedin, Mail } from "lucide-react";
import logo from "../assets/icon_transparent.png";
import icon from "../assets/clipart_leaf.svg";

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
        <div className="container px-7 mx-auto md:px-[6rem] flex justify-between items-center">
          <div className="flex flex-row items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
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
            className={`hidden md:flex items-center text-[#74A173] ${
              scrolled
                ? "divide-x divide-[transparent]"
                : "divide-x divide-[#44a3a2]"
            }`}
          >
            <a
              href="#about"
              className="text-lg px-4 font-medium hover:text-[#004243] transition-colors"
            >
              {t("nav.about")}
            </a>
            <a
              href="#community"
              className="text-lg px-4 font-medium hover:text-[#004243] transition-colors"
            >
              {t("nav.community")}
            </a>
            <a
              href="#news"
              className="text-lg px-4 font-medium hover:text-[#004243] transition-colors"
            >
              {t("nav.news")}
            </a>
            <a
              href="#joinUs"
              className="text-lg px-4 font-bold hover:text-[#004243] transition-colors"
            >
              {t("nav.joinUs")}
            </a>
          </nav>
        </div>
        <Language_Selector scrolled={scrolled} />
      </header>
      <div className="md:hidden fixed top-6 right-12 z-[60]">
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
      <footer className="w-full bg-[#74A173] relative overflow-hidden">
        {/* Curved top border effect */}
        <div className="w-full h-[3rem] bg-[#F9FAFB] rounded-b-[100%] transform translate-y-0"></div>

        <div className="container mx-auto px-7 py-8 text-white flex flex-col md:flex-row justify-around items-start relative z-10">
          {/* Left section - Brand */}
          <div className="mb-6 md:mb-0 px-4 md:px-8 flex-grow md:flex-grow-0">
            <h2 className="text-4xl font-bold">ITea Lab</h2>
            <p className="text-white mt-2">{t("hero.tagline")}</p>
            <div className="flex space-x-4 mt-6">
              <Link to="#" className="transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link to="#" className="transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link to="#" className="transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          {/* Middle section - Explore  */}
          <div className="mb-6 md:mb-0 px-4 md:px-8 flex-grow md:flex-grow-0">
            <h3 className="text-2xl font-bold mb-4">Explore</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <a href="#about">About</a>
              </div>
              <div className="flex items-center">
                <a href="#community">Community</a>
              </div>
              <div className="flex items-center">
                <a href="#joinUs">Join Us</a>
              </div>
            </div>
          </div>
          {/* Middle section - Community  */}
          <div className="mb-6 md:mb-0 px-4 md:px-8 flex-grow md:flex-grow-0">
            <h3 className="text-2xl font-bold mb-4">Community</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Link to="https://github.com/Itea-Lab">Github</Link>
              </div>
              <div className="flex items-center">
                <Link to="https://www.facebook.com/ITeaLabTeam">Facebook</Link>
              </div>
              <div className="flex items-center">
                <Link to="https://www.linkedin.com/company/itea-lab">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
          {/* Right section - Contact */}
          <div className="mb-6 md:mb-0 px-4 md:px-8 flex-grow md:flex-grow-0">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Link to="mailto:contact.itealab@gmail.com">
                  contact.itealab@gmail.com
                </Link>
              </div>
              <div className="flex items-center">
                <p className="w-[70%] md:w-[80%]">
                  A35 Bach Dang street, Tan Binh district, Ho Chi Minh
                  city, Vietnam
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0rem] right-[-7rem] md:bottom-[] md:right-[-11rem] lg:bottom-[0rem] lg:right-[-10rem] w-[20rem] h-[15rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[15rem] z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="230"
              height="320"
              viewBox="0 0 65 90"
              fill="none"
            >
              <path
                d="M9.76426 0C9.76426 0 17.1691 7.18412 25.1775 10.0805C84.482 31.5312 59.4707 73.3326 58.6548 73.4704C58.6548 73.4704 55.3293 67.6792 50.837 64.376C22.331 43.4199 16.5372 19.2984 16.5372 19.2984C16.5372 19.2984 22.9339 48.3243 48.2943 66.385C53.8955 70.3719 57.6882 80.1885 59.2936 90C59.2936 90 55.3232 88.3958 53.6159 87.9613C52.9501 83.6167 51.5581 79.4564 49.2048 75.74C13.7606 79.96 2.152 51.3996 0.63549 41.4408C-2.94384 17.9203 9.76426 0 9.76426 0Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>
        {/* <div className="mx-auto py-3 w-[83%] md:w-[88%] flex flex-row justify-start items-center border-t border-mint-200 transition-opacity duration-700">
          <p className="text-[#004243]">© 2025 ITea Lab Team.</p>
        </div> */}
      </footer>
    </>
  );
}
