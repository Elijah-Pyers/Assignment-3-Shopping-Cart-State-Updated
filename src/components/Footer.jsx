import "./Footer.css";

function Footer({ storeName, email, phone, address, copyright }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3 className="footer-title">{storeName}</h3>
          <p className="footer-text">
            A small, curated shop built with React components.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <p className="footer-text">{email}</p>
          <p className="footer-text">{phone}</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Location</h4>
          <p className="footer-text">{address}</p>
        </div>
      </div>

      <div className="footer-bottom">{copyright}</div>
    </footer>
  );
}

export default Footer;
