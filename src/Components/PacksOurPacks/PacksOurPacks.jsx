import BoxCheck from "../../assets/packs-checkpackbox.svg";
import BoxPresent from "../../assets/packs-presenticon.png";
import CheckPack1 from "../../assets/packs-checkpack1.svg";
import CheckPack2 from "../../assets/packs-checkpack2.svg";
import CheckPack3 from "../../assets/packs-checkpack3.svg";
import PacksArrowDown from "../../assets/arrow-down-g.png";
import scrollFunction from "../../utils/animation-scroll-function";

export default function PacksOurPacks(scrollFunction) {
  return (
    <div className="PacksOurPacks">
      <div className="PacksOurPacksContainer">
        {/* GREY BOX */}
        <div className="PacksOurPacksContainer__Box animate PacksBox">
          <img
            src={BoxCheck}
            alt="Check-Icon"
            className="PacksOurPacksContainer__Box--CheckIcon"
          ></img>
          <p className="PacksOurPacksContainer__Box--Title animate AnimatedOpacity">
            JUNTOS PODEMOS CREAR EL ESPACIO QUE SIEMPRE QUISISTE
          </p>
          <img
            src={BoxPresent}
            alt="Present-Icon"
            className="PacksOurPacksContainer__Box--PresentIcon animate AnimatedOpacity"
          ></img>
          <div className="PacksOurPacksContainer__Box--Line animate AnimatedOpacity"></div>
          <p className="PacksOurPacksContainer__Box--Text animate AnimatedOpacity">
            Ofrecemos distintos packs para que elijas el que mejor se adapte a
            lo que estás buscando.
          </p>
        </div>
        {/* PACK 01 */}
        <div className="PacksOurPacksContainer__ButtonContainer">
          <a
            href="#Pack01"
            className="PacksOurPacksContainer__ButtonContainer--Link PacksButton1"
          >
            <p className="PacksButton">PACK 01</p>
          </a>
          <img
            src={CheckPack1}
            alt="Check-Icon"
            className="PacksOurPacksContainer__ButtonContainer--Image"
          ></img>
        </div>
        {/* PACK 02 */}
        <div className="PacksOurPacksContainer__ButtonContainer">
          <a
            href="#Pack02"
            className="PacksOurPacksContainer__ButtonContainer--Link PacksButton2"
          >
            <p className="PacksButton ">PACK 02</p>
          </a>
          <img
            src={CheckPack2}
            alt="Check-Icon"
            className="PacksOurPacksContainer__ButtonContainer--Image"
          ></img>
        </div>
        {/* RECOMENDED TEXT */}
        <div className="PacksOurPacksContainer__Recomended animate AnimatedOpacity">
          <p className="PacksOurPacksContainer__Recomended--Text">
            ¡Nuestro pack
            <span> recomendado!</span>
          </p>
          <img
            className="PacksOurPacksContainer__Recomended--Arrow"
            src={PacksArrowDown}
            alt="Arrow-Down"
          ></img>
        </div>
        {/* PACK 03 */}
        <div className="PacksOurPacksContainer__ButtonContainer">
          <a
            href="#Pack03"
            className="PacksOurPacksContainer__ButtonContainer--Link PacksButton3"
          >
            <p className="PacksButton ">PACK 03</p>
          </a>
          <img
            src={CheckPack3}
            alt="Check-Icon"
            className="PacksOurPacksContainer__ButtonContainer--Image"
          ></img>
        </div>
      </div>
    </div>
  );
}
