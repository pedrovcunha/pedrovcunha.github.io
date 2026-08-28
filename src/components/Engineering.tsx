import { useReveal } from '../hooks/useReveal';

export default function Engineering() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section id="engineering" className="engineering">
      <div ref={ref} className={className}>
        <p className="eyebrow">// how I think about engineering</p>
        <h2>Fundamentals over frameworks</h2>
        <p>
          Frameworks change every few years; the fundamentals don't. I care about knowing why a
          data structure or algorithm is the right call, not just that it works &mdash;
          understanding time and space complexity, choosing design patterns deliberately, and
          seeing the whole SDLC rather than just the ticket in front of me.
        </p>
        <p>
          That extends to infrastructure: understanding what problem a queue or event bus
          actually solves, and why you'd reach for AWS SQS/SNS, Azure Service Bus, RabbitMQ, or
          Kafka differently depending on the situation. That's the thinking that shapes good
          system design &mdash; and it's the gap I see most often in engineers who know the
          tools but not the reasoning behind them.
        </p>
      </div>
    </section>
  );
}
