import { useReveal } from '../hooks/useReveal';

export default function Credentials() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section id="credentials" className="credentials">
      <div ref={ref} className={className}>
        <p className="eyebrow">// credentials</p>
        <h2>Certifications &amp; education</h2>
        <div className="badges">
          <span className="badge">
            AWS Certified Solutions Architect &ndash; Associate <small>2024&ndash;2027</small>
          </span>
          <span className="badge">Microsoft Azure Fundamentals</span>
          <span className="badge">MCPS: Microsoft Certified Professional</span>
        </div>
        <div className="education">
          <p>
            <strong>Master of Applied Information Technology</strong> &mdash; Victoria University
          </p>
          <p>
            <strong>Bachelor of Computer Science</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
