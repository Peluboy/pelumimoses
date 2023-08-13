import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/portfolio.css";
import TrunqImg from "../assets/trunq-image.png";
import MoonexImg from "../assets/pmovies.png";
import TalskyImg from "../assets/learning-light.png";
import HinterLandImg from "../assets/buy&ship mockup.png";
import LewisImg from "../assets/network-provider.png";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      imageSrc: HinterLandImg,
      categories: ["Figma", "React"],
      title: "Buy & Ship NG - Landing Page",
      isHalfWidth: false,
      link: "https://buyandship.vercel.app/home",
    },

    {
      imageSrc: MoonexImg,
      categories: ["React", "Figma"],
      title: "Pmovies - Celebrity site",
      isHalfWidth: true,
      link: "https://pmovies-celebrity.vercel.app/",
    },
    {
      imageSrc: TalskyImg,
      categories: ["HTML", "CSS", "JavaScript"],
      title: "Learning Light Dashboard",
      isHalfWidth: true,
      link: "https://learning-light-dashboard.vercel.app/",
    },
    {
      imageSrc: TrunqImg,
      categories: ["Figma", "React", "Typescript"],
      title: "Trunq - URL Shortener",
      isHalfWidth: false,
      link: "https://trunq.xyz/",
    },
    {
      imageSrc: LewisImg,
      categories: ["HTML", "CSS", "JavaScript"],
      title: "NetConnect - Network Provider",
      isHalfWidth: false,
      link: "https://network-provider.vercel.app/",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (event, imageSrc, index) => {
    event.preventDefault();
    setModalOpen(true);
    setModalImageSrc(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImageSrc("");
    setCurrentImageIndex(0);
  };

  const goToNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % portfolioItems.length;
    setModalImageSrc(portfolioItems[nextIndex].imageSrc);
    setCurrentImageIndex(nextIndex);
  };

  const goToPreviousImage = () => {
    const previousIndex =
      (currentImageIndex - 1 + portfolioItems.length) % portfolioItems.length;
    setModalImageSrc(portfolioItems[previousIndex].imageSrc);
    setCurrentImageIndex(previousIndex);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "imageModal") {
        closeModal();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="portfolio__area scroll-to-page" id="portfolio">
        <div className="container">
          <div className="portfolio__content content__width">
            <div className="section__header">
              <h4 className="subtitle scroll-animation">
                <i className="las la-grip-vertical"></i>
                portfolio
              </h4>
              <h1 className="scroll-animation">
                Featured <span>Portfolio</span>
              </h1>
            </div>

            <div className="portfolio__list grid">
              {portfolioItems.map((item, index) => (
                <PortfolioItem
                  key={index}
                  item={item}
                  index={index}
                  openModal={openModal}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal" id="imageModal">
          <button className="close" onClick={closeModal}>
            <i className="las la-times"></i>
          </button>
          <img
            className="modal-content"
            id="modalImage"
            src={modalImageSrc}
            alt=""
          />
          <div className="modal-navigation">
            <button className="prev" onClick={goToPreviousImage}>
              <i className="las la-angle-left"></i>
            </button>
            <button className="next" onClick={goToNextImage}>
              <i className="las la-angle-right"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const PortfolioItem = ({ item, index, openModal }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      ref={ref}
      className={`portfolio__item ${
        item.isHalfWidth ? "portfolio__half" : "portfolio__full"
      }`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <div className="portfolio__item-inner">
        <a
          href="/"
          className="image-link"
          onClick={(e) => openModal(e, item.imageSrc, index)}
        >
          <img src={item.imageSrc} alt="" />
        </a>
        <ul className="portfolio__categories">
          {item.categories.map((category, index) => (
            <li key={index}>
              <a href="/">{category}</a>
            </li>
          ))}
        </ul>
      </div>
      <h2>
        <Link to={item.link} target="_blank">
          {item.title}
        </Link>
      </h2>
    </motion.div>
  );
};

export default PortfolioSection;
