const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.text}>Have questions or want to work with us?</p>
      <a href="mailto:contact@resurgent.co.in" style={styles.button}>Email Us</a>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#0d1117',
    color: '#c9d1d9',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  text: {
    marginBottom: '20px',
    fontSize: '1.1rem',
  },
  button: {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#238636',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
  },
};

export default Contact;
