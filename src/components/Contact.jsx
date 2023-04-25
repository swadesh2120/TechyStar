import React from "react";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required placeholder="Abc" />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" required placeholder="abc@gmail.com" />
          </div>
          
          <div>
            <label htmlFor="">Message</label>
            <input
              type="text"
              required
              placeholder="tell me about your query"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
