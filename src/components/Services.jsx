const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-gray-100 dark:bg-zinc-900">
      <h2 style={styles.title}>Our Services</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Brand Strategy</h3>
          <p>Crafting your brand's identity and positioning for market impact.</p>
        </div>
        <div style={styles.card}>
          <h3>Digital Marketing</h3>
          <p>SEO, ads, and content strategies to boost online visibility.</p>
        </div>
        <div style={styles.card}>
          <h3>Design & Development</h3>
          <p>UI/UX design and development of interactive digital platforms.</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  title: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '40px',
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
  },
};

export default Services;
