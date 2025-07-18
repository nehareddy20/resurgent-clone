const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Resurgent Co. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#161b22',
    padding: '20px',
    textAlign: 'center',
    color: '#8b949e',
    borderTop: '1px solid #30363d',
    fontSize: '0.9rem',
  },
};

export default Footer;
