import { useEffect, useRef } from "react";
import "./Services.css";

const services = [
  // HAIR SERVICES
  {
    number: "01",
    title: "Haircut",
    description:
      "Discover your perfect look with professional haircuts and styling for men and women.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Hair Styling",
    description:
      "From beautiful curls to sleek straight styles, let us transform your look.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Kids Haircut",
    description:
      "Cute, comfortable and stylish haircuts for our little guests.",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Hair Transplantation",
    description:
      "Explore professional hair restoration solutions designed around your needs.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
  },

  // BEAUTY & SKINCARE
  {
    number: "05",
    title: "Threading",
    description:
      "Experience the art of precision hair removal with our professional threading service.",
    image:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    title: "Facial",
    description:
      "Rejuvenate your skin with our relaxing and revitalizing facial treatments.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "07",
    title: "Makeup",
    description:
      "Enhance your natural beauty with professional makeup for every occasion.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
  },

  // SPECIAL OCCASIONS
  {
    number: "08",
    title: "Bridal Makeup",
    description:
      "Beautiful bridal and groom makeup for men and women on your special day.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "09",
    title: "Saree Draping",
    description:
      "Complete your traditional look with elegant saree draping by our experts.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
  },
];

function Services() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // HORIZONTAL SCROLL
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    let animationFrame;

    const updateScroll = () => {
      const maxScroll = Math.max(0, track.scrollWidth - window.innerWidth);

      section.style.height = `${window.innerHeight + maxScroll}px`;

      const rect = section.getBoundingClientRect();

      const progress =
        maxScroll > 0 ? Math.min(1, Math.max(0, -rect.top / maxScroll)) : 0;

      track.style.transform = `translate3d(${-progress * maxScroll}px, 0, 0)`;
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(updateScroll);
    };

    const handleResize = () => {
      updateScroll();
    };

    updateScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // SCROLL REVEAL ANIMATION - PLAY ONLY ONCE
  useEffect(() => {
    const section = sectionRef.current;
    const heading = section?.querySelector(".services-heading");

    if (!section || !heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");

          // Stop observing after the first animation trigger
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "-5% 0px -5% 0px",
      },
    );

    observer.observe(heading);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="services-sticky">
        {/* HEADING */}

        <div className="services-heading">
          <span>WHAT WE OFFER</span>

          <h2>
            OUR <span>SERVICES</span>
          </h2>

          <p>Discover the art of looking and feeling your best.</p>
        </div>

        {/* SERVICES CARDS */}

        <div className="services-viewport">
          <div className="services-track" ref={trackRef}>
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>

                <span className="service-number">{service.number}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* SCROLL INDICATOR */}

        <div className="services-scroll-label">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line"></span>
        </div>
      </div>
    </section>
  );
}

export default Services;
