import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="home"
      style={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div style={styles.imageWrapper}>
        {/* Background image slide-in */}
        <motion.img
          src="https://images.unsplash.com/photo-1556761175-129418cb2dfe"
          alt="Office Teamwork"
          style={styles.backgroundImage}
          initial={{ scale: 1.1, opacity: 0, x: -100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        />

        {/* Foreground floating image */}
        <motion.img
          src="https://images.unsplash.com/photo-1581090700227-1e8e9081a0c5"
          alt="Overlay Collab"
          style={styles.floatingImage}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />

        {/* Light beam shimmer */}
        <motion.div
          style={styles.beam}
          animate={{ x: ["-100%", "150%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </div>

      <motion.h1
        style={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        We Create Productive Collaborative Experiences
      </motion.h1>

      <motion.p
        style={styles.sub}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Resurgent delivers innovative video collaboration solutions that help you share information and stay ahead...
      </motion.p>
    </motion.section>
  );
};

const styles = {
  hero: {
    position: "relative",
    overflow: "hidden",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    background: "linear-gradient(to bottom, #111827, #0d1117)",
    padding: "3rem 1rem",
    borderRadius: "2rem",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    marginBottom: "2rem",
    overflow: "hidden",
    borderRadius: "20px",
  },
  backgroundImage: {
    width: "100%",
    height: "auto",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
  },
  floatingImage: {
    position: "absolute",
    top: "20%",
    right: "-10%",
    width: "180px",
    height: "auto",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    opacity: 0.85,
  },
  beam: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "30%",
    background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
    transform: "rotate(15deg)",
    pointerEvents: "none",
  },
  heading: {
    fontSize: "2.4rem",
    marginBottom: "10px",
    color: "#f4f4f4",
    fontWeight: "700",
  },
  sub: {
    fontSize: "1.2rem",
    color: "#b8c1ec",
    maxWidth: "900px",
  },
};

export default Hero;
