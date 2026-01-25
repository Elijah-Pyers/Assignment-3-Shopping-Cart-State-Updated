import "./ProductCard.css";

function ProductCard({ name, price, image, description }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={image} alt={name} />
      </div>

      <div className="product-body">
        <header className="product-header">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">${Number(price).toFixed(2)}</p>
        </header>

        <p className="product-description">{description}</p>

        <div className="product-actions">
          <button className="btn btn-primary" type="button">
            Add to Cart
          </button>
          <button className="btn btn-ghost" type="button">
            View
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
