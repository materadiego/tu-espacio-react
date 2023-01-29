import RadialCheck2 from "../../assets/packs-radial2.png";
import PackImage from "../../assets/packs-bgpack2.webp";

export default function PacksPack2() {
  return (
    <div className="PacksPacks Pack2">
      <div className="Packs-Id-Container" id="Pack02"></div>

      <div className="PacksTitleContainer PacksContainerLeft">
        {/* TITLE CONTAINER */}
        <div className="PacksTitleContainer__Subcontainer PacksSubcontainerLeft">
          <img
            className="PacksTitleContainer__Subcontainer--Image"
            src={RadialCheck2}
            alt="First-Pack"
          ></img>
          <p className="PacksTitleContainer__Subcontainer--Pack">PACK 02</p>
        </div>
        <p className="PacksTitleContainer__Title PacksTitleRight Color-Brown">
          ASESORÍA
        </p>
        <img
          className="PacksTitleContainer__Image PackImageLeft"
          src={PackImage}
          alt="Bg-Img"
        ></img>
        <div className="PacksTitleContainer__Line"></div>

        <p className="PacksTitleContainer__Text PacksTextRight">
          Por medio de 2 videollamadas co-creamos tu{" "}
          <span className="Color-Brown "> proyecto a medida</span> para que lo
          ejecutes vos mismo sin gastar tiempo ni dinero extra.
        </p>
      </div>
      {/* INCLUDED */}
      <p className="PacksIncludes Bg-Brown">¿QUÉ INCLUYE?</p>
      <div className="PacksDescriptions">
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
