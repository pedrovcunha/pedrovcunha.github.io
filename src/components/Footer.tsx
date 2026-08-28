export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <p>Based in Adelaide, South Australia</p>
      <a
        className="btn btn--primary"
        href="https://www.linkedin.com/in/pedro-cunha-42052087/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect on LinkedIn
      </a>
      <div className="dots" aria-hidden="true">
        <span className="dot dot--coral"></span>
        <span className="dot dot--green"></span>
        <span className="dot dot--amber"></span>
      </div>
    </footer>
  );
}
