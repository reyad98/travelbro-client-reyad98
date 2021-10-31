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
              <li>Doctor</li>
              <li>Health Care</li>
              <li>Digital Lab</li>
            </ul>
          </div>
          <div className="col-md-6 item text">
            <h3>Doc Time App</h3>
            <p>We open 24/7.Best services to our petiants.Our doctors are well qualified and treatment all as a resonable price</p>
          </div>
         
        </div>
        <p className="copyright">Company Name © 2018</p>
      </div>
    </footer>
  </div>
    );
};

export default Footer;