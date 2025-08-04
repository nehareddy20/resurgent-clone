import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      style={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        style={styles.aurora}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} Resurgent Co. All rights reserved.
      </p>
    </motion.footer>
  );
};

const styles = {
  footer: {
    position: "relative",
    backgroundColor: "#161b22",
    padding: "20px",
    textAlign: "center",
    color: "#8b949e",
    overflow: "hidden",
    zIndex: 1,
  },
  aurora: {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(-45deg, #58a6ff, #ff80bf, #00ffaa, #58a6ff)",
    backgroundSize: "400% 400%",
    opacity: 0.04,
    zIndex: 0,
  },
  text: {
    position: "relative",
    zIndex: 2,
    transition: "color 0.3s",
  },
};

export default Footer;
