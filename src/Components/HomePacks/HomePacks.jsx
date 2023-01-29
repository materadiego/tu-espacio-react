import { Link } from "react-router-dom";
import PresentIcon from "../../assets/home-packs.png";
import scrollFunction from "../../utils/animation-scroll-function";

export default function HomePacks(scrollFunction) {
  return (
    <div className="HomePacks">
      <div className="AngledBoxContainer HomePacksContainer animate AnimatedOpacity ">
        <div className="AngledBoxContainer__BorderSquare SquareTop"></div>
        <div className="AngledBoxContainer__BorderSquare SquareBottom"></div>
        <img
          src={PresentIcon}
          alt="Icon"
          className="AngledBoxContainer__Icon HomePacksIcon"
        />
        <p className="AngledBoxContainer__Text HomePacksText">
          Elegí el pack que mejor se adapta a vos!
        </p>
        <div className="AngledBoxContainer__Line AngledBoxBrownLine"></div>
        <p className="AngledBoxContainer__Title HomePacksTitle">PACKS</p>
        <Link
          style={{ textDecoration: "inherit", color: "#ffffff" }}
          to={"/Packs"}
          className="HomePacksButton"
        >
          Ver Opciones +
        </Link>
      </div>
    </div>
  );
}
