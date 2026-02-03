import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";

function App() {
  // Step 2: Products array (inside App, outside return)
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://placehold.co/600x400?text=Wireless+Headphones",
      description: "Premium noise-cancelling headphones with 30-hour battery life",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://placehold.co/600x400?text=Smart+Watch",
      description: "Fitness tracker with heart rate monitor and GPS",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://placehold.co/600x400?text=Bluetooth+Speaker",
      description: "Portable waterproof speaker with 360-degree sound",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://placehold.co/600x400?text=Laptop+Stand",
      description: "Ergonomic aluminum stand for laptops and tablets",
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image: "https://placehold.co/600x400?text=Webcam",
      description: "4K webcam with auto-focus and noise reduction",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://placehold.co/600x400?text=Mechanical+Keyboard",
      description: "RGB backlit keyboard with custom switches",
    },
  ];

  // Step 3: Cart state
  const [cart, setCart] = useState([]);

  // Step 4: addToCart (never mutate state)
  const addToCart = (product) => {
    setCart([...cart, product]);
    // Optional debugging:
    // console.log("Cart:", [...cart, product]);
  };

  // Step 11: removeFromCart using filter
  // Use index so removing works even if the same product is added multiple times.
  const removeFromCart = (removeIndex) => {
    setCart(cart.filter((_, index) => index !== removeIndex));
  };

  // Step 12: total with reduce
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      {/* Step 7: pass cart count to Header */}
      <Header storeName="ComponentCorner" cartCount={cart.length} />

      <Hero
        title="Build your setup, one component at a time."
        subtitle="Clean, curated gear for developers who like reusable UI and organized code."
        ctaText="Shop Featured"
        image="https://placehold.co/1200x400/111111/ffffff?text=ComponentCorner+Featured"
      />

      <main className="page">
        <h2 className="section-title">Featured Products</h2>

        <section className="products">
          {/* Step 2 + map(): render ProductCards from products array */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </section>

        {/* Cart Section */}
        <section className="cart-section">
          <h2 className="section-title">Your Cart</h2>

          {/* Step 13: conditional rendering for empty cart */}
          {cart.length === 0 ? (
            <div className="empty-cart">
              <h3>Your cart is empty</h3>
              <p>Add an item to see it appear here.</p>
            </div>
          ) : (
            <>
              {/* Step 10: map cart items */}
              <div className="cart-items">
                {cart.map((item, index) => (
                  <CartItem
                    key={`${item.id}-${index}`}
                    item={item}
                    index={index}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>

              {/* Step 12: show total */}
              <div className="cart-total">
                <span>Total:</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.example"
        phone="(555) 123-4567"
        address="123 React Lane, Phoenix, AZ"
        copyright={`© ${new Date().getFullYear()} ComponentCorner. All rights reserved.`}
      />
    </div>
  );
}

export default App;
