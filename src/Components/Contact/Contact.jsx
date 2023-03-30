import { useState } from "react";
import ContactBg from "../../assets/form.webp";
import Loader from "../../assets/loader.svg";
import Arrow from "../../assets/arrow-down.png";

export default function Contact() {
  const [response, setResponse] = useState("");
  const [datos, setDatos] = useState({
    Name: "",
    Surname: "",
    Phone: "",
    Mail: "",
    Message: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    fetch("https://formsubmit.co/ajax/info@disenatuespacio.com", {
      method: "post",
      body: new FormData(event.target),
    })
      .then((res) =>
        res.ok
          ? setResponse("¡Mensaje enviado exitosamente!")
          : Promise.reject(res)
      )
      .catch(
        (error) => console.log(error),
        setResponse(
          <img
            alt="loader"
            className="ContactResponseContainer__Loader"
            src={Loader}
          ></img>
        )
      )
      .finally(() => {
        setDatos({
          Name: "",
          Surname: "",
          Phone: "",
          Mail: "",
          Message: "",
        });
      });
  };

  return (
    <div className="Contact">
      <div className="Contact__ImageContainer">
        <img
          src={ContactBg}
          alt="Contact-Bg"
          className="Contact__ImageContainer--Image"
        ></img>
        <div className="Contact__ImageContainer--Square"></div>
      </div>
      <div className="Contact__Content">
        <p className="Contact__Content--Text">ESCRIBINOS</p>
        <p className="Contact__Content--Title">
          ¡ANIMATE A TENER EL HOGAR DE TUS SUEÑOS
        </p>
        <form className="Contact__Content--ContactForm" onSubmit={enviarDatos}>
          <input
            maxLength={2000}
            type="text"
            name="Contact-Form"
            onChange={handleInputChange}
            value="Mensaje enviado desde formulario de contacto"
            required
            className="Contact--Input Contact-Title-Input"
          ></input>
          <label className="Contact--Label">Nombre</label>
          <input
            maxLength={2000}
            type="text"
            name="Name"
            onChange={handleInputChange}
            value={datos.inp_name}
            required
            className="Contact--Input"
          ></input>
          <label className="Contact--Label">Apellido</label>
          <input
            maxLength={2000}
            type="text"
            name="Surname"
            onChange={handleInputChange}
            value={datos.inp_surname}
            required
            className="Contact--Input"
          ></input>
          <label className="Contact--Label">Teléfono</label>
          <input
            maxLength={2000}
            type="tel"
            name="Phone"
            onChange={handleInputChange}
            value={datos.inp_phone}
            required
            className="Contact--Input"
          ></input>
          <label className="Contact--Label">Mail</label>
          <input
            maxLength={2000}
            type="email"
            name="Mail"
            onChange={handleInputChange}
            value={datos.inp_mail}
            required
            className="Contact--Input"
          ></input>
          <label className="Contact--Label">Contanos un poco más...</label>
          <textarea
            className="Contact--TextArea"
            type="text"
            name="Message"
            onChange={handleInputChange}
            value={datos.inp_message}
            required
            maxLength={2000}
          ></textarea>
          <button type="submit" className="Contact--Submit">
            Enviar <img src={Arrow} alt="arrow" />
          </button>
          <div className="ContactResponseContainer">{response}</div>
        </form>
      </div>
    </div>
  );
}
