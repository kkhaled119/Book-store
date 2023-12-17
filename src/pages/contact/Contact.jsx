import "./contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill"></i>
            Address
          </div>
          <p className="contact-item-text">Egypt-Cairo</p>
        </div>

        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill"></i>
            phone
          </div>
          <p className="contact-item-text">010-11-92-72-89</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-fill"></i>
            Email
          </div>
          <p className="contact-item-text">Khlaedmahran123@gmail.com</p>
        </div>
      </div>
      <form onSubmit={e=>e.preventDefault()} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Email" />
        </div>
        <textarea className="contact-textarea" placeholder="Your Message *" rows="5"></textarea>
        <button className="contact-btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;
