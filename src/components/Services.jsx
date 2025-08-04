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
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(88, 166, 255, 0.4)" }}
            style={styles.card}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const data = [
  {
    title: "Corporate",
    text: "Our AV solutions for businesses are designed to transcend spaces and connect people across multiple locations and devices, empowering teams as they work towards a common goal.",
  },
  {
    title: "Education",
    text: "By augmenting lessons and boosting interaction, our AV integration solutions enrich the learning and teaching experience in both traditional and digital classrooms.",
  },
  {
    title: "Healthcare",
    text: "Our integrated AV solutions for hospitals are designed to deliver precision and speed through advanced software and audiovisual equipment with a wide range of applications.",
  },
  {
    title: "Public Sector",
    text: "Our audiovisual solutions for the public sector cover a wide spectrum of requirements and applications, using the latest technology to aid faster decision-making.",
  },
  {
    title: "Retail",
    text: "Whether it's wayfinding, digital signage or virtual support, our audiovisual solutions for the retail sector can enhance customer interactions.",
  },
  {
    title: "Residential",
    text: "From home automation and home theatres to lighting control systems, our bespoke audiovisual solutions help transform homes into more personalised spaces.",
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
};

export default Services;
