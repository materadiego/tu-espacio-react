import HandsIcon from "../../assets/home-aboutus-icon.png";
import scrollFunction from "../../utils/animation-scroll-function";

export default function HomeAboutUs(scrollFunction) {
  return (
    <div className="HomeAboutUs" id="Nosotros">
      <div className="AngledBoxContainer animate AnimatedOpacity">
        <div className="AngledBoxContainer__BorderSquare SquareTop"></div>
        <div className="AngledBoxContainer__BorderSquare SquareBottom"></div>
        <p className="AngledBoxContainer__Title HomeAboutUsTitle">¡HOLA!</p>
        <div className="AngledBoxContainer__Line AngledBoxBlueLine"></div>
        <img
          src={HandsIcon}
          alt="Icon"
          className="AngledBoxContainer__Icon HomeAboutUsIcon"
        />
        <p className="AngledBoxContainer__Text HomeAboutUsText">
          <span>Somos Sofi y Luchi,</span>
          una fusión entre arquitectura y el diseño de interiores.
        </p>
      </div>
    </div>
  );
}
