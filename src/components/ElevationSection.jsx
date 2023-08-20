import React, { useState } from "react";

const ElevationSection = () => {
  const initialContent = (
    <>
      <p>
        Hi, I'm Oluwapelumi Ogunmuyiwa, and I'm a frontend developer with a
        knack for graphics design. I bring to the table a fusion of technical
        expertise and creative flair. With a solid foundation in coding and a
        background in graphics design, I'm equipped to craft visually stunning
        and user-friendly websites.
      </p>
      <p>
        My top skills? I excel in HTML, CSS, and JavaScript, and other
        JavaScript frameworks such as React and Vue, ensuring that your website
        not only looks amazing but also functions seamlessly. My eye for design
        allows me to create interfaces that are both aesthetically pleasing and
        user-centered. What sets me apart is my ability to bridge the gap
        between design and functionality. I understand that a great website goes
        beyond visuals; it's about delivering an exceptional user experience and
        also good at problem solving and collaborate well with team.
      </p>
      <p>
        By entrusting your project to me, you're choosing a partner who not only
        understands the technical aspects but also values the importance of a
        captivating user interface. I'm here to simplify your journey by turning
        your ideas into a captivating online reality.
      </p>

      <p>
        Let's work together to create web experiences that leave a lasting
        impression. Your digital goals are my priority!
      </p>
    </>
  );

  const [expanded, setExpanded] = useState(false);
  const content = expanded
    ? initialContent
    : initialContent.props.children.slice(0, 1);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="portfolio__area scroll-to-page" id="team">
        <div className="container">
          <div className="portfolio__content content__width">
            <div className="section__header">
              <h1 className="scroll-animation">
                Elevation <span>Pitch</span>
              </h1>
            </div>

            <div className="grid-container">
              {/* YouTube Video */}
              <div className="grid-item video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/J-3Qs5eY_IY"
                  title="YouTube Video"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="grid-item">
                <h2>My Elevation Pitch</h2>
                <div className="content-wrapper">
                  {content}
                  {initialContent.props.children.length > 2 && (
                    <span className="ellipsis">{expanded ? "" : "..."}</span>
                  )}
                  {initialContent.props.children.length > 2 && (
                    <span className="read-more-button" onClick={handleReadMore}>
                      {expanded ? "Read less" : "Read more"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElevationSection;
