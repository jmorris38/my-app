import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "../About/style.css";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { email, userName, message } = formData;

    if (!validateEmail(email) || !userName || !message) {
      setErrorMessage("Please provide a valid email, name, and message.");
      return;
    }

    // Your form submission logic can go here

    // Clear form fields after submission
    setFormData({
      email: "",
      userName: "",
      message: "",
    });
    setErrorMessage("");
  };

  return (
    <section id="reach-out" className="contact-container">
      <div className="contact-header">
        <h2 className="section-title">Contact Me</h2>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Hello {formData.userName}</h3>
          <p>Interested in reaching out?</p>
          <address>
            San Francisco, CA <br />
            Phone: <a href="tel:951.310.5642">951.310.5642</a>
            <br />
            Email:{" "}
            <a href="mailto:testdata87@yahoo.com">testdata@yahoo.com</a>
          </address>
          <p>
            <strong>Your feedback is valuable!</strong>
          </p>
        </div>

        <div className="contact-form">
          <h3>Contact Me</h3>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="contact-name">Your Name</label>
            <input
              type="text"
              id="contact-name"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            />

            <label htmlFor="contact-email">Your Email</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
            />

            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              required
            />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>

          {errorMessage && <p className="error-text">{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
}

export default Contact;
