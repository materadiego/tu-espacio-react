import React from "react";
import { NavLink } from "react-router-dom";
import BlueLogo from "../../assets/logo-blue.svg";
import Wsp from "../../assets/redes-wsp-blue.svg";
import Ig from "../../assets/redes-ig-blue.svg";
import Fb from "../../assets/redes-fb-blue.svg";

export default function Footer() {
  return (
    <footer className="Footer">
      {/* MENU */}
      <div className="FooterContainer">
        <img className="Footer-Logo" src={BlueLogo} alt="Logo"></img>

        <nav className="FooterMenu">
          <ul className="FooterMenu__List">
            <li className="FooterMenu__List--Links">
              <NavLink
                style={{ textDecoration: "inherit" }}
                className="FooterMenuOptions"
                to={"/Equipo"}
              >
                Equipo
              </NavLink>
            </li>
            <li className="FooterMenu__List--Links">
              <NavLink
                style={{ textDecoration: "inherit" }}
                className="FooterMenuOptions"
                to={"/Proyectos"}
              >
                Proyectos
              </NavLink>
            </li>
            <li className="FooterMenu__List--Links">
              <NavLink
                style={{ textDecoration: "inherit" }}
                className="FooterMenuOptions"
                to={"/Packs"}
              >
                Packs
              </NavLink>
            </li>
            <li className="FooterMenu__List--Links">
              <NavLink
                style={{ textDecoration: "inherit" }}
                className="FooterMenuOptions"
                to={"/Contacto"}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="FooterSocialMedia">
          <a
            href="https://www.instagram.com/tuespacio/"
            target="_blank"
            rel="noreferrer"
            className="FooterSocialMedia__Links"
          >
            <img
              src={Ig}
              alt="Instagram"
              className="FooterSocialMedia__Links--Image"
            ></img>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100078257949083&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
            className="FooterSocialMedia__Links"
          >
            <img
              src={Fb}
              alt="Facebook"
              className="FooterSocialMedia__Links--Image fb"
            ></img>
          </a>
          <a
            href="https://wa.me/5493815740966"
            target="_blank"
            rel="noreferrer"
            className="FooterSocialMedia__Links"
          >
            <img
              src={Wsp}
              alt="Whatsapp"
              className="FooterSocialMedia__Links--Image"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
