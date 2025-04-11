"use client";

import { useLanguage } from "../language-context";
import { Link } from "react-router-dom";

export default function Community() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl text-[#004243] font-bold mb-8">
            {t("community.title")}
          </h2>

          <div className="mb-6">
            <p className="mb-2">{t("community.address")}</p>
          </div>

          <Link
            to="#"
            className="inline-flex items-center border border-[#004243] px-6 py-3 hover:bg-[#004243] hover:text-white transition-colors"
          >
            {t("community.link")}
          </Link>
        </div>
      </div>
    </section>
  );
}
