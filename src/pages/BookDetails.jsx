import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';

export default function BookDetails({ cart, setCart, addToCart }) {
  const { id } = useParams();

  // If URL is /book/cart, display the shopping cart checkout view
  if (id === 'cart') {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
      <div className="container py-5">
        <h2 className="fw-bold mb-4">Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted fs-5">Your cart is currently empty.</p>
            <Link to="/catalog" className="btn btn-primary mt-2">Browse Catalog</Link>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-8">
              {cart.map((item) => (
                <div className="card mb-3 shadow-sm border-0 p-3" key={item.id}>
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img src={item.image} alt={item.title} className="img-fluid rounded" style={{ height: '70px', objectFit: 'cover' }} />
                    </div>
                    <div className="col-md-4">
                      <h5 className="mb-0 fw-bold">{item.title}</h5>
                      <small className="text-muted">${item.price.toFixed(2)} each</small>
                    </div>
                    <div className="col-md-3 d-flex align-items-center gap-2">
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => {
                          setCart(cart.map(i => i.id === item.id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i));
                        }}
                      >-</button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => {
                          setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
                        }}
                      >+</button>
                    </div>
                    <div className="col-md-3 text-end">
                      <span className="fw-bold text-success">${(item.price * item.quantity).toFixed(2)}</span>
                      <button 
                        className="btn btn-link text-danger btn-sm d-block ms-auto"
                        onClick={() => setCart(cart.filter(i => i.id !== item.id))}
                      >Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="card p-4 shadow-sm border-0 bg-light">
                <h4 className="fw-bold mb-3">Order Summary</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span className="fw-bold">${total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping:</span>
                  <span className="text-success fw-bold">Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4 fs-5 fw-bold">
                  <span>Total:</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
                <button 
                  className="btn btn-success w-100 fw-bold py-2"
                  onClick={() => {
                    alert('Order placed successfully! Thank you for shopping with ReadVerse.');
                    setCart([]);
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Otherwise, display individual book details dynamically based on ID
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="container py-5 text-center">
        <h3 className="text-danger">Book not found!</h3>
        <Link to="/catalog" className="btn btn-primary mt-3">Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to="/catalog" className="btn btn-outline-secondary mb-4">&larr; Back to Catalog</Link>
      <div className="row g-5 align-items-center">
        <div className="col-md-5">
          <img src={book.image} alt={book.title} className="img-fluid rounded shadow-lg w-100" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-7">
          <span className="badge bg-secondary mb-2">{book.category}</span>
          <h1 className="fw-bold mb-2">{book.title}</h1>
          <h5 className="text-muted mb-3">By {book.author}</h5>
          <h3 className="text-success fw-bold mb-4">${book.price.toFixed(2)}</h3>
          <p className="lead mb-4">{book.description}</p>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-primary btn-lg px-4" onClick={() => addToCart(book)}>Add to Cart</button>
            <Link to="/book/cart" className="btn btn-outline-primary btn-lg">View Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}