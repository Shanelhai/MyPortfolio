import React, { useState } from "react";
import './Contact.css';
import Footer from "../Footer/Footer";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const result = await emailjs.send(
        "service_u1a3rmt",           
        "template_ia45pgb",          
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "CeFckXnqpF2aoKtNZ"         
      );

      console.log("Result:", result);

      if (result.status === 200) {
        setSuccessMsg("✅ Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.log("Error:", err);
      setErrorMsg(`❌ ${err.text || "Failed to send message. Please try again."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>Let's work together — I'm always open to new opportunities.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Whether you have a project idea, want to collaborate, or just want to
              say hello — feel free to drop a message.
            </p>

            <div className="info-box">
              <h3>Email</h3>
              <p>shanelhai7@gmail.com</p>
            </div>

            <div className="info-box">
              <h3>Phone</h3>
              <p>+91 8449983380</p>
            </div>

            <div className="info-box">
              <h3>Location</h3>
              <p>Haldwani, Uttarakhand</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="send-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {successMsg && <p className="success" style={{color: "green", marginTop: "10px"}}>{successMsg}</p>}
            {errorMsg && <p className="error" style={{color: "red", marginTop: "10px"}}>{errorMsg}</p>}
          </form>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;