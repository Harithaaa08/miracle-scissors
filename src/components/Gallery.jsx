import React from "react";
import "./Gallery.css";

import { useEffect, useRef } from "react";
import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    title: "Beautiful Hair Transformations",
    category: "Hair Styling",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    className: "gallery-large",
  },
  {
    id: 2,
    title: "Elegant Bridal Look",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85",
    className: "gallery-tall",
  },
  {
    id: 3,
    title: "Professional Hair Styling",
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    id: 4,
    title: "Beauty and Makeup",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    id: 5,
    title: "Modern Men's Grooming",
    category: "Men's Styling",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    className: "gallery-tall",
  },
  {
    id: 6,
    title: "Beauty and Elegance",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    id: 7,
    title: "Gorgeous Hair Styling",
    category: "Hair Styling",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    id: 8,
    title: "Professional Makeup",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&w=900&q=85",
    className: "gallery-tall",
  },
  {
    id: 9,
    title: "Salon Beauty Experience",
    category: "Salon",
    image:
      "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d2?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    id: 10,
    title: "Elegant Beauty Look",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  //   {
  //     id: 11,
  //     title: "Hair Care and Styling",
  //     category: "Hair Care",
  //     image:
  //       "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85",
  //     className: "gallery-tall",
  //   },
  //   {
  //     id: 12,
  //     title: "Bridal Beauty",
  //     category: "Bridal",
  //     image:
  //       "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85",
  //     className: "",
  //   },
];

function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const section = galleryRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("gallery-visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery-section" id="gallery" ref={galleryRef}>
      <div className="gallery-container">
        <div className="gallery-heading">
          <span>OUR GALLERY</span>

          <h2>
            A Glimpse of <span>Our Work</span>
          </h2>

          <p>
            Every style tells a story. Explore the beauty, creativity and
            transformations created at Miracle Scissors.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <div
              className={`gallery-item ${item.className}`}
              key={item.id}
              style={{ "--gallery-delay": `${index * 0.15}s` }}
            >
              <img src={item.image} alt={item.title} loading="lazy" />

              <div className="gallery-overlay">
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
                <span className="gallery-arrow">↗</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <span></span>
          <p>BEAUTY IN EVERY DETAIL</p>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
