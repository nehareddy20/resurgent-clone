import image from '../image.png';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.imageWrapper}>
        <img
          src={image}
          alt="Hero"
          style={styles.image}
        />
      </div>
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
    background: 'linear-gradient(135deg, #232946 0%, #161b22 100%)',
    borderRadius: '24px',
    boxShadow: '0 8px 32px rgba(100, 108, 255, 0.12)',
    padding: '2rem',
    marginBottom: '2rem',
  },
  imageWrapper: {
    background: 'linear-gradient(135deg, #232946 60%, #161b22 100%)',
    padding: '0.5em',
    borderRadius: '20px',
    boxShadow: '0 2px 12px #646cff33',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2em',
    maxWidth: '650px',
    width: '100%',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    borderRadius: '18px',
    boxShadow: '0 4px 24px #646cff33',
    objectFit: 'cover',
    background: 'transparent',
    display: 'block',
    margin: '0 auto',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '10px',
    color: '#f4f4f4',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  sub: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#b8c1ec',
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