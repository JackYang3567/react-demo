import React, { Component } from 'react';
//import logo from './logo.svg';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
     
          <footer>
              <div className="container">
                  <div className="wrap-logo">
                      <h3>UVEN</h3>
                  </div>
                  <div className="wrap-social">
                      <ul>
                          <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href=""><i className="fab fa-instagram"></i></a></li>
                          <li><a href=""><i className="fab fa-google"></i></a></li>
                          <li><a href=""><i className="fab fa-youtube"></i></a></li>
                      </ul>
                  </div>
                  <div className="footer-text">
                      <p>Copyright © All Right <a href="http://www.17sucai.com/" title="bootstrapmb">Reserved</a></p>
                  </div>
              </div>
          </footer>
     
      );
    }
  }
  
export default Footer;