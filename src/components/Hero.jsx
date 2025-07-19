import image from '/image.png';

const Hero = () => {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.imageWrapper}>
        <img
          src={image}
          alt="Hero"
          style={styles.image}
        />
      </div>
      <h1 style={styles.heading}>We Create Productive Collaborative Experiences</h1>
      <p style={styles.sub}>
        By integrating innovative and versatile video collaboration solutions into your business, we transform the way you share information and help you stay one step ahead. Always.
      </p>
      <p style={styles.sub}>
        With over a decade of experience, Resurgent delivers time-efficient solutions that streamline workplace collaboration, optimise workflow, and increase productivity. Our advanced technical know-how, custom-built deployment plans, and extensive quality control programmes ensure a superior user experience and seamless functioning of technology at all times.
      </p>
      <p style={styles.sub}>
        Our Enterprise Project Delivery Team aligns project delivery schedules with your business goals to keep you updated throughout the project lifecycle and ensure timely delivery. No matter your business, our scalable infrastructure solutions will simplify communication and amplify your success.
      </p>
      <p style={styles.sub}>
        We are Resurgent, and we’re ready to transform the digital experiences for your team now and for the future.
      </p>
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
    marginBottom: '18px',
    color: '#b8c1ec',
    maxWidth: '900px',
  },
};

export default Hero;