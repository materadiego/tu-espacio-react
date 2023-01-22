import BoxCheck from "../../assets/packs-checkpackbox.png";
import BoxPresent from "../../assets/packs-presenticon.png";
import CheckPack1 from "../../assets/packs-checkpack1.png";
import CheckPack2 from "../../assets/packs-checkpack2.png";
import CheckPack3 from "../../assets/packs-checkpack3.png";
import PacksArrowDown from "../../assets/arrow-down-g.png";

export default function PacksOurPacks() {
  return (
    <div className="PacksOurPacks">
      <div className="PacksOurPacksContainer">
        {/* GREY BOX */}
        <div className="PacksOurPacksContainer__Box">
          <img
            src={BoxCheck}
            alt="Check-Icon"
            className="PacksOurPacksContainer__Box--CheckIcon"
          ></img>
          <p className="PacksOurPacksContainer__Box--Title">
            JUNTOS PODEMOS CREAR EL ESPACIO QUE SIEMPRE QUISISTE
          </p>
          <img
            src={BoxPresent}
            alt="Present-Icon"
            className="PacksOurPacksContainer__Box--PresentIcon"
          ></img>
          <div className="PacksOurPacksContainer__Box--Line"></div>
          <p className="PacksOurPacksContainer__Box--Text">
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
        <div className="PacksOurPacksContainer__Recomended">
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
