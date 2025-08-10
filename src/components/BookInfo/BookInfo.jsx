import React, { useEffect, useRef, useState } from "react";
import "./BookInfo.css";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const BookInfo = () => {
  const bookRef = useRef(null);
  const contactRef = useRef(null);
  const [bookVisible, setBookVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBookVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (bookRef.current) {
      observer.observe(bookRef.current);
    }

    return () => {
      if (bookRef.current) {
        observer.unobserve(bookRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContactVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // هنا ممكن تحط كود الإرسال بـ EmailJS أو أي API
    setIsSubmitted(true);
  };

  return (
    <>
     
      <div
        ref={bookRef}
        className={`book-container ${bookVisible ? "show" : ""}`}
      >
        <h2 className={bookVisible ? "fade-down" : ""}>
          If you’d like to explore more or try out some practice problems,
        </h2>
        <p className={`book-note ${bookVisible ? "fade-up" : ""}`}>
          you can download the course book
          <a
            href="https://drive.google.com/uc?export=download&id=1Hwp1iT3bL4ojM9TbySv1E3K4lwTz_T6f"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;here.
          </a>
        </p>
      </div>

     
      <div
        ref={contactRef}
        className={`contact-container ${contactVisible ? "show" : ""}`}
      >
        <h2 className={contactVisible ? "fade-down" : ""}>
          Kindly fill out the form to get in touch.
        </h2>

        <form
          className={`contact-form ${contactVisible ? "fade-up" : ""}`}
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
          ></textarea>
          <button type="submit" className={isSubmitted ? "done" : ""}>
            {isSubmitted ? "Done" : "Submit"}
          </button>
        </form>
      </div>

      <footer className={`thank-you ${bookVisible ? "fade-in" : ""}`}>
        <p>THANK YOU FOR VISITING OUR SITE</p>
      </footer>
    </>
  );
};

export default BookInfo;

