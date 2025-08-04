import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "public/image_1.png", // Office
  "public/image_2.png", // Team collab
  "public/image_3.png", // Conference
  "public/image_4.png", // Discussion
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" style={styles.hero}>
      <div style={styles.imageWrapper}>
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Carousel"
            style={styles.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      <motion.h1
        style={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        We Create Productive Collaborative Experiences
      </motion.h1>

      <motion.p
        style={styles.sub}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Resurgent delivers innovative video collaboration solutions that help you share information and stay ahead. With over a decade of experience, we streamline workplace collaboration, optimise workflow, and boost productivity. Our expert team ensures seamless technology integration and timely project delivery, so your business can communicate better and succeed faster.
      </motion.p>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: "90vh",
    padding: "3rem 1rem",
    background: "linear-gradient(to bottom, #111827, #0d1117)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    height: "400px",
    overflow: "hidden",
    borderRadius: "20px",
    marginBottom: "2rem",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  },
  heading: {
    fontSize: "2.4rem",
    color: "#f4f4f4",
    fontWeight: "700",
    marginBottom: "1rem",
  },
  sub: {
    fontSize: "1.2rem",
    color: "#b8c1ec",
    maxWidth: "900px",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    height: "400px", // 👈 Fixed height
    overflow: "hidden",
    borderRadius: "20px",
    marginBottom: "2rem",
  },

  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover", // 👈 Prevents stretching/squishing
    borderRadius: "20px",
  }
};

export default Hero;
