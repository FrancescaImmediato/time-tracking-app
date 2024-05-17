import epochLogo from '../assets/epochLogo.png';

export default function Navbar() {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation" style={{padding:'1.25em 1.5em 1em 5em'}}>
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            src={epochLogo}
            alt="Epoch Logo"
            style={{ transform: 'scale(4)' }}
          />
        </a>

        <a
          role="button"
          className="navbar-burger "
          aria-label="menu"
          aria-expanded="false"
         //  data-target="navbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="/">
            Home
          </a>
          <a className="navbar-item" href="/projects">
            Projects
          </a>
          <a className="navbar-item" href="/">
            Page 1
          </a>
          <a className="navbar-item" href="/">
            Page 2
          </a>
          <a className="navbar-item" href="/">
            Page 3
          </a>
          <a className="navbar-item" href="/">
            Settings
          </a>
        </div>
      </div>
    </nav>
  );
}