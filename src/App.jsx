import "./App.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header storeName="ComponentCorner" />

      <Hero
        title="Build your setup, one component at a time."
        subtitle="Clean, curated gear for developers who like reusable UI and organized code."
        ctaText="Shop Featured"
        image="https://placehold.co/1200x400/111111/ffffff?text=ComponentCorner+Featured"
      />

      <main className="page">
        <h2 className="section-title">Featured Products</h2>

        <section className="products">
          <ProductCard
            name="Mechanical Keyboard"
            price={129.99}
            image="https://placehold.co/600x400?text=Keyboard"
            description="Tactile switches, clean sound, and a layout that feels fast."
          />

          <ProductCard
            name="Studio Headphones"
            price={89.5}
            image="https://placehold.co/600x400?text=Headphones"
            description="Clear audio for focus sessions and long coding playlists."
          />

          <ProductCard
            name="USB-C Hub"
            price={49.99}
            image="https://placehold.co/600x400?text=USB-C+Hub"
            description="HDMI, USB, SD—everything you need in one compact hub."
          />
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
