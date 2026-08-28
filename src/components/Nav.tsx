import { useState } from 'react';

const LINKS = [
  { href: '#engineering', label: 'Engineering' },
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav">
      <a href="#top" className="nav__logo">PC</a>
      <button
        type="button"
        className={`nav__toggle ${isOpen ? 'is-open' : ''}`}
        aria-expanded={isOpen}
        aria-controls="nav-links"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        <span className="nav__toggle-bar" aria-hidden="true"></span>
      </button>
      <nav id="nav-links" className={`nav__links ${isOpen ? 'is-open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
