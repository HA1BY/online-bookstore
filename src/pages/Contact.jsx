import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-3 text-center">Contact Us</h2>
      <p className="text-center text-muted mb-5">Have a question or need assistance? Drop us a message below.</p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {submitted ? (
            <div className="alert alert-success text-center py-4">
              <h4 className="fw-bold">Thank you!</h4>
              <p className="mb-0">Your message has been sent successfully. We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0">
              <div className="mb-3">
                <label className="form-label fw-bold">Your Name</label>
                <input type="text" className="form-control" required placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email Address</label>
                <input type="email" className="form-control" required placeholder="john@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea className="form-control" rows="4" required placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 fw-bold">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}