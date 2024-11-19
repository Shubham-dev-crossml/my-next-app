"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState<null | typeof formData>(
    null
  );

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "shubham.shrivastav@crossml.com",
      link: "mailto:shubham.shrivastav@crossml.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Chandigarh, CDG",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/yourusername",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      link: "https://twitter.com/yourusername",
    },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Simulating a successful submission
    setTimeout(() => {
      setSubmittedData(formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <MessageSquare className="header-icon" />
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-container">
          <div className="card">
            <h2>Send me a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <Send className="btn-icon" />
                Send Message
              </button>
            </form>
          </div>
          {submittedData && (
            <div className="card submitted-data">
              <h2>Submitted Data</h2>
              <p>
                <strong>Name:</strong> {submittedData.name}
              </p>
              <p>
                <strong>Email:</strong> {submittedData.email}
              </p>
              <p>
                <strong>Subject:</strong> {submittedData.subject}
              </p>
              <p>
                <strong>Message:</strong> {submittedData.message}
              </p>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="contact-info-container">
          <div className="card">
            <h2>Contact Information</h2>
            <div className="info-list">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="info-item">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="card social-card">
            <h2>Connect with Me</h2>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #e0f7fa 0%, #bbdefb 100%);
        }

        .contact-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .header-icon {
          width: 2rem;
          height: 2rem;
          color: #0288d1;
        }

        h1 {
          font-size: 2.5rem;
          color: #1a237e;
          margin: 0;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        .card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          margin-bottom: 2rem;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        h2 {
          font-size: 1.5rem;
          color: #1a237e;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        input,
        textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e0e0e0;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #0288d1;
        }

        textarea {
          min-height: 150px;
          resize: vertical;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: #0288d1;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background 0.3s ease;
        }

        .submit-btn:hover {
          background: #01579b;
        }

        .btn-icon {
          width: 1.2rem;
          height: 1.2rem;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          color: inherit;
          transition: background 0.3s ease;
        }

        .info-item:hover {
          background: rgba(2, 136, 209, 0.1);
        }

        .info-icon {
          background: rgba(2, 136, 209, 0.1);
          padding: 0.75rem;
          border-radius: 0.5rem;
          color: #0288d1;
        }

        .info-content h3 {
          margin: 0;
          font-size: 1.1rem;
          color: #1a237e;
        }

        .info-content p {
          margin: 0.25rem 0 0;
          color: #666;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(2, 136, 209, 0.1);
          color: #0288d1;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: #0288d1;
          color: white;
          transform: translateY(-3px);
        }

        .submitted-data {
          margin-top: 2rem;
        }

        .submitted-data p {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Contact;
