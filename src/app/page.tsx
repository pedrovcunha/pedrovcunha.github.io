'use client';

import { EarthScene } from "./ui/3d/earth";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
      <div id="root" style={{ height: "90vh", width: "100vw" }}>
        <EarthScene />
        <footer>
          <TypeAnimation
            sequence={[
              'Pedro Cunha',
              1000,
              'Software Developer',
              1000,
              'Problem Solver',
              1000,
              'Driven by innovation',
              1000
            ]}
            wrapper="strong"
            speed={50}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
          <blockquote>
            <p>You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the guy who'll decide where to go. — Dr. Seuss</p>
          </blockquote>
        </footer>
      </div>
  );
}