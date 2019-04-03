import React, { Component } from 'react';
//import logo from './logo.svg';
import Master from '../../master'
import ProfileModal from './profile-modal'

import Slider  from '../../slide'
//import './App.css';

class App extends Component {
  render() {
    return (
        <div>
        
        <Master>
          <Slider />
               
        


          <div className="features segments">
              <div className="container">
                  <div className="row">
                      <div className="col s6">
                          <div className="content">
                              <i className="fas fa-desktop"></i>
                              <h6>Clean</h6>
                          </div>
                      </div>
                      <div className="col s6">
                          <div className="content">
                              <i className="fas fa-chart-area"></i>
                              <h6>Marketing</h6>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col s6">
                          <div className="content">
                              <i className="fas fa-star"></i>
                              <h6>Update</h6>
                          </div>
                      </div>
                      <div className="col s6">
                          <div className="content">
                              <i className="fas fa-phone"></i>
                              <h6>Support</h6>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div className="best-properties segments bg-second">
              <div className="container">
                  <div className="section-title">
                      <h3>BEST PROPERTIES</h3>
                  </div>
                  <div className="row">
                      <div className="col s6">
                          <div className="content">
                              <div className="image">
                                  <img src="images/property1.jpg" alt=""/>
                                  <div className="info-price">
                                      <span>$128.00</span>
                                  </div>
                              </div>
                              <div className="text">
                                  <a href="properties-details.html"><h5>Traditional Home</h5></a>
                                  <span>FOR RENT</span>
                                  <p><i className="fas fa-map-marker-alt"></i>Ipsum Street, 430</p>
                              </div>
                          </div>
                      </div>
                      <div className="col s6">
                          <div className="content">
                              <div className="image">
                                  <img src="images/property2.jpg" alt=""/>
                                  <div className="info-price">
                                      <span>$213.00</span>
                                  </div>
                              </div>
                              <div className="text">
                                  <a href="properties-details.html"><h5>Luxury Home</h5></a>
                                  <span>FOR SALE</span>
                                  <p><i className="fas fa-map-marker-alt"></i>Ipsum Street, 430</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col s6">
                          <div className="content">
                              <div className="image">
                                  <img src="images/property3.jpg" alt=""/>
                                  <div className="info-price">
                                      <span>$128.00</span>
                                  </div>
                              </div>
                              <div className="text">
                                  <a href="properties-details.html"><h5>Natural Home</h5></a>
                                  <span>FOR RENT</span>
                                  <p><i className="fas fa-map-marker-alt"></i>Ipsum Street, 430</p>
                              </div>
                          </div>
                      </div>
                      <div className="col s6">
                          <div className="content">
                              <div className="image">
                                  <img src="images/property4.jpg" alt=""/>
                                  <div className="info-price">
                                      <span>$213.00</span>
                                  </div>
                              </div>
                              <div className="text">
                                  <a href="properties-details.html"><h5>Modern Home</h5></a>
                                  <span>FOR SALE</span>
                                  <p><i className="fas fa-map-marker-alt"></i>Ipsum Street, 430</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div className="latest-news segments">
              <div className="container">
                  <div className="section-title">
                      <h3>LATEST NEWS</h3>
                  </div>
                  <div className="row">
                      <div className="col s6">
                          <div className="content">
                              <img src="images/latest-news1.jpg" alt=""/>
                              <div className="text">
                                  <a href="blog-single.html"><h5>New Residence</h5></a>
                                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col s6">
                          <div className="content">
                              <img src="images/latest-news2.jpg" alt="" />
                              <div className="text">
                                  <a href="blog-single.html"><h5>Unique Design</h5></a>
                                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <ProfileModal />
        </Master>
      </div>
      );
    }
  }
  
export default App;