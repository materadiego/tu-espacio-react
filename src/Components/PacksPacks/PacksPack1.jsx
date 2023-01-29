import RadialCheck1 from "../../assets/packs-radial1.png";
import PackImage from "../../assets/packs-bgpack1.webp";

export default function PacksPack1() {
  return (
    <div className="PacksPacks Pack1">
      <div className="Packs-Id-Container" id="Pack01"></div>
      <div className="PacksTitleContainer PacksContainerRight">
        {/* TITLE CONTAINER */}
        <div className="PacksTitleContainer__Subcontainer PacksSubcontainerRight">
          <img
            className="PacksTitleContainer__Subcontainer--Image"
            src={RadialCheck1}
            alt="First-Pack"
          ></img>
          <p className="PacksTitleContainer__Subcontainer--Pack">PACK 01</p>
        </div>
        <p className="PacksTitleContainer__Title Color-Grey">LLUVIA DE IDEAS</p>
        <img
          className="PacksTitleContainer__Image PackImageRight"
          src={PackImage}
          alt="Bg-Img"
        ></img>
        <div className="PacksTitleContainer__Line"></div>
        <p className="PacksTitleContainer__Text PacksTextLeft">
          Por medio de una <span className="Color-Grey">videollamada</span> nos
          conoceremos para poder entregarte una lluvia de ideas y así
          encaminarte a lograr tu espacio ideal.
        </p>
      </div>
      {/* INCLUDED */}
      <p className="PacksIncludes Bg-Grey">¿QUÉ INCLUYE?</p>
      <div className="PacksDescriptions">
        <p className="PacksDescriptions__Text PackDescriptions--Check1">
          1 videollamada via Google Meet.
        </p>
        <p className="PacksDescriptions__Text PackDescriptions--Check1">
          1 archivo PDF con la lluvia de ideas (paleta de colores, materiales,
          imágenes de referencia, estilos)
        </p>
      </div>
    </div>
  );
}
