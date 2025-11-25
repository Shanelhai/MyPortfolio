import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>Let’s work together — I’m always open to new opportunities.</p>
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
          <form 
            className="contact-form"
            action="https://formsubmit.co/shanelhai7@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" 
              name="_next" 
              value="https://shanelhai.github.io/portfolio/#/contact" 
            />

            <div className="input-group">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>

            <input type="text" 
              className="subject-input" 
              name="subject"
              placeholder="Subject" 
            />

            <textarea 
              name="message"
              placeholder="Your Message" 
              required
            ></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
