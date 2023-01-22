import PresentIcon from "../../assets/home-packs.png";

export default function HomePacks() {
  return (
    <div className="HomePacks">
      <div className="AngledBoxContainer HomePacksContainer">
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
        <button className="HomePacksButton">Ver Opciones +</button>
      </div>
    </div>
  );
}
