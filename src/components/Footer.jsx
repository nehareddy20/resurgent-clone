import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      style={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; {new Date().getFullYear()} Resurgent Co. All rights reserved.</p>
    </motion.footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#161b22",
    padding: "20px",
    textAlign: "center",
    color: "#8b949e",
    borderTop: "1px solid #30363d",
    fontSize: "0.9rem",
  },
};

export default Footer;
