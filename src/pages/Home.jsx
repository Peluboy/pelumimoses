import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Menu from "../components/Menu";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ResumeSection from "../components/ResumeSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";
import DesignSection from "../components/DesignSection";
import TeamProject from "../components/TeamProject";
import ElevationSection from "../components/ElevationSection";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const handleSectionInView = (sectionId) => {
    setActiveSection(sectionId);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const [homeRef, homeInView] = useInView({
    threshold: 0.2,
  });

  const [aboutRef, aboutInView] = useInView({
    threshold: 0.4,
  });

  const [resumeRef, resumeInView] = useInView({
    threshold: 0.2,
  });

  const [servicesRef, servicesInView] = useInView({
    threshold: 0.2,
  });

  const [portfolioRef, portfolioInView] = useInView({
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    threshold: 0.2,
  });

  const [pitchRef, pitchInView] = useInView({
    threshold: 0.2,
  });

  const [contactRef, contactInView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (homeInView) handleSectionInView("hero");
  }, [homeInView]);

  useEffect(() => {
    if (aboutInView) handleSectionInView("about");
  }, [aboutInView]);

  useEffect(() => {
    if (resumeInView) handleSectionInView("resume");
  }, [resumeInView]);

  useEffect(() => {
    if (servicesInView) handleSectionInView("services");
  }, [servicesInView]);

  useEffect(() => {
    if (portfolioInView) handleSectionInView("portfolio");
  }, [portfolioInView]);

  useEffect(() => {
    if (teamInView) handleSectionInView("testimonial");
  }, [teamInView]);

  useEffect(() => {
    if (pitchInView) handleSectionInView("testimonial");
  }, [pitchInView]);

  useEffect(() => {
    if (contactInView) handleSectionInView("contact");
  }, [contactInView]);

  return (
    <>
      <Menu activeSection={activeSection} />
      <motion.div
        ref={homeRef}
        variants={sectionVariants}
        initial="hidden"
        animate={homeInView ? "visible" : "hidden"}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        ref={aboutRef}
        variants={sectionVariants}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
      >
        <AboutSection />
      </motion.div>
      <motion.div
        ref={resumeRef}
        variants={sectionVariants}
        initial="hidden"
        animate={resumeInView ? "visible" : "hidden"}
      >
        <ResumeSection />
      </motion.div>

      <ProjectsSection />
      <motion.div
        ref={servicesRef}
        variants={sectionVariants}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
      >
        <ServicesSection />
      </motion.div>
      <motion.div
        ref={portfolioRef}
        variants={sectionVariants}
        initial="hidden"
        animate={portfolioInView ? "visible" : "hidden"}
      >
        <PortfolioSection />
      </motion.div>
      <DesignSection />
      <motion.div
        ref={teamRef}
        variants={sectionVariants}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
      >
        <TeamProject />
      </motion.div>
      <motion.div
        ref={pitchRef}
        variants={sectionVariants}
        initial="hidden"
        animate={pitchInView ? "visible" : "hidden"}
      >
        <ElevationSection />
      </motion.div>
      <motion.div
        ref={contactRef}
        variants={sectionVariants}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
      >
        <ContactSection />
      </motion.div>
    </>
  );
};

export default Home;
