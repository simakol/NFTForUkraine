import Header from "../../components/header";
import Footer from "../../components/footer";
import BackgroundTicker from "../../components/backgroundTicker";
import MintItem from "../../components/mintItem";
import Slider from "../../components/slider";
import CustomLink from "../../components/CustomLink/index";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./index.sass";

// NFTs images
import commonNFT from "../../assets/images/nfts/common.png";
import rareNFT from "../../assets/images/nfts/rare.png";
import legendNFT from "../../assets/images/nfts/legend.png";

export default function MainPage() {
  const { t } = useTranslation();

  const images = [];
  const imagesAmount = 23;

  for (let i = 1; i <= imagesAmount; i++) {
    let img = "";
    try {
      img = require(`../../assets/images/slidersImgs/${i}.jpg`);
    } catch (e) {
      try {
        img = require(`../../assets/images/slidersImgs/${i}.png`);
      } catch (e) {
        continue;
      }
    }
    images.push(img);
  }

  let imagesCopy = [...images];

  const firstSliderImgs = imagesCopy.splice(
    0,
    Math.floor(imagesCopy.length / 2)
  );

  const secondSliderImgs = imagesCopy;

  const mintsArray = [
    <MintItem
      maxAmount={10000}
      availableAmount={10000}
      price={10}
      imgRoute={commonNFT}
      status={"common"}
      referLink={"https://google.com"}
    />,
    <MintItem
      maxAmount={5000}
      availableAmount={5000}
      price={100}
      imgRoute={rareNFT}
      status={"rare"}
      referLink={"https://google.com"}
    />,
    <MintItem
      maxAmount={1000}
      availableAmount={1000}
      price={1000}
      imgRoute={legendNFT}
      status={"legend"}
      referLink={"https://google.com"}
    />,
  ];

  return (
    <>
      <BackgroundTicker />
      <Header />
      <div className="main-page">
        <section className="main-page-hero" name="home">
          <div className="main-page-hero-wrapper">
            <h1 className="main-page-hero-title">
              {t("main_page.hero.title")}
            </h1>
            <CustomLink
              linkText={t("main_page.global.buy_button")}
              anchor="mint"
              activeStyles=""
              styles="main-page-hero-button"
            />
          </div>
        </section>
        <Slider images={firstSliderImgs} reverseDirection={true} />
        <section className="about-us container" name="us">
          <h2 className="about-us-title section-title">
            {t("main_page.about_us.title")}
          </h2>
          <p className="about-us-text section-text">
            {t("main_page.about_us.text1")}
            <br />
            <br />
            {t("main_page.about_us.text2")}
          </p>
        </section>
        <Slider images={secondSliderImgs} reverseDirection={false} />
        <section className="mint container" name="mint">
          <h2 className="mint-title section-title">
            {t("main_page.mint.title")}
          </h2>
          <p className="mint-text section-text">{t("main_page.mint.text")}</p>
          <div className="mints-wrapper">
            {mintsArray.map((el, i) => (
              <div key={i}>{el}</div>
            ))}
          </div>

          <Swiper
            className="mints-slider"
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
            }}
            navigation={true}
            speed={2000}>
            {mintsArray.map((el, i) => (
              <SwiperSlide key={i}>{el}</SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="results container" name="results">
          <h2 className="results-title section-title">
            {t("main_page.results.title")}
          </h2>
          <p className="results-text section-text">
            {t("main_page.results.text1")}

            <br />
            <br />
            {t("main_page.results.text2")}
          </p>
          <h2 className="results-donation donation">
            {t("main_page.donated.main_text")}:
            <span className="currency">{1150}</span>
          </h2>
          <h3 className="results-donation-subtitle donation">
            ({t("main_page.donated.subtext")})
          </h3>
        </section>
      </div>

      <Footer />
    </>
  );
}
