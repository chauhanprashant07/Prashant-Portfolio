import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "3D Portfolio",
    category: "Full Stack Interactive Portfolio",
    tools: "React, Three.js, Tailwind CSS, Framer Motion",
    image: "/images/bond.png",
    link: "https://chauhanprashant07.netlify.app",
  },
  {
    title: "Cybersecurity Tools",
    category: "Security & Scanning Tools",
    tools: "Python, Socket Programming, Requests",
    image: "/images/broki.png",
    link: "https://github.com/chauhanprashant07",
  },
  {
    title: "JARVIS AI Assistant",
    category: "Voice-Controlled AI",
    tools: "Python, Speech Recognition, pyttsx3, APIs",
    image: "/images/placeholder.webp",
    link: "https://github.com/chauhanprashant07",
  },
  {
    title: "AI Resume Analyzer",
    category: "AI-Powered Analysis Tool",
    tools: "Python, Streamlit, NLP, scikit-learn",
    image: "/images/placeholder.webp",
    link: "https://github.com/chauhanprashant07",
  },
  {
    title: "AI Interview Assistant",
    category: "Interview Practice Tool",
    tools: "Python, NLP, OpenAI, Streamlit",
    image: "/images/placeholder.webp",
    link: "https://github.com/chauhanprashant07",
  },
  {
    title: "E-Commerce Platform",
    category: "Full-Stack Shopping App",
    tools: "React, Node.js, Express, MongoDB",
    image: "/images/placeholder.webp",
    link: "https://github.com/chauhanprashant07",
  },
  {
    title: "Job Portal",
    category: "Job Posting & Application Platform",
    tools: "React, Node.js, Express, MongoDB, JWT",
    image: "/images/placeholder.webp",
    link: "https://github.com/chauhanprashant07",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows - Desktop (absolute) */}
          <div className="carousel-nav-buttons">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goToPrev}
              aria-label="Previous project"
              data-cursor="disable"
            >
              <MdArrowBack />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goToNext}
              aria-label="Next project"
              data-cursor="disable"
            >
              <MdArrowForward />
            </button>
          </div>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
