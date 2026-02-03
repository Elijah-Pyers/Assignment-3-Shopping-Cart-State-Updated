import "./CartItem.css";

export default function CartItem({ item, index, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">${item.price.toFixed(2)}</div>
      </div>

      <button
        className="remove-btn"
        type="button"
        onClick={() => onRemove(index)}
      >
        Remove
      </button>
    </div>
  );
}
