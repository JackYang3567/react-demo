import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class ProfileModal extends Component {
  render() {
    return (
      
    <div className="profile-modal">
            <div className="container">
                <div className="wrappers">
                    <div className="wrap-modal">
                        <div id="modal" className="modal modal-service">
                            <div className="modal-content">
                                <div className="m-header">
                                    <div className="icon-close">
                                        <a href="#!" className="modal-close"><i className="fas fa-times"></i></a>
                                    </div>
                                </div>
                                <div className="m-avatar">
                                    <img src="images/testimonial1.png" alt=""/>
                                    <h4>Jonathan</h4>
                                    <span>Agent</span>
                                </div>
                                <div className="m-info">
                                    <ul>
                                        <li>Name <span>Jonathan Paulo</span></li>
                                        <li>Age <span>29</span></li>
                                        <li>Address <span>United States</span></li>
                                    </ul>
                                </div>
                                <div className="m-gallery">
                                    <div className="row">
                                        <div className="col s6">
                                            <a href="images/gallery1.jpg" data-lightbox="galleryProfile"><img src="images/gallery1.jpg" alt=""/></a>
                                        </div>
                                        <div className="col s6">
                                            <a href="images/gallery2.jpg" data-lightbox="galleryProfile"><img src="images/gallery2.jpg" alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s6">
                                            <a href="images/gallery3.jpg" data-lightbox="galleryProfile"><img src="images/gallery3.jpg" alt=""/></a>
                                        </div>
                                        <div className="col s6">
                                            <a href="images/gallery4.jpg" data-lightbox="galleryProfile"><img src="images/gallery4.jpg" alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s6">
                                            <a href="images/gallery5.jpg" data-lightbox="galleryProfile"><img src="images/gallery5.jpg" alt=""/></a>
                                        </div>
                                        <div className="col s6">
                                            <a href="images/gallery6.jpg" data-lightbox="galleryProfile"><img src="images/gallery6.jpg" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
      );
    }
  }
  
export default ProfileModal;