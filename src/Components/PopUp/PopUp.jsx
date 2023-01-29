import { useState } from "react";

export default function PopUp() {
  const [popUp, setPopUp] = useState(true);
  const closePopUp = () => {
    setPopUp(!popUp);
  };

  return (
    <div className={`PopUp ${popUp ? "" : "PopUpInactive"}`}>
      <div className="PopUpContainer">
        <div className="PopUpContainer__Close" onClick={closePopUp}></div>
        <div className="PopUpContainer__ImageContainer"></div>
        <div className="PopUpContainer__Content">
          <p className="PopUpContainer__Content--Pretitle">¡GUIA GRATUITA!</p>
          <p className="PopUpContainer__Content--Title">
            5 ERRORES FATALES DECORANDO EL HOGAR
          </p>
          <p className="PopUpContainer__Content--Text">
            Completá tus datos para descargar la guia:
          </p>
          <form className="PopUpForm">
            <label className="PopUpForm__Label">Nombre</label>
            <input className="PopUpForm__Input"></input>
            <label className="PopUpForm__Label">Apellido</label>
            <input className="PopUpForm__Input"></input>
            <label className="PopUpForm__Label">Teléfono</label>
            <input className="PopUpForm__Input"></input>
            <label className="PopUpForm__Label">Mail</label>
            <input className="PopUpForm__Input"></input>
            <button type="submit" className="PopUpForm__Submit">
              Descargar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
