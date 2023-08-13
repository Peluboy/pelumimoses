import React from "react";
import "../styles/teamproject.css";
import synergyPdf from "../assets/synergy-for-change-group-750.pdf";

const TeamProject = () => {
  return (
    <>
      <div className="portfolio__area scroll-to-page" id="team">
        <div className="container">
          <div className="portfolio__content content__width">
            <div className="section__header">
              <h4 className="subtitle scroll-animation">
                <i class="las la-layer-group"></i>
                Team Work
              </h4>
              <h1 className="scroll-animation">
                Team Video <span>& Slide deck</span>
              </h1>
            </div>

            {/* Grid Layout */}
            <div className="grid-container">
              {/* YouTube Video */}
              <div className="grid-item video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/y_NiYYPmEyA"
                  title="YouTube Video"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Title */}
              <div className="grid-item">
                <h2>Women Empowerment</h2>
                <p>
                  In Nigeria, women from poor economic communities have limited
                  opportunities to improve their socioeconomic status. They face
                  obstacles in acquiring quality education, finding jobs,
                  getting fair pay, and accessing financial resources. This
                  makes it difficult for them to become financially independent
                  and influential in society.
                </p>
                <div className="input__group submit__btn-wrap">
                  <button type="submit" className="theme__btn">
                    <a
                      href={synergyPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="las la-arrow-down"></i>
                      Slide Deck
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamProject;
