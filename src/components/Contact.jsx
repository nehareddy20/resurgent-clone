import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      style={styles.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating image effect */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/726/726623.png"
        alt="Mail Icon"
        style={styles.floatingIcon}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Contact Us
      </motion.h2>

      <motion.p
        style={styles.text}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Have questions or want to work with us?
      </motion.p>

      <motion.a
        href="mailto:contact@resurgent.co.in"
        style={styles.button}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px #238636, 0 0 40px #23863666",
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        Email Us
      </motion.a>
    </motion.section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
    background: "radial-gradient(ellipse at center, #161b22 0%, #0d1117 100%)",
    color: "#c9d1d9",
    position: "relative",
    overflow: "hidden",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    zIndex: 2,
    position: "relative",
  },
  text: {
    marginBottom: "20px",
    fontSize: "1.1rem",
    zIndex: 2,
    position: "relative",
  },
  button: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#238636",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    zIndex: 2,
    position: "relative",
  },
  floatingIcon: {
    width: "80px",
    opacity: 0.08,
    position: "absolute",
    top: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 0,
  },
};

export default Contact;
