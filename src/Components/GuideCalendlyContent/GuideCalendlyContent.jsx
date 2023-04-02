import React from "react";
import { InlineWidget } from "react-calendly";
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
          <a
            href="Ebook-Tu-espacio.pdf"
            download="%PUBLIC_URL%/Ebook-Tu-espacio.pdf"
            className="ThanksContainer__Content--Download"
            style={{ textDecoration: "inherit" }}
          >
            <p> Descargar Ebook </p> <div></div>{" "}
          </a>
          <p className="ThanksContainer__Content--Text1">
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
        <div className="CalendlyContainer__Calendly">
          <InlineWidget
            className="CalendlyContainer__Calendly--CalendlyApp"
            url="https://calendly.com/disenatuespacio?primary_color=cdbfbc"
          />
        </div>
      </div>
    </div>
  );
}
