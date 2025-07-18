const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.heading}>We Build Brands That Matter</h1>
      <p style={styles.sub}>Branding • Marketing • Digital Strategy</p>
      <a href="#contact" style={styles.button}>Let’s Connect</a>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '10px',
  },
  sub: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#c9d1d9',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#58a6ff',
    color: '#0d1117',
    borderRadius: '8px',
    fontWeight: '600',
  },
};

export default Hero;
