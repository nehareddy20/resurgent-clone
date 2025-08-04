import { motion } from "framer-motion";

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <motion.section
      id="services"
      className="py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ background: "linear-gradient(to bottom, #111827, #1f2937)", color: "#f4f4f4" }}
    >
      <motion.h2
        style={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Audio-Visual Solutions for Diverse Sectors
      </motion.h2>

      <motion.p
        style={styles.intro}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        From businesses to schools and retail outlets to hospitals, our audiovisual solutions can be customised to meet the specific requirements of different industries.
      </motion.p>

      <div style={styles.grid}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.07 }}
            style={{ ...styles.card, position: "relative" }}
          >
            <img src={item.icon} alt="" style={styles.icon} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <motion.div
              style={styles.glow}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const data = [
  {
    title: "Corporate",
    text: "Our AV solutions for businesses are designed...",
    icon: "https://cdn-icons-png.flaticon.com/512/2620/2620612.png",
  },
  {
    title: "Education",
    text: "By augmenting lessons and boosting interaction...",
    icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
  },
  {
    title: "Healthcare",
    text: "Our integrated AV solutions for hospitals are designed...",
    icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
  },
  {
    title: "Public Sector",
    text: "Our audiovisual solutions for the public sector cover...",
    icon: "https://cdn-icons-png.flaticon.com/512/1087/1087920.png",
  },
  {
    title: "Retail",
    text: "Whether it's wayfinding, digital signage or virtual support...",
    icon: "https://cdn-icons-png.flaticon.com/512/1111/1111513.png",
  },
  {
    title: "Residential",
    text: "From home automation and home theatres to lighting...",
    icon: "https://cdn-icons-png.flaticon.com/512/263/263115.png",
  },
];

const styles = {
  title: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "30px",
  },
  intro: {
    textAlign: "center",
    color: "#b8c1ec",
    fontSize: "1.1rem",
    marginBottom: "40px",
    maxWidth: "700px",
    margin: "0 auto 40px auto",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    width: "280px",
    textAlign: "center",
    boxShadow: "0 0 12px rgba(88, 166, 255, 0.2)",
    transition: "all 0.3s ease-in-out",
  },
  icon: {
  width: "50px",
  height: "50px",
  marginBottom: "10px",
  },
  glow: {
    position: "absolute",
    top: "-10%",
    left: "-10%",
    width: "120%",
    height: "120%",
    borderRadius: "20px",
    background: "radial-gradient(circle at center, #58a6ff33, transparent)",
    zIndex: -1,
    filter: "blur(20px)",
  }
};

export default Services;
