import { useReveal } from '../hooks/useReveal';
import { useCountUp } from '../hooks/useCountUp';
import { stats, changelog } from '../data/experience';

const NUM_PATTERN = /^(\d+(?:\.\d+)?)(.*)$/;

function StatNumber({ num, active }: { num: string; active: boolean }) {
  const match = num.match(NUM_PATTERN);
  if (!match) return <>{num}</>;

  const [, digits, suffix] = match;
  const decimals = digits.includes('.') ? digits.split('.')[1].length : 0;
  const value = useCountUp(parseFloat(digits), active);

  return (
    <>
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}

export default function Experience() {
  const statsReveal = useReveal<HTMLDivElement>();
  const changelogReveal = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="experience">
      <div ref={statsReveal.ref} className={statsReveal.className}>
        <p className="eyebrow">// experience</p>
        <h2>Highlights</h2>
        <div className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat__num">
                <StatNumber num={stat.num} active={statsReveal.isVisible} />
              </span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div ref={changelogReveal.ref} className={changelogReveal.className}>
        <h3 className="changelog__title">Career changelog</h3>
        <ul className="changelog">
          {changelog.map((entry) => (
            <li className="changelog__item" key={entry.version}>
              <span className={`changelog__dot dot--${entry.dotColor}`} aria-hidden="true"></span>
              <div className="changelog__body">
                <span className="changelog__version">{entry.version}</span>
                <span className="changelog__role">{entry.role}</span>
                <p>{entry.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
