import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Placeholder imports (we will create these files in Step 2)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import BookDetails from './pages/BookDetails';

function App() {
  // Shared cart state across pages
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === book.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
            <Route path="/contact" element={<Contact />} />
            {/* Dynamic route handling both individual book inspection and cart view */}
            <Route 
              path="/book/:id" 
              element={<BookDetails cart={cart} setCart={setCart} addToCart={addToCart} />} 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;