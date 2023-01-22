import React from "react";
import { NavLink } from "react-router-dom";

import BlueLogo from "../../assets/logo-blue.png";
import Wsp from "../../assets/redes-wsp-blue.png";
import Ig from "../../assets/redes-ig-blue.png";
import Fb from "../../assets/redes-fb-blue.png";

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
                style={{ textDecoration: "inherit", color: "#2a7d90" }}
                className="FooterMenuOptions"
                to={"/"}
              >
                Equipo
              </NavLink>
            </li>
            <li className="FooterMenu__List--Links">
              <NavLink
                style={{ textDecoration: "inherit", color: "#2a7d90" }}
                className="FooterMenuOptions"
                to={"/"}
              >
                Proyectos
              </NavLink>
            </li>
            <li className="FooterMenu__List--Links">
              <NavLink
                style={{ textDecoration: "inherit", color: "#2a7d90" }}
                className="FooterMenuOptions"
                to={"/Packs"}
              >
                Packs
              </NavLink>
            </li>
            <li className="FooterMenu__List--Links">
              <NavLink
                style={{ textDecoration: "inherit", color: "#2a7d90" }}
                className="FooterMenuOptions"
                to={"/"}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="FooterSocialMedia">
          <a
            href="www.instagram.com"
            target="_blank"
            className="FooterSocialMedia__Links"
          >
            <img
              src={Ig}
              alt="Instagram"
              className="FooterSocialMedia__Links--Image"
            ></img>
          </a>
          <a
            href="www.facebook.com"
            target="_blank"
            className="FooterSocialMedia__Links"
          >
            <img
              src={Fb}
              alt="Facebook"
              className="FooterSocialMedia__Links--Image"
            ></img>
          </a>
          <a
            href="www.whatsapp.com"
            target="_blank"
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
