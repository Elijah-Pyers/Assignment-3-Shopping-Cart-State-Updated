import "./Header.css";

function Header({ storeName }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="brand">{storeName}</h1>

        <nav className="nav">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Shop
          </a>
          <a className="nav-link" href="#">
            Deals
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>
        </nav>

        <button className="header-cta" type="button">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
