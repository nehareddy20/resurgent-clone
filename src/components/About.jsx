import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <motion.section
      id="about"
      style={styles.section}
      initial={{ opacity: 0, rotateX: -15 }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Tilt glareEnable={true} glareMaxOpacity={0.2} tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <motion.div
          style={styles.card}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 30px rgba(88, 166, 255, 0.5)",
          }}
        >
          <motion.h2
            style={styles.heading}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.h2>
          <motion.p
            style={styles.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Resurgent delivers innovative video collaboration solutions.<br />
            We transform how your business communicates and collaborates.
          </motion.p>
          <motion.div
            style={styles.glowBorder}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </Tilt>
    </motion.section>
  );
};

const styles = {
  section: {
    padding: "100px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle, #1a1a1a 0%, #0d1117 100%)",
  },
  card: {
    position: "relative",
    padding: "2rem",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 20px rgba(88, 166, 255, 0.15)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    maxWidth: "600px",
    width: "100%",
    zIndex: 1,
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#58a6ff",
  },
  text: {
    fontSize: "1.1rem",
    color: "#e6edf3",
    lineHeight: "1.6",
  },
  glowBorder: {
    position: "absolute",
    inset: "-2px",
    borderRadius: "22px",
    background: "linear-gradient(45deg, #58a6ff, #ff80bf, #58a6ff)",
    zIndex: -1,
    filter: "blur(12px)",
  },
};

export default About;
