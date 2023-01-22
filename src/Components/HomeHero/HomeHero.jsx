import HeroImage from "../../assets/home-hero.webp";
import ArrowDown from "../../assets/arrow-down.png";
import Wsp from "../../assets/redes-wsp.png";
import Ig from "../../assets/redes-ig.png";
import Fb from "../../assets/redes-fb.png";

export default function HomeHero() {
  return (
    <div className="HomeHero">
      <div className="HomeHeroContainer">
        {/* HERO CONTENT */}
        <div className="HomeHeroContainer__Content">
          {/* HERO TITLE CONTAINER */}
          <div className="HomeHeroContainer__Content--Title">
            <p className="HomeHeroTitle HomeHeroTitle-Line1">diseñamos</p>
            <h1 className="HomeHeroTitle HomeHeroTitle-Line2">tu espacio</h1>
            <p className="HomeHeroTitle HomeHeroTitle-Line3">a tu medida</p>
          </div>
          {/* HERO DESCRIPTION */}
          <p className="HomeHeroContainer__Content--Description">
            Packs pensados para que renueves tu hogar a tu tiempo y con tu
            presupuesto.
          </p>
          {/* HERO BUTTON MORE */}
          <div className="HomeHeroContainer__Content--Button">
            <p>Conocé más</p>
            <img src={ArrowDown} alt="Flecha"></img>
          </div>
        </div>
        <div className="HomeHeroContainer__Bottom">
          <div className="HomeHeroContainer__Bottom--Square"></div>
        </div>
        <div className="HomeHeroContainer__ImageContainer">
          <img
            src={HeroImage}
            alt="HeroImage"
            className="HomeHeroContainer__ImageContainer--Image"
          ></img>
        </div>
        <div className="HomeHeroContainer__SocialMedia">
          <a
            href="https://www.instagram.com/tuespacio/"
            target={"_blank"}
            rel="noreferrer"
            className="HomeHeroContainer__SocialMedia--Link"
          >
            <img src={Ig} alt="" className="SocialMedia--Image ig"></img>
          </a>
          <a
            href="https://www.facebook.com"
            target={"_blank"}
            rel="noreferrer"
            className="HomeHeroContainer__SocialMedia--Link"
          >
            <img src={Fb} alt="" className="SocialMedia--Image fb"></img>
          </a>
          <a
            href="https://www.instagram.com/tuespacio/"
            target={"_blank"}
            rel="noreferrer"
            className="HomeHeroContainer__SocialMedia--Link"
          >
            <img src={Wsp} alt="" className="SocialMedia--Image wsp"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
