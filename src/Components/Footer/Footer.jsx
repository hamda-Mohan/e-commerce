import React from 'react';
import './Footer.css';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-logo">
        <p>FASHION<span>STORE</span></p>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul className="footer-links">
            <li>Contact Us</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social-icons">
            <div className="footer-icons-container">
              <img src={instagram_icon} alt="Instagram" />
            </div>
            <div className="footer-icons-container">
              <img src={pinterest_icon} alt="Pinterest" />
            </div>
            <div className="footer-icons-container">
              <img src={whatsapp_icon} alt="WhatsApp" />
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <form className="footer-newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>&copy; 2024 FASHIONSTORE - All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
