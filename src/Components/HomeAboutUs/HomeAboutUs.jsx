import HandsIcon from "../../assets/home-aboutus-icon.png";

export default function HomeAboutUs() {
  return (
    <div className="HomeAboutUs">
      <div className="AngledBoxContainer">
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
