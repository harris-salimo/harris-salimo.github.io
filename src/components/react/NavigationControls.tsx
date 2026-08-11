import { useRef } from 'react';
import ThemeToggle from './ThemeToggle';

interface NavigationItem {
  label: string;
  href: string;
  current: boolean;
}

interface NavigationControlsProps {
  items: NavigationItem[];
}

export default function NavigationControls({ items }: NavigationControlsProps) {
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  function closeMobileMenu() {
    mobileMenu.current?.removeAttribute('open');
  }

  return (
    <div className="site-nav__actions">
      <nav className="site-nav__desktop" aria-label="Primary navigation">
        {items.map((item) => (
          <a key={item.href} href={item.href} aria-current={item.current ? 'page' : undefined}>
            {item.label}
          </a>
        ))}
      </nav>

      <ThemeToggle />

      <details className="site-nav__mobile" ref={mobileMenu}>
        <summary>
          <span>Menu</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m7.4 8.6 4.6 4.6 4.6-4.6L18 10l-6 6-6-6 1.4-1.4Z" />
          </svg>
        </summary>
        <nav aria-label="Mobile navigation">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </div>
  );
}
