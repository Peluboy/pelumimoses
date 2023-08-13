import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../styles/design.css";
import "../styles/custom-slider.css";
import AggreyImg from "../assets/aggrey_hospital_new_yy9kav.png";
import BeeJuiceImg from "../assets/beejuice_banner_ght50z.png";
import BuyShipImg from "../assets/Buy_Ship_iPhone_14_pre-order_at3xqq.png";
import CatchCruiseImg from "../assets/Catch_cruise_banner_jnrkdu.png";
import JbanksFreelance from "../assets/Game-changing_freelance_masterclass_zkfda3.png";
import FACEThrowbackImg from "../assets/throwback_thursday_nnuvou.png";
import RCFImg from "../assets/worship_atmosphere_c_csyltf.png";
import TherapyImg from "../assets/therapy-counter-app.png";
import MagnifipearlsImg from "../assets/magnifipearls business card (1).png";
import IlluszionzImg from "../assets/illuszionz.png";
import WelcomeServiceImg from "../assets/welcome-service.png";
import OliveImg from "../assets/olive.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DesignSection = () => {
  const designItems = [
    {
      imageSrc: AggreyImg,
      //   categories: ["Figma", "React", "Typescript"],
      isHalfWidth: true,
      link: "https://trunq.xyz/",
    },
    {
      imageSrc: BeeJuiceImg,
      //   categories: ["Wordpress", "Laravel/PHP"],
      isHalfWidth: true,
      link: "https://www.example.com/bureasu",
    },
    {
      imageSrc: BuyShipImg,
      //   categories: ["Figma", "Webflow"],
      isHalfWidth: true,
      link: "https://www.example.com/bureasu",
    },
    {
      imageSrc: CatchCruiseImg,
      //   categories: ["Figma", "React"],
      isHalfWidth: true,
      link: "https://buyandship.vercel.app/home",
    },
    {
      imageSrc: JbanksFreelance,
      //   categories: ["HTML", "CSS", "JavaScript"],
      isHalfWidth: true,
      link: "https://www.example.com/bureasu",
    },
    {
      imageSrc: FACEThrowbackImg,
      //   categories: ["HTML", "CSS", "JavaScript"],
      isHalfWidth: true,
      link: "https://www.example.com/bureasu",
    },
    {
      imageSrc: RCFImg,
      //   categories: ["HTML", "CSS", "JavaScript"],
      isHalfWidth: true,
      link: "https://www.example.com/bureasu",
    },
    {
      imageSrc: TherapyImg,
      //   categories: ["HTML", "CSS", "JavaScript"],
      isHalfWidth: true,
      link: "https://www.example.com/bureasu",
    },
    {
      imageSrc: MagnifipearlsImg,
      //   categories: ["HTML", "CSS", "JavaScript"],
      isHalfWidth: true,
      link: "https://www.example.com/bureasu",
    },
    {
      imageSrc: IlluszionzImg,
      //   categories: ["HTML", "CSS", "JavaScript"],
      isHalfWidth: true,
      link: "https://www.example.com/bureasu",
    },
    {
      imageSrc: OliveImg,
      //   categories: ["HTML", "CSS", "JavaScript"],
      isHalfWidth: true,
      link: "https://www.example.com/bureasu",
    },
    {
      imageSrc: WelcomeServiceImg,
      //   categories: ["HTML", "CSS", "JavaScript"],
      isHalfWidth: true,
      link: "https://www.example.com/bureasu",
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
    const nextIndex = (currentImageIndex + 1) % designItems.length;
    setModalImageSrc(designItems[nextIndex].imageSrc);
    setCurrentImageIndex(nextIndex);
  };

  const goToPreviousImage = () => {
    const previousIndex =
      (currentImageIndex - 1 + designItems.length) % designItems.length;
    setModalImageSrc(designItems[previousIndex].imageSrc);
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
      <div className="design__area scroll-to-page" id="portfolio">
        <div className="container">
          <div className="portfolio__content content__width">
            <div className="section__header">
              {/* <h4 className="subtitle scroll-animation">
                <i className="las la-grip-vertical"></i>
                portfolio
              </h4> */}
              <h1 className="scroll-animation">
                Design <span>Works</span>
              </h1>
            </div>

            <Swiper
              spaceBetween={15}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              {designItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <PortfolioItem
                    item={item}
                    index={index}
                    openModal={openModal}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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
    <div
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
        {/* <ul className="portfolio__categories">
          {item.categories.map((category, index) => (
            <li key={index}>
              <a href="/">{category}</a>
            </li>
          ))}
        </ul> */}
      </div>
      <h2>
        <Link to={item.link} target="_blank">
          {item.title}
        </Link>
      </h2>
    </div>
  );
};

export default DesignSection;
