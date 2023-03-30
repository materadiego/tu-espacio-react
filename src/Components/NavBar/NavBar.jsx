import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import BlueLogo from "../../assets/logo.svg";
import Wsp from "../../assets/redes-wsp.svg";
import Ig from "../../assets/redes-ig.svg";
import Fb from "../../assets/redes-fb.svg";

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
          to={"/tu-espacio-react"}
          style={{ textDecoration: "inherit" }}
          className="HeaderContainer__Logo"
        >
          <img
            src={Logo}
            alt="logo"
            className="HeaderContainer__Logo--Image"
          ></img>
        </Link>
        <div
          className={`HeaderContainer__MenuButton ${
            menu ? "MenuButtonFixed" : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`HeaderContainer__MenuButton--Line MenuLine1 ${
              menu ? "MenuLine1__Active" : ""
            }`}
          ></div>
          <div
            className={`HeaderContainer__MenuButton--Line MenuLine2 ${
              menu ? "MenuLine2__Active" : ""
            }`}
          ></div>
        </div>
        {/* MENU */}
        <div className={`MenuContainer ${menu ? "MenuIsActive" : ""}`}>
          <img className="Menu-Logo" src={BlueLogo} alt="Logo"></img>
          <nav className="Menu">
            <ul className="Menu__List">
              <li className="Menu__List--Links">
                <NavLink
                  end
                  style={{ textDecoration: "inherit" }}
                  className="MenuOptions"
                  to={"/tu-espacio-react"}
                  onClick={toggleMenu}
                >
                  <p>Home</p>
                </NavLink>
              </li>
              <li className="Menu__List--Links">
                <NavLink
                  style={{ textDecoration: "inherit" }}
                  className="MenuOptions"
                  to={"/Equipo"}
                  onClick={toggleMenu}
                >
                  <p>Equipo</p>
                </NavLink>
              </li>
              <li className="Menu__List--Links">
                <NavLink
                  style={{ textDecoration: "inherit" }}
                  className="MenuOptions"
                  to={"/Proyectos"}
                  onClick={toggleMenu}
                >
                  <p>Proyectos</p>
                </NavLink>
              </li>
              <li className="Menu__List--Links">
                <NavLink
                  style={{ textDecoration: "inherit" }}
                  className="MenuOptions"
                  to={"/Packs"}
                  onClick={toggleMenu}
                >
                  <p>Packs</p>
                </NavLink>
              </li>
              <li className="Menu__List--Links">
                <NavLink
                  style={{ textDecoration: "inherit" }}
                  className="MenuOptions"
                  to={"/Contacto"}
                  onClick={toggleMenu}
                >
                  <p>Contacto</p>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="SocialMedia">
            <a
              href="https://www.instagram.com/tuespacio/"
              target="_blank"
              rel="noreferrer"
              className="SocialMedia__Links"
            >
              <img
                src={Ig}
                alt="Instagram"
                className="SocialMedia__Links--Image ig"
              ></img>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100078257949083&mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              className="SocialMedia__Links"
            >
              <img
                src={Fb}
                alt="Facebook"
                className="SocialMedia__Links--Image fb"
              ></img>
            </a>
            <a
              href="https://wa.me/5493813435833"
              target="_blank"
              rel="noreferrer"
              className="SocialMedia__Links"
            >
              <img
                src={Wsp}
                alt="Whatsapp"
                className="SocialMedia__Links--Image wsp"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
