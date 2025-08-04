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
      style={{
        background: "linear-gradient(to bottom, #111827, #1f2937)",
        color: "#f4f4f4",
      }}
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
    text: "Our AV solutions for businesses are designed to transcend spaces and connect people across multiple locations and devices, empowering teams as they work towards a common goal.",
    icon: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=800", // Business meeting room
  },
  {
    title: "Education",
    text: "By augmenting lessons and boosting interaction, our AV integration solutions enrich the learning and teaching experience in both traditional and digital classrooms.",
    icon: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?fit=crop&w=400&q=80", // Classroom smartboard
  },
  {
    title: "Healthcare",
    text: "Our integrated AV solutions for hospitals are designed to deliver precision and speed through advanced software and audiovisual equipment with a wide range of applications.",
    icon: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800", // Hospital equipment
  },
  {
    title: "Public Sector",
    text: "Our audiovisual solutions for the public sector cover a wide spectrum of requirements and applications, using the latest technology to aid faster decision-making.",
    icon: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800", // Government boardroom
  },
  {
    title: "Retail",
    text: "Whether it's wayfinding, digital signage or virtual support, our audiovisual solutions for the retail sector can enhance customer interactions.",
    icon: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?fit=crop&w=400&q=80", // Digital signage in retail
  },
  {
    title: "Residential",
    text: "From home automation and home theatres to lighting control systems, our bespoke audiovisual solutions help transform homes into more personalised spaces.",
    icon: "https://cdn.pixabay.com/photo/2020/01/13/10/38/living-room-4766474_1280.jpg", // Home theater setup
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
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
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
  },
};

export default Services;
