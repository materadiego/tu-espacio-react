import ContactBg from "../../assets/form.webp";

export default function Contact() {
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
        <form className="Contact__Content--ContactForm">
          <label className="Contact--Label">Nombre</label>
          <input maxLength={2000} className="Contact--Input"></input>
          <label className="Contact--Label">Apellido</label>
          <input maxLength={2000} className="Contact--Input"></input>
          <label className="Contact--Label">Teléfono</label>
          <input maxLength={2000} className="Contact--Input"></input>
          <label className="Contact--Label">Mail</label>
          <input maxLength={2000} className="Contact--Input"></input>
          <label className="Contact--Label">Contanos un poco más...</label>
          <textarea className="Contact--TextArea" maxLength={2000}></textarea>
          <button type="submit" className="Contact--Submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
