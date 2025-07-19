const Hero = () => {
  return (
    <section style={styles.hero}>
      <img
        src={require('../image.png')}
        alt="Hero"
        style={styles.image}
      />
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
    background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
    borderRadius: '24px',
    boxShadow: '0 8px 32px rgba(100, 108, 255, 0.12)',
    padding: '2rem',
    marginBottom: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '16px',
    boxShadow: '0 4px 24px #646cff33',
    marginBottom: '2em',
    objectFit: 'cover',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '10px',
    color: '#22223b',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  sub: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#4a4e69',
  },
  button: {
    padding: '12px 32px',
    backgroundColor: '#58a6ff',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1.1rem',
    textDecoration: 'none',
    boxShadow: '0 2px 8px rgba(88, 166, 255, 0.15)',
    transition: 'background 0.2s, color 0.2s',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Hero;