import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div className="portfolio__container">
      <motion.div
        className="portfolio__wrapper"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="portfolio__imageContainer"
          ref={ref}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={item.img} alt={item.title} />
        </motion.div>
        <motion.div
          className="portfolio__textContainer"
          style={{ y }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>{item.title}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{item.desc}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Single;
