import "./Header.css";

export default function Header({ storeName = "ComponentCorner", cartCount = 0 }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="brand">{storeName}</h1>

        <nav className="nav">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Products
          </a>
          <a className="nav-link" href="#">
            Support
          </a>
        </nav>

        <div className="cart-container" aria-label="Shopping cart">
          <span className="cart-icon" aria-hidden="true">
            🛒
          </span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
}
