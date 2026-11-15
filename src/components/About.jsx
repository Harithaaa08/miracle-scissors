import React, { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const section = aboutRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 },
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
          alt="Miracle Scissors Parlour"
        />

        <div className="about-experience">
          <span>Since</span>
          <strong>2014</strong>
        </div>
      </div>

      <div className="about-content">
        <span className="about-label">OUR STORY</span>

        <h2>
          Welcome to <span>Miracle Scissors</span>
        </h2>

        <p>
          Established in 2014, Miracle Scissors has been dedicated to making
          every client look and feel their best. We offer a welcoming space for
          both men and women, providing a range of beauty, grooming, hair
          styling, and personal care services. With a focus on quality, comfort,
          and customer satisfaction, we believe every visit should be a
          refreshing experience. At Miracle Scissors, your style is our passion!
        </p>
      </div>
    </section>
  );
}

export default About;
