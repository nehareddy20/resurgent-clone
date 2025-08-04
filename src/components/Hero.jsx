import { motion } from "framer-motion";
import image from "/image.png";

const Hero = () => {
  return (
    <motion.section
      id="home"
      style={styles.hero}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        style={styles.imageWrapper}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <img src={image} alt="Hero" style={styles.image} />
      </motion.div>
      <motion.h1
        style={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We Create Productive Collaborative Experiences
      </motion.h1>
      <motion.p
        style={styles.sub}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Resurgent delivers innovative video collaboration solutions that help you share information and stay ahead...
      </motion.p>
    </motion.section>
  );
};

const styles = {
  hero: {
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "linear-gradient(135deg, #232946 0%, #161b22 100%)",
    borderRadius: "24px",
    boxShadow: "0 8px 32px rgba(100, 108, 255, 0.12)",
    padding: "2rem",
    marginBottom: "2rem",
  },
  imageWrapper: {
    background: "linear-gradient(135deg, #232946 60%, #161b22 100%)",
    padding: "0.5em",
    borderRadius: "20px",
    boxShadow: "0 2px 12px #646cff33",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2em",
    maxWidth: "650px",
    width: "100%",
  },
  image: {
    width: "100%",
    maxWidth: "800px",
    height: "auto",
    borderRadius: "18px",
    boxShadow: "0 4px 24px #646cff33",
    objectFit: "cover",
    background: "transparent",
    display: "block",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2.4rem",
    marginBottom: "10px",
    color: "#f4f4f4",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  sub: {
    fontSize: "1.2rem",
    marginBottom: "18px",
    color: "#b8c1ec",
    maxWidth: "900px",
  },
};

export default Hero;
