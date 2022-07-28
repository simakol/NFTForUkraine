import { useTranslation } from "react-i18next";

import "./index.sass";

export default function MintItem(props) {
  const { t } = useTranslation();

  const { maxAmount, availableAmount, price, imgRoute, status, referLink } =
    props;
  return (
    <div className="mint-item">
      <img src={imgRoute} alt={`${status} ntf`} className="nft-image" />
      <p className="mint-amount">
        {availableAmount}/{maxAmount}
      </p>
      <span className="mint-price currency">{price}</span>
      <a className="mint-btn" href={referLink} target="_blank" rel="noreferrer">
        {t("main_page.global.buy_button")}
      </a>
    </div>
  );
}
