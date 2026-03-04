import { Link } from 'react-router-dom';

interface NavbarProps {
  variant: 'landing' | 'contact';
}

export function Navbar({ variant }: NavbarProps) {
  return (
    <nav>
      <div className="nav-inner">
        <Link to="/" className="logo-text">Nord Studio</Link>

        {variant === 'landing' ? (
          <div className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <Link to="/contact" className="nav-cta">Contact us</Link>
          </div>
        ) : (
          <Link to="/" className="nav-back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12.67 8H3.33M7.33 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </Link>
        )}
      </div>
    </nav>
  );
}
