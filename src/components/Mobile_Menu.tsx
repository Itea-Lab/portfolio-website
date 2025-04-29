import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../language-context";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    navigate("/", { state: { scrollTo: sectionId } });
  };

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Restore scrolling when menu is closed
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
        onClick={onClose}
        aria-hidden="true"
        style={{ opacity: isOpen ? 1 : 0 }}
      />

      {/* Sidebar */}
      <div
        className="absolute top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out py-4 px-7"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="mt-16"></div>
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-[#004243]">ITea Lab</span>
            </Link>
            {/* <label
              className="p-1 rounded-full hover:bg-gray-100 burger"
              htmlFor="burger"
            >
              <input
                type="checkbox"
                id="burger"
                onClick={onClose}
                onChange={onToggle}
                checked={isOpen}
              ></input>
              <span></span>
              <span></span>
              <span></span>
            </label> */}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-4 text-[#74A173] cursor-pointer">
              <li>
                <a
                  className="block py-2 font-medium hover:text-[#004243] transition-colors"
                  onClick={() => {
                    handleNavigation("about");
                    onClose();
                  }}
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  className="block py-2 font-medium hover:text-[#004243] transition-colors"
                  onClick={() => {
                    handleNavigation("community");
                    onClose();
                  }}
                >
                  {t("nav.community")}
                </a>
              </li>
              <li>
                <a
                  className="block py-2 font-medium hover:text-[#004243] transition-colors"
                  onClick={() => {
                    handleNavigation("news");
                    onClose();
                  }}
                >
                  {t("nav.news")}
                </a>
              </li>
              <li>
                <a
                  className="block py-2 font-medium hover:text-[#004243] transition-colors"
                  onClick={() => {
                    handleNavigation("joinUs");
                    onClose();
                  }}
                >
                  {t("nav.joinUs")}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
