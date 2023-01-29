import ThanksIcon from "../../assets/gracias.png";
import CalendarIcon from "../../assets/calendar.png";

export default function GuideCaledlyContent() {
  return (
    <div className="GuideCalendlyPage">
      <div className="ThanksContainer">
        <div className="ThanksContainer__Content">
          <img
            src={ThanksIcon}
            alt="Icon"
            className="ThanksContainer__Content--Icon"
          ></img>
          <p className="ThanksContainer__Content--Title">¡MUCHAS GRACIAS!</p>
          <p className="ThanksContainer__Content--Text1">
            En pocos minutos recibirás por correo nuestra Guía.
          </p>
          <p className="ThanksContainer__Content--Text2">
            Si no la encontrás, no olvides revisar la casilla de promociones y
            spam.
          </p>
          <p className="ThanksContainer__Content--Text3">
            El espacio de tus sueños está cada vez más cerca.
          </p>
        </div>
      </div>
      <div className="CalendlyContainer">
        <div className="CalendlyContainer__TitleContainer">
          <img
            className="CalendlyContainer__TitleContainer--Icon"
            src={CalendarIcon}
            alt="Calendar-Icon"
          ></img>
          <p className="CalendlyContainer__TitleContainer--Title">
            ¡Agendá tu asesoria gratuita de 20 minutos!
          </p>
        </div>
      </div>
    </div>
  );
}
