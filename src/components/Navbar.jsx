import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close mobile menu
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo}>Resurgent</div>

        <div style={{ ...styles.links, ...(open ? styles.showMobile : {}) }}>
          {["home", "about", "services", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={styles.link}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} style={styles.hamburger}>
          ☰
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    backgroundColor: "#0d1117",
    padding: "12px 0",
    zIndex: 1000,
    borderBottom: "1px solid #30363d",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  logo: {
    color: "#58a6ff",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "16px",
    flexDirection: "row",
  },
  link: {
    background: "none",
    border: "none",
    color: "#c9d1d9",
    fontSize: "1rem",
    cursor: "pointer",
    padding: "8px",
  },
  hamburger: {
    display: "none",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    color: "#c9d1d9",
    cursor: "pointer",
  },
  showMobile: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "10px",
  },
};

export default Navbar;
