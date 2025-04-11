"use client";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../language-context";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { language, setLanguage, t } = useLanguage();

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
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-bold">Itea Lab</h2>
            <label
              className="p-1 rounded-full hover:bg-gray-100 burger"
              htmlFor="burger"
            >
              <input type="checkbox" id="burger" onClick={onClose} checked></input>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="#career"
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={onClose}
                >
                  {t("nav.career")}
                </Link>
              </li>
              <li>
                <Link
                  to="#graduates"
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={onClose}
                >
                  {t("nav.newGraduates")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
