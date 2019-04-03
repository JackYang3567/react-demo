import React, { Component } from 'react';
import Master from '../../master'

class Contact extends Component {
  render() {
    return (
      <Master>
            <div className="wrap-map">
                <iframe className="map" src="http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d16785.625443096556!2d-87.69917247215992!3d41.950732042199576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd271eff9a9f1%3A0xe7d640c19813fb5b!2sN+Western+Ave%2C+Chicago%2C+IL%2C+Amerika+Serikat!5e0!3m2!1sid!2sid!4v1541599989429" style={{border:0}} allowfullscreen></iframe>
           </div>


    <div className="contact">
        <div className="container">
            <div className="wrap-info">
                <ul>
                    <li><i className="fas fa-map-marker-alt"></i>North Western Chicago, United States</li>
                    <li><i className="fas fa-phone"></i>+1 23 456 789</li>
                    <li><i className="fas fa-envelope"></i><a href="http://www.17sucai.com/" className="__cf_email__" data-cfemail="315449505c415d5471555e5c50585f1f525e5c">[email&#160;protected]</a></li>
                </ul>
            </div>
            <div className="wrap-social">
                <div className="wrap-title">
                    <h5>Follow Us</h5>
                </div>
                <ul>
                    <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href=""><i className="fab fa-twitter"></i></a></li>
                    <li><a href=""><i className="fab fa-instagram"></i></a></li>
                    <li><a href=""><i className="fab fa-google"></i></a></li>
                </ul>
            </div>
            <div className="wrap-form">
                <div className="wrap-title">
                    <h5>Leave Your Message</h5>
                </div>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone"/>
                    <textarea cols="30" rows="10" placeholder="Message"></textarea>
                    <p>
                        <input type="checkbox" id="test" />
                        <label htmlFor="test"><span>Agree to the Terms and Privacy Policy</span></label>
                    </p>
                    <button className="button">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </div>
      </Master>
      );
    }
  }
  
export default Contact;