import Wsp from "../../assets/redes-wsp.svg";
import Ig from "../../assets/redes-ig.svg";
import Fb from "../../assets/redes-fb.svg";

export default function PacksHero() {
  return (
    <div className="PacksHero">
      {/* DESKTOP OVERLAY */}
      <div className="PacksHero__Overlay"></div>
      {/* TEXT CONTAINER */}
      <div className="PacksHeroContainer">
        <p className="PacksHeroContainer__Title">PACKS</p>
        <p className="PacksHeroContainer__Subtitle">ELEGÍ TU PACK IDEAL</p>
      </div>
      {/* SOCIAL MEDIA */}
      <div className="PacksHeroContainer__SocialMedia">
        <a
          href="https://www.instagram.com/tuespacio/"
          target={"_blank"}
          rel="noreferrer"
          className="PacksHeroContainer__SocialMedia--Link"
        >
          <img src={Ig} alt="" className="SocialMedia--Image ig"></img>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100078257949083&mibextid=LQQJ4d"
          target={"_blank"}
          rel="noreferrer"
          className="PacksHeroContainer__SocialMedia--Link"
        >
          <img src={Fb} alt="" className="SocialMedia--Image fb"></img>
        </a>
        <a
          href="https://wa.me/5493813435833"
          target={"_blank"}
          rel="noreferrer"
          className="PacksHeroContainer__SocialMedia--Link"
        >
          <img src={Wsp} alt="" className="SocialMedia--Image wsp"></img>
        </a>
      </div>
    </div>
  );
}
