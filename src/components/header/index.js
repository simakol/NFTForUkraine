import "./index.sass";
import { useState, useEffect } from "react";
import CustomLink from "../CustomLink/index";
import LanguageFlags from "../languageFlags/index";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const { t } = useTranslation();

  const closeMenu = () => {
    setBurgerMenuOpen(false);
  };
  useEffect(() => {
    const bodyClasses = document.body.classList;
    isBurgerMenuOpen
      ? bodyClasses.add("menu-open")
      : bodyClasses.remove("menu-open");
  });

  return (
    <header className={`header ${isBurgerMenuOpen ? "active" : ""}`}>
      <div
        className={`burger-menu ${isBurgerMenuOpen ? "cross" : ""}`}
        onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}>
        <div className="burger-menu-bar"></div>
        <div className="burger-menu-bar"></div>
        <div className="burger-menu-bar"></div>
      </div>
      <nav
        onClick={closeMenu}
        className={`header-nav ${isBurgerMenuOpen ? "active" : ""}`}>
        <CustomLink
          clickFunc={closeMenu}
          linkText={t("main_page.header.firstLink")}
          anchor="home"
          activeStyles="header-nav-link-active"
          styles="header-nav-link"
        />
        <CustomLink
          clickFunc={closeMenu}
          linkText={t("main_page.header.secondLink")}
          anchor="us"
          activeStyles="header-nav-link-active"
          styles="header-nav-link"
        />
        <CustomLink
          clickFunc={closeMenu}
          linkText={t("main_page.header.thirdLink")}
          anchor="mint"
          activeStyles="header-nav-link-active"
          styles="header-nav-link"
        />
        <CustomLink
          clickFunc={closeMenu}
          linkText={t("main_page.header.fourthLink")}
          anchor="results"
          activeStyles="header-nav-link-active"
          styles="header-nav-link"
        />
      </nav>
      <LanguageFlags />
    </header>
  );
}
