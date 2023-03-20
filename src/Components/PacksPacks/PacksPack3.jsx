import RadialCheck3 from "../../assets/packs-radial3.png";
import PackImage from "../../assets/packs-bgpack3.webp";

export default function PacksPack3() {
  return (
    <div className="PacksPacks Pack3">
      <div className="Packs-Id-Container" id="Pack03"></div>

      <div className="PacksTitleContainer PacksContainerRight">
        {/* TITLE CONTAINER */}
        <div className="PacksTitleContainer__Subcontainer PacksSubcontainerRight">
          <img
            className="PacksTitleContainer__Subcontainer--Image animate AnimatedOpacity"
            src={RadialCheck3}
            alt="First-Pack"
          ></img>
          <p className="PacksTitleContainer__Subcontainer--Pack animate AnimatedOpacity">
            PACK 03
          </p>
        </div>
        <p className="PacksTitleContainer__Title PackTitle3 Color-Blue  animate AnimatedOpacity">
          PROYECTO A MEDIDA
        </p>
        <img
          className="PacksTitleContainer__Image PackImageRight"
          src={PackImage}
          alt="Bg-Img"
        ></img>
        <div className="PacksTitleContainer__Line"></div>

        <p className="PacksTitleContainer__Recomended  animate RecomendedPack">
          ¡Recomendado!
        </p>
        <p className="PacksTitleContainer__Text PacksTextLeft PacksText3  animate AnimatedOpacity">
          Por medio de videollamadas <br className="PacksMobile"></br>{" "}
          co-creamos tu proyecto a medida para que lo ejecutes vos mismo.
          <span className="Color-Blue">
            Es una ida y vuelta con el cliente, en el cual se tiene en cuenta
            cada detalle.
          </span>
        </p>
      </div>
      {/* INCLUDED */}
      <p className="PacksIncludes Bg-Blue">¿QUÉ INCLUYE?</p>
      <div className="PacksDescriptions  animate AnimatedOpacity">
        <p className="PacksDescriptions__Text  PackDescriptions--Check3">
          Plano de distribución.
        </p>
        <p className="PacksDescriptions__Text  PackDescriptions--Check3">
          Plano de mobiliarios a medida.
        </p>
        <p className="PacksDescriptions__Text  PackDescriptions--Check3">
          Links de proveedores.
        </p>
        <p className="PacksDescriptions__Text  PackDescriptions--Check3">
          Detalles de terminaciones como pintura, materiales, pisos,
          revestimientos.
        </p>
        <p className="PacksDescriptions__Text  PackDescriptions--Check3">
          Imágenes realistas de la propuesta.
        </p>
        <p className="PacksDescriptions__Text  PackDescriptions--Check3">
          Especificaciones técnicas y detalles.
        </p>
      </div>
    </div>
  );
}
