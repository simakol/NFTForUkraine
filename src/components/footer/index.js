import { useTranslation } from "react-i18next";
import "./index.sass";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="footer-link">
        <img
          src={require("../../assets/images/twitter-icon.png")}
          alt="Twitter"
        />
      </a>
      <span className="footer-copyright">
        2022 NFTForUkraine.com.ua. {t("main_page.copyright")}
      </span>
    </footer>
  );
}
