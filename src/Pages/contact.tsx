import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = (): boolean => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required.";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on input change
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
        try {
              const response = await fetch('./.netlify/functions/send-email', {
                method: 'POST',
                body: JSON.stringify(formData),
              });
              if (response.ok) {
                  alert('Message sent successfully!');
                  setFormData({ name: '', email: '', message: '' }); // Reset the form
              } else {
                  alert('Failed to send message. Try again.');
              }
            } catch (error) {
                alert('Error sending message: ' +error);
            }
          }
        };

        return (
          <div className="pages">
              <h3 className = "contact-header">Contact</h3>
              <form
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
              >

              <label htmlFor="name">Name:</label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <label htmlFor="email">Email:</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <label htmlFor="message">Message:</label>
              <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
              />
              {errors.message && <span className="error">{errors.message}</span>}

              <button type="submit">Send</button>
              </form>
          </div>
        );
      };

export default Contact;