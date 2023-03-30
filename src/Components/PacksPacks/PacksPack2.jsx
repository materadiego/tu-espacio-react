import RadialCheck2 from "../../assets/packs-radial2.png";
import PackImage from "../../assets/packs-bgpack2.webp";
import scrollFunction from "../../utils/animation-scroll-function";

export default function PacksPack2(scrollFunction) {
  return (
    <div className="PacksPacks Pack2">
      <div className="Packs-Id-Container" id="Pack02"></div>

      <div className="PacksTitleContainer PacksContainerLeft">
        {/* TITLE CONTAINER */}
        <div className="PacksTitleContainer__Subcontainer PacksSubcontainerLeft">
          <img
            className="PacksTitleContainer__Subcontainer--Image  animate AnimatedOpacity"
            src={RadialCheck2}
            alt="First-Pack"
          ></img>
          <p className="PacksTitleContainer__Subcontainer--Pack  animate AnimatedOpacity">
            PACK 02
          </p>
        </div>
        <p className="PacksTitleContainer__Title PacksTitleRight Color-Brown  animate AnimatedOpacity">
          ASESORÍA
        </p>
        <img
          className="PacksTitleContainer__Image PackImageLeft"
          src={PackImage}
          alt="Bg-Img"
        ></img>
        <div className="PacksTitleContainer__Line"></div>

        <p className="PacksTitleContainer__Text PacksTextRight PacksText2  animate AnimatedOpacity">
          Por medio de 2 videollamadas co-creamos tu proyecto{" "}
          <span className="Color-Brown ">a medida</span> para que lo ejecutes
          vos mismo sin gastar tiempo ni dinero extra.
        </p>
      </div>
      {/* INCLUDED */}
      <p className="PacksIncludes Bg-Brown">¿QUÉ INCLUYE?</p>
      <div className="PacksDescriptions  animate AnimatedOpacity">
        <p className="PacksDescriptions__Text PackDescriptions--Check2">
          Plano de distribución.
        </p>
        <p className="PacksDescriptions__Text PackDescriptions--Check2">
          Imágenes realistas
        </p>
        <p className="PacksDescriptions__Text PackDescriptions--Check2">
          Especificaciones generales
        </p>
      </div>
    </div>
  );
}
