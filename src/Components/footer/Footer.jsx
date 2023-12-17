import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">
          Follow us on social media
        </div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-instagram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "black" }} className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "blue" }} className="bi bi-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-link">
            <Link to ='/' className="footer-links">Home</Link>
            <Link to='/authors' className="footer-links">Authors</Link>
            <Link to='/about' className="footer-links">About Us</Link>
            <Link to='/contact' className="footer-links">Conact Us</Link>
            <Link to='/register' className="footer-links">Register</Link>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Conatact Information</h3>
          <div className="footer-aderss-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Egypt - cairo - Alsalam st
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              010-11-92-72-89
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              Khaledmahran@gmail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            natus necessitatibus, odio ut facere nesciunt nulla veniam impedit
            velit fugiat praesentium alias laborum, exercitationem quasi,
            voluptates ipsam quam autem a? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. 
          
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
