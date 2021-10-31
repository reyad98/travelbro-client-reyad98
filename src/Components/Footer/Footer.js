import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-dark">
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 item">
            <h3>Services</h3>
            <ul>
              <li>Tour Guide</li>
              <li>Photographer</li>
              <li>Cottege</li>
            </ul>
          </div>
          <div className="col-md-6 item text">
            <h3>Travel Monday</h3>
            <p>Vlogs, or video blogs, are the video equivalent of a blog post. Travel vlogs are typically very personal, overall pretty natural, focused on reality, and for the most part they don't need to be perfectly edited or filmed they are often filmed by yourself, selfie style.</p>
          </div>
         
        </div>
        <p className="copyright">Company Name © 2018</p>
      </div>
    </footer>
  </div>
    );
};

export default Footer;