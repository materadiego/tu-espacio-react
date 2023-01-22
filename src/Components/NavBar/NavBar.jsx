import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import MenuClose from "../../assets/menu-close.png";
import BlueLogo from "../../assets/logo.png";
import Wsp from "../../assets/redes-wsp.png";
import Ig from "../../assets/redes-ig.png";
import Fb from "../../assets/redes-fb.png";

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
    setMenuButton(!menuButton);
    setMenuIsActive(!menuIsActive);
  };
  return (
    <header className="Header">
      <div className="HeaderContainer">
        <div className="HeaderContainer__MobileSpace"></div>
        <Link
          to={"/"}
          style={{ textDecoration: "inherit" }}
          className="HeaderContainer__Logo"
        >
          <img
            src={Logo}
            alt="logo"
            className="HeaderContainer__Logo--Image"
          ></img>
        </Link>
        <div className="HeaderContainer__MenuButton" onClick={toggleMenu}>
          <div className="HeaderContainer__MenuButton--Line MenuLine1"></div>
          <div className="HeaderContainer__MenuButton--Line MenuLine2"></div>
        </div>
        {/* MENU */}
        <div className={`MenuContainer ${menu ? "MenuIsActive" : ""}`}>
          <div className="MenuClose" onClick={toggleMenu}>
            <img
              src={MenuClose}
              alt="Close-Menu"
              className="MenuClose__Image"
            ></img>
          </div>
          <img className="Menu-Logo" src={BlueLogo} alt="Logo"></img>
          <nav className="Menu">
            <ul className="Menu__List">
              <li className="Menu__List--Links">
                <NavLink
                  style={{ textDecoration: "inherit", color: "#ffffff" }}
                  className="MenuOptions"
                  to={"/"}
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="Menu__List--Links">
                <NavLink
                  style={{ textDecoration: "inherit", color: "#ffffff" }}
                  className="MenuOptions"
                  to={"/Equipo"}
                  onClick={toggleMenu}
                >
                  Equipo
                </NavLink>
              </li>
              <li className="Menu__List--Links">
                <NavLink
                  style={{ textDecoration: "inherit", color: "#ffffff" }}
                  className="MenuOptions"
                  to={"/Proyectos"}
                  onClick={toggleMenu}
                >
                  Proyectos
                </NavLink>
              </li>
              <li className="Menu__List--Links">
                <NavLink
                  style={{ textDecoration: "inherit", color: "#ffffff" }}
                  className="MenuOptions"
                  to={"/Packs"}
                  onClick={toggleMenu}
                >
                  Packs
                </NavLink>
              </li>
              <li className="Menu__List--Links">
                <NavLink
                  style={{ textDecoration: "inherit", color: "#ffffff" }}
                  className="MenuOptions"
                  to={"/Contacto"}
                  onClick={toggleMenu}
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="SocialMedia">
            <a
              href="www.instagram.com"
              target="_blank"
              className="SocialMedia__Links"
            >
              <img
                src={Ig}
                alt="Instagram"
                className="SocialMedia__Links--Image"
              ></img>
            </a>
            <a
              href="www.facebook.com"
              target="_blank"
              className="SocialMedia__Links"
            >
              <img
                src={Fb}
                alt="Facebook"
                className="SocialMedia__Links--Image"
              ></img>
            </a>
            <a
              href="www.whatsapp.com"
              target="_blank"
              className="SocialMedia__Links"
            >
              <img
                src={Wsp}
                alt="Whatsapp"
                className="SocialMedia__Links--Image"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
