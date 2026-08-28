import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section id="top" className="hero">
      <div ref={ref} className={`hero__inner ${className}`}>
        <img src="/assets/headshot.jpg" alt="Portrait of Pedro Cunha" className="hero__photo" />
        <div className="hero__text">
          <p className="eyebrow">/* full-stack engineer */</p>
          <h1>Pedro Cunha</h1>
          <p className="tagline">
            Full-stack engineer who still believes Big-O matters more than the buzzwords.
          </p>
          <p className="hero__bio">
            Full-stack software engineer with 10+ years turning gnarly problems into fast,
            secure, scalable products. When I'm not shipping code, I'm probably experimenting
            with AI, hiking the Adelaide Hills, or having fun with my kids.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href="https://www.linkedin.com/in/pedro-cunha-42052087/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
            <a
              className="btn btn--ghost"
              href="https://github.com/pedrovcunha"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
          <div className="dots" aria-hidden="true">
            <span className="dot dot--coral"></span>
            <span className="dot dot--green"></span>
            <span className="dot dot--amber"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
