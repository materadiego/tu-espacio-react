import scrollFunction from "../../utils/animation-scroll-function";

export default function HomeYourHouse(scrollFunction) {
  return (
    <div className="HomeYourHouse">
      <div className="HomeYourHouseContainer">
        <div className="HomeYourHouseContainer__ImageContainer animate AnimatedImageContainer1">
          <div className="HomeYourHouseContainer__ImageContainer--Image"></div>

          <div className="HomeYourHouseContainer__ImageContainer--Square animate AnimatedSquare1"></div>
        </div>
        <div className="HomeYourHouseContainer__Content animate AnimatedContent1">
          <p className="HomeYourHouseContainer__Content--Title animate AnimatedText">
            TU CASA,
          </p>
          <p className="HomeYourHouseContainer__Content--Title animate AnimatedText">
            COMO SIEMPRE
          </p>
          <p className="HomeYourHouseContainer__Content--Title animate AnimatedText">
            LA SOÑASTE
          </p>
          <p className="HomeYourHouseContainer__Content--Text animate AnimatedText">
            Juntas te ayudaremos a lograr tu espacio ideal en el cual te sientas
            feliz, orgulloso e identificado.
          </p>
        </div>
      </div>
    </div>
  );
}
