import { useState } from "react";
import { useNavigate } from "react-router";
import PopUpLoader from "../../assets/popup-loader.svg";

export default function PopUp() {
  const [popUp, setPopUp] = useState(true);
  const navigate = useNavigate();
  const [response2, setResponse2] = useState("");
  const [datos2, setDatos2] = useState({
    Nombre: "",
    Apellido: "",
    Telefono: "",
    Mail: "",
  });

  const handleInputChange2 = (event) => {
    setDatos2({
      ...datos2,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos2 = (event) => {
    event.preventDefault();
    fetch("https://formsubmit.co/ajax/info@disenatuespacio.com", {
      method: "post",
      body: new FormData(event.target),
    })
      .then((res) =>
        res.ok
          ? setResponse2(
              <img
                alt="loader"
                className="PopUpState__Loader"
                src={PopUpLoader}
              ></img>
            )
          : Promise.reject(res)
      )
      .catch(
        (error) => console.log(error),
        setResponse2(
          <img
            alt="loader"
            className="PopUpState__Loader"
            src={PopUpLoader}
          ></img>
        )
      )
      .finally(() => {
        setTimeout(() => {
          setPopUp(!popUp);

          navigate("/Gracias");
        }, 2000);
      });
  };

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
          <form className="PopUpForm" onSubmit={enviarDatos2}>
            <input
              className="PopUpForm__Input Guide-Input"
              maxLength={2000}
              type="text"
              name="Guide-Download"
              value="Este usuario descargó la Guía"
              onChange={handleInputChange2}
              required
            ></input>

            <label className="PopUpForm__Label">Nombre</label>
            <input
              className="PopUpForm__Input"
              maxLength={2000}
              type="text"
              name="Nombre"
              onChange={handleInputChange2}
              required
            ></input>
            <label className="PopUpForm__Label">Apellido</label>
            <input
              className="PopUpForm__Input"
              maxLength={2000}
              type="text"
              onChange={handleInputChange2}
              name="Apellido"
              required
            ></input>
            <label className="PopUpForm__Label">Teléfono</label>
            <input
              className="PopUpForm__Input"
              maxLength={2000}
              type="tel"
              name="Telefono"
              onChange={handleInputChange2}
              required
            ></input>
            <label className="PopUpForm__Label">Mail</label>
            <input
              className="PopUpForm__Input"
              maxLength={2000}
              onChange={handleInputChange2}
              type="email"
              name="Mail"
              required
            ></input>

            <button className="PopUpForm__Submit">Descargar</button>
          </form>
          <div className="PopUpState">{response2}</div>
        </div>
      </div>
    </div>
  );
}
