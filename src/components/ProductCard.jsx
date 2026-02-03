import "./ProductCard.css";

function ProductCard({
  product,
  onAddToCart,
  name,
  price,
  image,
  description,
}) {
  
  const resolvedName = product?.name ?? name;
  const resolvedPrice = product?.price ?? price;
  const resolvedImage = product?.image ?? image;
  const resolvedDescription = product?.description ?? description;

  const handleAddToCart = () => {
    // Prefer the full product object if provided
    if (onAddToCart) {
      const itemToAdd = product ?? {
        id: crypto?.randomUUID?.() ?? Date.now(),
        name: resolvedName,
        price: Number(resolvedPrice),
        image: resolvedImage,
        description: resolvedDescription,
      };

      onAddToCart(itemToAdd);
    }
  };

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={resolvedImage} alt={resolvedName} />
      </div>

      <div className="product-body">
        <header className="product-header">
          <h3 className="product-name">{resolvedName}</h3>
          <p className="product-price">${Number(resolvedPrice).toFixed(2)}</p>
        </header>

        <p className="product-description">{resolvedDescription}</p>

        <div className="product-actions">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddToCart}
          >
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
