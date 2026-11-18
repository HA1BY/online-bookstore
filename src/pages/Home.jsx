import { Link } from 'react-router-dom';
import { books } from '../data/books';

export default function Home({ addToCart }) {
  const featured = books.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 text-center shadow-inner">
        <div className="container py-5">
          <h1 className="display-4 fw-bold mb-3">Discover Your Next Great Read</h1>
          <p className="lead mb-4">Explore thousands of books across technology, design, literature, and business.</p>
          <Link to="/catalog" className="btn btn-light btn-lg px-4 fw-bold shadow">Browse Catalog</Link>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Featured Best-Sellers</h2>
        <div className="row g-4">
          {featured.map((book) => (
            <div className="col-md-4" key={book.id}>
              <div className="card h-100 shadow-sm border-0">
                <img src={book.image} className="card-img-top" alt={book.title} style={{ height: '220px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-secondary mb-2 align-self-start">{book.category}</span>
                  <h5 className="card-title fw-bold">{book.title}</h5>
                  <p className="text-muted small">By {book.author}</p>
                  <p className="card-text text-truncate">{book.description}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fs-5 fw-bold text-success">${book.price.toFixed(2)}</span>
                    <button className="btn btn-primary btn-sm" onClick={() => addToCart(book)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}