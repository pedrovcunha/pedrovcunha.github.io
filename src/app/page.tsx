'use client';

import { EarthScene } from "./ui/3d/earth";
import { TypeAnimation } from 'react-type-animation';
import styles from './page.module.css';


export default function Home() {
  return (
      <div id="root" style={{ height: "90vh", width: "100vw" }}>
        <EarthScene />
        <footer className={styles.footer}>
          <TypeAnimation
            sequence={[
              'Software Development',
              1000,
              'Driven by innovation',
              1000
            ]}
            wrapper="strong"
            speed={50}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
            className={styles.silkscreen}
          />
          <blockquote className={styles.roboto}>
            <p>You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the guy who'll decide where to go. — Dr. Seuss</p>
          </blockquote>
        </footer>
      </div>
  );
}