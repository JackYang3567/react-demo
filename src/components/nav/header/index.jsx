import React, { Component } from 'react';
import {Link } from 'react-router-dom'
/*
import logo from '../../../logo.svg';
<img src={logo}  className="App-logo"  />
*/
import './Header.css';

const selectedStyle = {
  backgroundColor: "white",
  color: "white"
}

class Header extends Component {
  
  render() {
    
    return (
      <div>
          <div className="navbar">
              <div className="container">
                  <div className="row">
                      <div className="col s3">
                          <div className="content-left">
                              <a href="#slide-out" data-activates="slide-out" className="sidebar"><i className="fas fa-bars"></i></a>
                          </div>
                      </div>
                     
                      <div className="col s6">
                          <div className="content-center">
                          <Link to='/' activeStyle={selectedStyle}> <h1>GK棋牌</h1></Link>
                          <Link to='/contact' activeStyle={selectedStyle}> <h1>Contact</h1></Link>
                          </div>
                      </div>
                      <div className="col s3">
                          <div className="content-right">
                              <a href="#modal" className="modal-trigger">
                                  <i className="fas fa-user"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      );
    }
  }
  
export default Header;
