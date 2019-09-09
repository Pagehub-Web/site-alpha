import React from "react"

const ContactForm = props => (
  <div id="contact-form">
    <div className="title">
      <h2
        style={{
          padding: "0 10px",
          textAlign: "center",
        }}
      >
        <span style={{ borderBottom: "1px solid black", padding: "0 10px" }}>
          Contact
        </span>
      </h2>
    </div>
    <form name="contact" method="POST" data-netlify="true">
      <div className="form-group">
        <label for="nameField">Your Name:</label>
        <input type="text" name="name" class="form-control" id="nameField" />
      </div>
      <div className="form-group">
        <label for="emailField">Your Email:</label>
        <input type="email" name="email" class="form-control" id="emailField" />
      </div>
      <div className="form-group">
        <label for="emailField">Your Phone Number:</label>
        <input type="email" name="email" class="form-control" id="emailField" />
      </div>
      <div className="form-group">
        <label for="message">Message:</label>
        <textarea
          className="form-control"
          name="message"
          id="message"
        ></textarea>
      </div>
      <p>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </p>
    </form>
  </div>
)

export default ContactForm
