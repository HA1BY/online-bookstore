import { useState } from 'react';
import { Link } from 'react-router-dom';
import { books } from '../data/books';

export default function Catalog({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'Design', 'Literature', 'Business'];

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-3 text-center">Book Catalog & Services</h2>
      <p className="text-center text-muted mb-4">Search through our inventory and filter by category.</p>

      {/* Search & Filter Controls */}
      <div className="row mb-4 g-3">
        <div className="col-md-6">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search by book title or author..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6 d-flex gap-2 flex-wrap justify-content-md-end">
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Book Grid */}
      <div className="row g-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
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
                    <div className="btn-group">
                      <Link to={`/book/${book.id}`} className="btn btn-outline-primary btn-sm">Details</Link>
                      <button className="btn btn-primary btn-sm" onClick={() => addToCart(book)}>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <h5 className="text-muted">No books found matching your criteria.</h5>
          </div>
        )}
      </div>
    </div>
  );
}