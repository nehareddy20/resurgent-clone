import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      style={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Contact Us
      </motion.h2>
      <motion.p
        style={styles.text}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Have questions or want to work with us?
      </motion.p>
      <motion.a
        href="mailto:contact@resurgent.co.in"
        style={styles.button}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Email Us
      </motion.a>
    </motion.section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#0d1117",
    color: "#c9d1d9",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  text: {
    marginBottom: "20px",
    fontSize: "1.1rem",
  },
  button: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#238636",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },
};

export default Contact;
