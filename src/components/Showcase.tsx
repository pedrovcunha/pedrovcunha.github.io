import { useReveal } from "../hooks/useReveal";

export default function Showcase() {
    const { ref, className } = useReveal<HTMLDivElement>();

    return (
        <section id="showcase" className="showcase">
            <div ref={ref} className={`showcase__card ${className}`}>
                <p className="eyebrow">// side project</p>
                <h2>Something fun I built</h2>
                <p>
                    An interactive 3D graph explorer &mdash; built for the joy
                    of bending JavaScript into shapes, not for a client.
                </p>
                <p className="showcase__soon">Live demo coming soon.</p>
            </div>
        </section>
    );
}
