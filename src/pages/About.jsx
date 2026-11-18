export default function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="fw-bold mb-3">About ReadVerse</h2>
          <p className="lead text-muted">
            ReadVerse is a modern, student-built online bookstore crafted for web programming enthusiasts, avid readers, and lifelong learners.
          </p>
          <p>
            Our mission is to make finding and purchasing books seamless, lightning-fast, and visually delightful. Using state-of-the-art frontend tools like ReactJS and Bootstrap, we ensure a fully responsive experience across all desktop and mobile devices.
          </p>
          <ul className="list-unstyled mt-3">
            <li className="mb-2">✅ Curated technical and literary catalogs</li>
            <li className="mb-2">✅ Instant cart management and secure UI flow</li>
            <li className="mb-2">✅ Fully responsive desktop & mobile design</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80" 
            alt="Bookstore library" 
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}