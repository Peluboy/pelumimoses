import React, { useState } from "react";
import "../styles/menu.css";
import ProfileImg from "../assets/me.jpg";
import Logo from "../assets/my-logo.png";

const Menu = () => {
  const menuItems = [
    { id: "hero", icon: "las la-home", text: "Home", active: true },
    { id: "about", icon: "las la-user", text: "About" },
    { id: "resume", icon: "las la-briefcase", text: "Resume" },
    { id: "services", icon: "las la-stream", text: "Services" },
    { id: "portfolio", icon: "las la-grip-vertical", text: "Portfolio" },
    { id: "team", icon: "las la-layer-group", text: "Team" },
    { id: "contact", icon: "las la-envelope", text: "Contact" },
  ];

  const socialLinks = [
    { icon: "lab la-twitter", url: "https://twitter.com/pelumoses" },
    { icon: "las la-envelope", url: "mailto:pelumimoses04@gmail.com" },
    { icon: "lab la-github", url: "https://github.com/Peluboy" },
    {
      icon: "lab la-linkedin",
      url: "https://www.linkedin.com/in/pelumimoses/",
    },
  ];

  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("hero");

  const toggleResponsiveMenu = () => {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen);
  };

  const closeResponsiveMenu = () => {
    setIsResponsiveMenuOpen(false);
  };

  const handleMenuClick = (itemId) => {
    setActiveItem(itemId);
    closeResponsiveMenu();

    const targetSection = document.getElementById(itemId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1-ukw7b4W34-2eWoeKxFKFCLkXE2lTWpG/view";
    link.download = "pelumi-moses-resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <span className="icon__menu" onClick={toggleResponsiveMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
      {isResponsiveMenuOpen && (
        <div className="responsive__sidebar-menu show">
          <div className="overlay" onClick={closeResponsiveMenu}></div>
          <div className="sidebar__menu-inner">
            <div className="menu__wrap">
              <p>Menu</p>
              <ul className="menu scroll__nav-responsive">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`scroll__to ${
                        item.id === activeItem ? "active" : ""
                      }`}
                      onClick={() => handleMenuClick(item.id)}
                    >
                      <i className={item.icon}></i>
                      <p>{item.text}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar__social">
              <p>Social</p>
              <ul className="social__links">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={link.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <ul className="menu scroll__nav">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              className={`scroll__to ${item.id === activeItem ? "active" : ""}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <i className={item.icon}></i>
              <span className="scroll__nav__tooltip">{item.text}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="left__sidebar">
        <div className="sidebar__header">
          <img src={Logo} alt="" />
          <span className="designation">Devigner</span>
        </div>

        <img src={ProfileImg} alt="" className="me" />
        <h2 className="email">Lagos, Nigeria.</h2>
        <p className="copyright">&copy; 2023 Peluboy. All Rights Reserved</p>
        <ul className="social__profile">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <button className="theme__btn" onClick={handleDownloadCV}>
          <i class="las la-arrow-down"></i>
          Download cv
        </button>
      </div>
    </div>
  );
};

export default Menu;
