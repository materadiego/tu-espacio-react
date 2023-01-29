import { useState } from "react";
import ContactBg from "../../assets/form.webp";
import Loader from "../../assets/loader.svg";

export default function Contact() {
  const [response, setResponse] = useState("");
  const [datos, setDatos] = useState({
    inp_name: "",
    inp_surname: "",
    inp_phone: "",
    inp_mail: "",
    inp_mesage: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    setResponse(
      <img alt="Loader" className="Loader--Image" src={Loader}></img>
    );

    fetch("https://formsubmit.co/ajax/diegomatera@gmail.com", {
      method: "post",
      body: new FormData(event.target),
    })
      .then((res) => (res.ok ? "" : Promise.reject(res)))
      .catch(
        (error) => console.log(error),
        setResponse("Error al enviar el mensaje")
      )
      .finally(() => {
        setDatos({
          inp_name: "",
          inp_surname: "",
          inp_phone: "",
          inp_mail: "",
          inp_mesage: "",
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
          <label className="Contact--Label">Nombre</label>
          <input
            maxLength={2000}
            type="text"
            name="inp_name"
            onChange={handleInputChange}
            value={datos.inp_name}
            required
            className="Contact--Input"
          ></input>
          <label className="Contact--Label">Apellido</label>
          <input
            maxLength={2000}
            type="text"
            name="inp_surname"
            onChange={handleInputChange}
            value={datos.inp_surname}
            required
            className="Contact--Input"
          ></input>
          <label className="Contact--Label">Teléfono</label>
          <input
            maxLength={2000}
            type="text"
            name="inp_phone"
            onChange={handleInputChange}
            value={datos.inp_phone}
            required
            className="Contact--Input"
          ></input>
          <label className="Contact--Label">Mail</label>
          <input
            maxLength={2000}
            type="text"
            name="inp_mail"
            onChange={handleInputChange}
            value={datos.inp_mail}
            required
            className="Contact--Input"
          ></input>
          <label className="Contact--Label">Contanos un poco más...</label>
          <textarea
            className="Contact--TextArea"
            type="text"
            name="inp_message"
            onChange={handleInputChange}
            value={datos.inp_message}
            required
            maxLength={2000}
          ></textarea>
          <button type="submit" className="Contact--Submit">
            Enviar
          </button>
          <div className="ContactResponseContainer">{response}</div>
        </form>
      </div>
    </div>
  );
}
