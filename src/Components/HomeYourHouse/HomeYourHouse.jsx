import YourHouseImage from "../../assets/home-yourhouse.webp";

export default function HomeYourHouse() {
  return (
    <div className="HomeYourHouse">
      <div className="HomeYourHouseContainer">
        <div className="HomeYourHouseContainer__ImageContainer">
          <img
            src={YourHouseImage}
            alt="BgImage"
            className="HomeYourHouseContainer__ImageContainer--Image"
          />
          <div className="HomeYourHouseContainer__ImageContainer--Square"></div>
        </div>
        <div className="HomeYourHouseContainer__Content">
          <p className="HomeYourHouseContainer__Content--Title">TU CASA,</p>
          <p className="HomeYourHouseContainer__Content--Title">COMO SIEMPRE</p>
          <p className="HomeYourHouseContainer__Content--Title">LA SOÑASTE</p>
          <p className="HomeYourHouseContainer__Content--Text">
            Juntas te ayudaremos a lograr tu espacio ideal en el cual te sientas
            feliz, orgulloso e identificado.
          </p>
        </div>
      </div>
    </div>
  );
}
