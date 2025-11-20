"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./LangSwitch";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

export default function Navbar() {
  const t = useTranslations("Navbar");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 outline-none ${
        isScrolled ? "px-4 py-2" : ""
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-6 py-3 shadow-lg"
            : "px-4 sm:px-6 py-4 border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="md:flex-1">
            <Link href="/" className="text-lg sm:text-xl font-bold text-white ">
              Amirreza
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 mr-6">
            <Button
              variant="link"
              onClick={() => scrollToSection("about")}
              className="nav-item text-white/75 hover:text-white transition-colors relative cursor-pointer"
              aria-label="Navigate to about section"
            >
              {t("about")}
            </Button>
            <Button
              variant="link"
              onClick={() => scrollToSection("experince")}
              className="nav-item text-white/75 hover:text-white transition-colors relative cursor-pointer"
              aria-label="Navigate to about section"
            >
              {t("experince")}
            </Button>
            <Button
              variant="link"
              onClick={() => scrollToSection("project")}
              className="nav-item text-white/75 hover:text-white transition-colors relative cursor-pointer"
              aria-label="Navigate to project section"
            >
              {t("projects")}
            </Button>

            <Button
              variant="link"
              onClick={() => scrollToSection("contact")}
              className="nav-item text-white/75 hover:text-white transition-colors relative cursor-pointer"
              aria-label="Navigate to contact section"
            >
              {t("contact")}
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="secondary"
              asChild
              className="flex items-center space-x-2"
            >
              <a
                href="/amirrezamh.pdf"
                download="amirrezamh.pdf"
                className="flex items-center space-x-2"
              >
                <span className="text-sm font-medium">{t("resume")}</span>
                <Download className="w-4 h-4" />
              </a>
            </Button>
            <LocaleSwitcher />
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <LocaleSwitcher />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 transition-colors glass p-2 rounded-lg"
              aria-label={
                isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4" role="menu">
            <div className="flex flex-col space-y-4 text-center">
              <Button
                variant="link"
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
                aria-label="Navigate to about section"
              >
                {t("about")}
              </Button>
              <Button
                variant="link"
                onClick={() => scrollToSection("portfolio")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
                aria-label="Navigate to portfolio section"
              >
                {t("projects")}
              </Button>

              <Button
                variant="link"
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
                aria-label="Navigate to contact section"
              >
                {t("contact")}
              </Button>
              <Button
                variant="secondary"
                asChild
                className="flex items-center justify-center space-x-2 w-full"
                role="menuitem"
              >
                <a
                  href="/amirrezamh.pdf"
                  download="amirrezamh.pdf"
                  className="flex items-center space-x-2 w-full justify-center"
                >
                  <span>{t("resume")}</span>
                  <Download className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
