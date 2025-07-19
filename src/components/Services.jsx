const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-gray-100">
      <h2 style={styles.title}>Audio-Visual Solutions for Diverse Sectors</h2>
      <p style={styles.intro}>
        From businesses to schools and retail outlets to hospitals, our audiovisual solutions can be customised to meet the specific requirements of different industries.
      </p>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Corporate</h3>
          <p>
            Our AV solutions for businesses are designed to transcend spaces and connect people across multiple locations and devices, empowering teams as they work towards a common goal.
          </p>
        </div>
        <div style={styles.card}>
          <h3>Education</h3>
          <p>
            By augmenting lessons and boosting interaction, our AV integration solutions enrich the learning and teaching experience in both traditional and digital classrooms.
          </p>
        </div>
        <div style={styles.card}>
          <h3>Healthcare</h3>
          <p>
            Our integrated AV solutions for hospitals are designed to deliver precision and speed through advanced software and audiovisual equipment with a wide range of applications.
          </p>
        </div>
        <div style={styles.card}>
          <h3>Public Sector</h3>
          <p>
            Our audiovisual solutions for the public sector cover a wide spectrum of requirements and applications, using the latest technology to aid faster decision-making.
          </p>
        </div>
        <div style={styles.card}>
          <h3>Retail</h3>
          <p>
            Whether it's wayfinding, digital signage or virtual support, our audiovisual solutions for the retail sector can enhance customer interactions.
          </p>
        </div>
        <div style={styles.card}>
          <h3>Residential</h3>
          <p>
            From home automation and home theatres to lighting control systems, our bespoke audiovisual solutions help transform homes into more personalised spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  title: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '30px',
  },
  intro: {
    textAlign: 'center',
    color: '#b8c1ec',
    fontSize: '1.1rem',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px auto',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#161b22',
    padding: '20px',
    borderRadius: '10px',
    width: '280px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(88, 166, 255, 0.1)',
    color: '#f4f4f4',
  },
};

export default Services;